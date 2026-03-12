import React, { useState, useMemo } from 'react'
import { STATE_DATA, LABELED_STATES } from '@/data/states'
import { GEO_FOCUS } from '@/data/geoFocus'
import { REGION_COLORS } from '@/data/regions'
import { EVENT_COLORS } from '@/data/layers'
import { MAP_EVENTS } from '@/data/mockData'
import { REGION_META, QUICK_FOCUS } from '@/data/regions'
import type { MapEvent } from '@/types'

// Enhanced Tooltip Interface
interface Tooltip { name: string; region: string; x: number; y: number; activeEvents: number }

interface Props {
  selectedState: string | null
  selectedRegion: string
  geoFocus: string | null
  layers: Record<string, boolean>
  timeRange: number | string
  onStateClick: (id: string) => void
  onGeoFocus: (id: string) => void
}

export default function IndiaMap({
  selectedState, selectedRegion, geoFocus, layers, timeRange, onStateClick, onGeoFocus,
}: Props) {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)

  // Memoize calculations for performance
  const geoStates = useMemo(() => 
    geoFocus ? (GEO_FOCUS.find(g => g.id === geoFocus)?.states ?? []) : [], 
  [geoFocus])

  const regionStateIds = useMemo(() => {
    const meta = REGION_META.find(r => r.id === selectedRegion)
    return (meta as any)?.states as string[] | undefined
  }, [selectedRegion])

  const visibleEvents = useMemo(() => 
    MAP_EVENTS.filter(ev => layers[ev.type]), 
  [layers])

  const getStateFill = (s: typeof STATE_DATA[0]) => {
    if (selectedState === s.id) return '#F59E0B'
    const base = REGION_COLORS[s.region] ?? '#1E3A5F'
    
    // Dim out non-focused areas
    const isFocused = (geoFocus && geoStates.includes(s.id)) || 
                     (regionStateIds && regionStateIds.includes(s.id)) ||
                     (!geoFocus && !regionStateIds)

    return isFocused ? base : '#0A1525'
  }

  const getStateOpacity = (s: typeof STATE_DATA[0]) => {
    if (selectedState === s.id) return 1
    const isFocused = (geoFocus && geoStates.includes(s.id)) || 
                     (regionStateIds && regionStateIds.includes(s.id)) ||
                     (!geoFocus && !regionStateIds)
    return isFocused ? 0.85 : 0.15
  }

  return (
    <div style={{ 
      position: 'relative', width: '100%', height: '100%', 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#050C1A', borderRadius: '12px', overflow: 'hidden',
      boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
    }}>
      
      {/* Background Tech Grid */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08, pointerEvents: 'none' }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1" fill="#3B82F6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating Header UI (Glassmorphism) */}
      <div style={{ 
        position: 'absolute', top: 16, display: 'flex', gap: 8, zIndex: 10,
        padding: '6px', background: 'rgba(15, 23, 42, 0.6)', 
        backdropFilter: 'blur(12px)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {QUICK_FOCUS.map(q => (
          <button
            key={q.id}
            onClick={() => onGeoFocus(q.id)}
            style={{
              fontSize: 11, padding: '6px 14px', borderRadius: '18px',
              border: 'none', transition: 'all 0.2s ease',
              background: geoFocus === q.id ? '#3B82F6' : 'transparent',
              color: geoFocus === q.id ? '#fff' : '#94A3B8',
              cursor: 'pointer', fontWeight: 600
            }}
          >
            {q.icon} <span style={{ marginLeft: 4 }}>{q.label}</span>
          </button>
        ))}
      </div>

      <svg
        viewBox="0 0 520 600"
        style={{ width: '90%', height: '90%', filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="stateGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <linearGradient id="stateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* State Paths */}
        {STATE_DATA.map(s => {
          const isSelected = selectedState === s.id;
          return (
            <g key={s.id} style={{ cursor: 'pointer' }} onClick={() => onStateClick(s.id)}>
              {/* Drop Shadow Path */}
              <path d={s.path} fill="#000" opacity=".4" transform="translate(3,4)" />
              
              {/* Main State Path */}
              <path
                d={s.path}
                fill={getStateFill(s)}
                opacity={getStateOpacity(s)}
                stroke={isSelected ? '#F59E0B' : '#0F172A'}
                strokeWidth={isSelected ? 2 : 0.8}
                style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltip({ 
                    name: s.name, 
                    region: s.region, 
                    x: e.clientX, 
                    y: e.clientY - 40,
                    activeEvents: visibleEvents.filter(v => v.stateId === s.id).length
                  })
                }}
                onMouseLeave={() => setTooltip(null)}
              />

              {/* State Labels (Enhanced contrast) */}
              {LABELED_STATES.has(s.id) && getStateOpacity(s) > 0.5 && (
                <text
                  x={s.cx} y={s.cy}
                  textAnchor="middle" fontSize="9" fontWeight="700"
                  fill="white" opacity="0.6" style={{ pointerEvents: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                >
                  {s.short}
                </text>
              )}
            </g>
          )
        })}

        {/* Enhanced Event Markers */}
        {visibleEvents.map(ev => (
          <g key={ev.id} transform={`translate(${ev.lon}, ${ev.lat})`}>
            <circle r="10" fill={EVENT_COLORS[ev.type]} opacity="0.2">
              <animate attributeName="r" from="8" to="18" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.3" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill={EVENT_COLORS[ev.type]} stroke="#fff" strokeWidth="1.5" />
          </g>
        ))}
      </svg>

      {/* Modern Tooltip */}
      {tooltip && (
        <div style={{
          position: 'fixed', left: tooltip.x, top: tooltip.y,
          transform: 'translate(-50%, -100%)', pointerEvents: 'none',
          background: 'rgba(15, 23, 42, 0.95)', border: '1px solid #334155',
          padding: '8px 12px', borderRadius: '8px', zIndex: 100,
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)'
        }}>
          <div style={{ color: '#F8FAFC', fontSize: '12px', fontWeight: 600 }}>{tooltip.name}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '4px' }}>
            <span style={{ color: '#94A3B8', fontSize: '10px' }}>{tooltip.region.toUpperCase()}</span>
            {tooltip.activeEvents > 0 && (
              <span style={{ color: '#F59E0B', fontSize: '10px', fontWeight: 700 }}>● {tooltip.activeEvents} ALERTS</span>
            )}
          </div>
        </div>
      )}

      {/* Legend / Status Bar */}
      <div style={{ 
        position: 'absolute', bottom: 16, left: 16, right: 16, 
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'
      }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ color: '#475569', fontSize: '10px', fontWeight: 700, marginBottom: '4px' }}>MAP SCALE</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #3B82F6 50%, #1E293B 50%)' }} />
            <span style={{ color: '#94A3B8', fontSize: '9px', fontFamily: 'monospace' }}>1000 KM</span>
          </div>
        </div>

        <div style={{ 
          fontSize: '10px', fontWeight: 600, color: '#60A5FA', 
          background: 'rgba(59, 130, 246, 0.1)', padding: '4px 10px', 
          borderRadius: '4px', border: '1px solid rgba(59, 130, 246, 0.2)' 
        }}>
          LIVE DATA • {timeRange === 24 ? 'REAL-TIME' : 'ARCHIVE'}
        </div>
      </div>
    </div>
  )
}
