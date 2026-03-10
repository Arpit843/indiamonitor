import React from 'react'
import { PANEL_TABS } from '@/data/regions'
import RegionalSummary from './RegionalSummary'
import {
  EnvironmentPanel, WeatherPanel, InfraPanel,
  EconomyPanel, ServicesPanel, NewsPanel, HealthPanel,
} from './panels'
import type { PanelId } from '@/types'

interface Props {
  activePanel: PanelId
  selectedRegion: string
  selectedState: string | null
  onPanelChange: (id: PanelId) => void
  onClose: () => void
}

const PANEL_MAP: Record<PanelId, React.FC> = {
  environ:  EnvironmentPanel,
  weather:  WeatherPanel,
  infra:    InfraPanel,
  economy:  EconomyPanel,
  services: ServicesPanel,
  news:     NewsPanel,
  health:   HealthPanel,
}

export default function RightPanel({
  activePanel, selectedRegion, selectedState, onPanelChange, onClose,
}: Props) {
  const ActiveComponent = PANEL_MAP[activePanel]

  return (
    <aside
      style={{
        width: 300, minWidth: 300,
        background: '#0C1829',
        borderLeft: '1px solid #1A3050',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', flexShrink: 0,
      }}
    >
      {/* Tab bar */}
      <div
        style={{
          borderBottom: '1px solid #1A3050',
          display: 'flex', flexShrink: 0,
          overflowX: 'auto', alignItems: 'stretch',
        }}
      >
        {PANEL_TABS.map(t => (
          <button
            key={t.id}
            className={`panel-tab clickable`}
            onClick={() => onPanelChange(t.id as PanelId)}
            style={{
              fontSize: 10, padding: '7px 8px',
              border: 'none',
              borderBottom: `2px solid ${activePanel === t.id ? '#3B82F6' : 'transparent'}`,
              background: 'transparent',
              color: activePanel === t.id ? '#93C5FD' : '#4A6D8C',
              cursor: 'pointer', flexShrink: 0,
              fontFamily: 'inherit',
            }}
          >
            {t.label}
          </button>
        ))}
        <button
          onClick={onClose}
          style={{
            marginLeft: 'auto', padding: '0 10px', background: 'none',
            border: 'none', color: '#3B6A9C', cursor: 'pointer', fontSize: 13, flexShrink: 0,
          }}
        >
          ✕
        </button>
      </div>

      {/* Summary */}
      <div style={{ padding: '0 10px', flexShrink: 0 }}>
        <RegionalSummary region={selectedRegion} state={selectedState} />
      </div>

      {/* Panel content */}
      <div
        className="panel-enter"
        key={activePanel}
        style={{ flex: 1, overflowY: 'auto', padding: '4px 10px 16px' }}
      >
        <ActiveComponent />
      </div>
    </aside>
  )
}
