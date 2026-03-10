import React from 'react'
import { REGION_META } from '@/data/regions'
import { GEO_FOCUS } from '@/data/geoFocus'
import { LAYERS_DEF } from '@/data/layers'
import { STATE_DATA } from '@/data/states'

interface Props {
  selectedRegion: string
  selectedState: string | null
  geoFocus: string | null
  layers: Record<string, boolean>
  onRegionClick: (id: string) => void
  onStateClick: (id: string | null) => void
  onGeoFocus: (id: string) => void
  onLayerToggle: (id: string) => void
  onClose: () => void
}

const LABEL: React.CSSProperties = {
  fontSize: 9, fontFamily: "'JetBrains Mono'", color: '#3B6A9C',
  letterSpacing: 1.2, textTransform: 'uppercase', padding: '10px 12px 4px',
  display: 'block',
}

export default function LeftSidebar({
  selectedRegion, selectedState, geoFocus, layers,
  onRegionClick, onStateClick, onGeoFocus, onLayerToggle, onClose,
}: Props) {
  const sortedStates = [...STATE_DATA].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <aside
      style={{
        width: 220, minWidth: 220,
        background: '#0C1829',
        borderRight: '1px solid #1A3050',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', flexShrink: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '8px 12px', borderBottom: '1px solid #1A3050',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 10, fontFamily: "'Rajdhani'", fontWeight: 700, color: '#3B82F6', letterSpacing: 1 }}>
          REGIONS & FILTERS
        </span>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#4A6D8C', cursor: 'pointer', fontSize: 14, lineHeight: 1 }}
        >
          ✕
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Regions */}
        <span style={LABEL}>Regions</span>
        <div style={{ padding: '0 8px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          {REGION_META.map(r => (
            <button
              key={r.id}
              className={`region-btn clickable ${selectedRegion === r.id ? 'active' : ''}`}
              onClick={() => onRegionClick(r.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '5px 8px', borderRadius: 5,
                background: selectedRegion === r.id ? 'rgba(30,58,95,.5)' : 'rgba(12,24,41,.5)',
                cursor: 'pointer', textAlign: 'left', width: '100%',
                fontFamily: 'inherit',
              }}
            >
              <span>{r.icon}</span>
              <span style={{ fontSize: 11, color: selectedRegion === r.id ? '#D0E8FF' : '#7BA8D4' }}>
                {r.name}
              </span>
              {selectedRegion === r.id && (
                <span style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', background: r.color, flexShrink: 0 }} />
              )}
            </button>
          ))}
        </div>

        {/* State Selector */}
        <span style={LABEL}>State / UT</span>
        <div style={{ padding: '0 8px 6px' }}>
          <select
            value={selectedState ?? ''}
            onChange={e => onStateClick(e.target.value || null)}
            style={{
              width: '100%', background: '#0C1829', border: '1px solid #1E3A5F',
              borderRadius: 5, color: '#94C5FF', padding: '5px 8px',
              fontSize: 11, fontFamily: "'Noto Sans'", cursor: 'pointer', outline: 'none',
            }}
          >
            <option value="">— Select State / UT —</option>
            {sortedStates.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>

          {selectedState && (
            <div
              style={{
                marginTop: 6, padding: '5px 8px',
                background: 'rgba(245,158,11,.08)', border: '1px solid rgba(245,158,11,.2)',
                borderRadius: 4,
              }}
            >
              <div style={{ fontSize: 10, color: '#F59E0B', fontFamily: "'Rajdhani'", fontWeight: 700 }}>
                {STATE_DATA.find(s => s.id === selectedState)?.name}
              </div>
              <div style={{ fontSize: 9, color: '#4A6D8C', marginTop: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {STATE_DATA.find(s => s.id === selectedState)?.region} India
              </div>
              <button
                className="clickable"
                onClick={() => onStateClick(null)}
                style={{ fontSize: 9, color: '#4A6D8C', background: 'none', border: 'none', marginTop: 3, cursor: 'pointer', padding: 0 }}
              >
                ✕ Clear
              </button>
            </div>
          )}
        </div>

        {/* Geographic Focus */}
        <span style={LABEL}>Geographic Focus</span>
        <div style={{ padding: '0 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {GEO_FOCUS.map(g => (
            <button
              key={g.id}
              className={`geo-btn clickable ${geoFocus === g.id ? 'active' : ''}`}
              onClick={() => onGeoFocus(g.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '4px 8px', borderRadius: 4,
                background: geoFocus === g.id ? 'rgba(22,163,74,.1)' : 'transparent',
                border: `1px solid ${geoFocus === g.id ? 'rgba(22,163,74,.3)' : 'transparent'}`,
                cursor: 'pointer', textAlign: 'left', width: '100%',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: 13 }}>{g.icon}</span>
              <span style={{ fontSize: 10, color: geoFocus === g.id ? '#86EFAC' : '#6B8FAD' }}>
                {g.name}
              </span>
            </button>
          ))}
        </div>

        {/* Map Layers */}
        <span style={LABEL}>Map Layers</span>
        <div style={{ padding: '0 8px 16px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          {LAYERS_DEF.map(l => (
            <label
              key={l.id}
              className="layer-toggle"
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '4px 8px', borderRadius: 4,
                background: 'rgba(12,24,41,.4)', cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={!!layers[l.id]}
                onChange={() => onLayerToggle(l.id)}
                style={{ accentColor: l.color, width: 12, height: 12, cursor: 'pointer' }}
              />
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: l.color, flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: '#7BA8D4' }}>{l.name}</span>
              <span style={{ marginLeft: 'auto', fontSize: 9, color: layers[l.id] ? l.color : '#3B6A9C' }}>
                {layers[l.id] ? 'ON' : 'OFF'}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
