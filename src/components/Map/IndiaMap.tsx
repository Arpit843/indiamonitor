import React, { useState } from 'react'
import { STATE_DATA, LABELED_STATES } from '@/data/states'
import { GEO_FOCUS } from '@/data/geoFocus'
import { REGION_COLORS } from '@/data/regions'
import { EVENT_COLORS } from '@/data/layers'
import { MAP_EVENTS } from '@/data/mockData'
import { REGION_META, QUICK_FOCUS } from '@/data/regions'
import type { MapEvent } from '@/types'

interface Props {
  selectedState: string | null
  selectedRegion: string
  geoFocus: string | null
  layers: Record<string, boolean>
  timeRange: number | string
  onStateClick: (id: string) => void
  onGeoFocus: (id: string) => void
}

interface Tooltip { name: string; region: string; x: number; y: number }

export default function IndiaMap({
  selectedState, selectedRegion, geoFocus, layers, timeRange, onStateClick, onGeoFocus,
}: Props) {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)

  const geoStates      = geoFocus ? (GEO_FOCUS.find(g => g.id === geoFocus)?.states ?? []) : []
  const regionMeta     = REGION_META.find(r => r.id === selectedRegion)
  const regionStateIds = (regionMeta as any)?.states as string[] | undefined

  const getStateFill = (s: typeof STATE_DATA[0]) => {
    if (selectedState === s.id) return '#F59E0B'
    const base = REGION_COLORS[s.region] ?? '#1E3A5F'
    if (geoFocus)       return geoStates.includes(s.id)      ? base : '#0A1525'
    if (regionStateIds) return regionStateIds.includes(s.id) ? base : '#0A1525'
    return base
  }

  const getStateOpacity = (s: typeof STATE_DATA[0]) => {
    if (selectedState === s.id)                              return 1
    if (geoFocus && !geoStates.includes(s.id))              return 0.2
    if (regionStateIds && !regionStateIds.includes(s.id))   return 0.2
    return 0.82
  }

  const visibleEvents = MAP_EVENTS.filter(ev => layers[ev.type])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Grid */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05, pointerEvents: 'none' }}>
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Quick Focus Pills */}
      <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5, zIndex: 10, flexWrap: 'nowrap' }}>
        {QUICK_FOCUS.map(q => (
          <button
            key={q.id}
            className="clickable"
            onClick={() => onGeoFocus(q.id)}
            style={{
              fontSize: 10, padding: '3px 9px', borderRadius: 12,
              border: `1px solid ${geoFocus === q.id ? '#22C55E' : '#1A3050'}`,
              background: geoFocus === q.id ? 'rgba(34,197,94,.12)' : 'rgba(7,17,30,.85)',
              color: geoFocus === q.id ? '#86EFAC' : '#4A6D8C',
              whiteSpace: 'nowrap', cursor: 'pointer', backdropFilter: 'blur(4px)',
            }}
          >
            {q.icon} {q.label}
          </button>
        ))}
      </div>

      {/* SVG Map */}
      <svg
        viewBox="10 0 510 580"
        style={{ width: '100%', height: '100%', maxHeight: 'calc(100vh - 200px)', overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="oceanGlow" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#0A2040" stopOpacity=".5" />
            <stop offset="100%" stopColor="#050C1A" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect x="-100" y="-100" width="900" height="900" fill="url(#oceanGlow)" />

        {/* States */}
        {STATE_DATA.map(s => (
          <g key={s.id}>
            <path d={s.path} fill="#000" opacity=".25" transform="translate(2,2)" />
            <path
              className="state-path"
              d={s.path}
              fill={getStateFill(s)}
              opacity={getStateOpacity(s)}
              stroke="#050C1A"
              strokeWidth="1.2"
              onClick={() => onStateClick(s.id)}
              onMouseEnter={(e) => {
                const rect = (e.target as SVGElement).closest('svg')!.getBoundingClientRect()
                setTooltip({ name: s.name, region: s.region, x: e.clientX - rect.left + 12, y: e.clientY - rect.top - 36 })
              }}
              onMouseLeave={() => setTooltip(null)}
            />
            {LABELED_STATES.has(s.id) && (
              <text
                x={s.cx} y={s.cy}
                textAnchor="middle" dominantBaseline="middle"
                fill="rgba(255,255,255,0.5)"
                fontSize="8" fontFamily="'Rajdhani'" fontWeight="600"
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                {s.short}
              </text>
            )}
          </g>
        ))}

        {/* Selected state highlight ring */}
        {selectedState && (
          <path
            d={STATE_DATA.find(s => s.id === selectedState)?.path}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            filter="url(#glow)"
            style={{ pointerEvents: 'none' }}
          />
        )}

        {/* Event markers */}
        {visibleEvents.map(ev => {
          const col = EVENT_COLORS[ev.type] ?? '#3B82F6'
          return (
            <g key={ev.id}>
              <circle cx={ev.lon} cy={ev.lat} r="12" fill={col} opacity=".12" className="pulse" />
              <circle cx={ev.lon} cy={ev.lat} r="5"  fill={col} filter="url(#glow)" />
              {ev.type === 'cyclone' && (
                <text x={ev.lon} y={ev.lat} textAnchor="middle" dominantBaseline="middle"
                  fontSize="13" style={{ pointerEvents: 'none' }}>🌀</text>
              )}
              {ev.type === 'fire' && (
                <text x={ev.lon} y={ev.lat} textAnchor="middle" dominantBaseline="middle"
                  fontSize="11" style={{ pointerEvents: 'none' }}>🔥</text>
              )}
            </g>
          )
        })}

        {/* Compass */}
        <g transform="translate(490,545)">
          <circle r="16" fill="#0C1829" stroke="#1E3A5F" />
          <text textAnchor="middle" y="-7" fill="#94C5FF" fontSize="8" fontFamily="'JetBrains Mono'">N</text>
          <line x1="0" y1="-12" x2="0" y2="-5" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="0" y1="5"   x2="0" y2="12" stroke="#6B8FAD" strokeWidth="1" />
        </g>

        {/* Scale bar */}
        <g transform="translate(20,565)">
          <rect width="80" height="3" fill="#1E3A5F" />
          <rect width="40" height="3" fill="#3B82F6" />
          <text x="0"  y="12" fill="#6B8FAD" fontSize="7" fontFamily="'JetBrains Mono'">0</text>
          <text x="35" y="12" fill="#6B8FAD" fontSize="7" fontFamily="'JetBrains Mono'">500</text>
          <text x="70" y="12" fill="#6B8FAD" fontSize="7" fontFamily="'JetBrains Mono'">1000 km</text>
        </g>
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div className="map-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
          <span style={{ color: '#F59E0B', fontWeight: 700 }}>{tooltip.name}</span>
          <span style={{ color: '#4A6D8C', marginLeft: 10 }}>{tooltip.region.toUpperCase()}</span>
        </div>
      )}

      {/* Time range badge */}
      <div style={{ position: 'absolute', bottom: 36, right: 12, fontSize: 9, fontFamily: "'JetBrains Mono'", color: '#3B6A9C', background: 'rgba(7,17,30,.8)', padding: '2px 8px', borderRadius: 3, border: '1px solid #1A3050' }}>
        ⏱ {timeRange === 24 ? 'LAST 24H' : timeRange === '7d' ? 'LAST 7 DAYS' : 'LAST 30 DAYS'}
      </div>
    </div>
  )
}
