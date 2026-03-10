import React from 'react'
import Header from '@/components/Header/Header'
import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'
import IndiaMap from '@/components/Map/IndiaMap'
import RightPanel from '@/components/RightPanel/RightPanel'
import StatusBar from '@/components/StatusBar/StatusBar'
import { useClock } from '@/hooks/useClock'
import { useAppState } from '@/hooks/useAppState'
import { LAYERS_DEF } from '@/data/layers'
import type { PanelId } from '@/types'

export default function App() {
  const time = useClock()
  const {
    selectedRegion, selectedState, geoFocus, activePanel, layers,
    timeRange, leftOpen, rightOpen,
    setTimeRange, setLeftOpen, setRightOpen, setActivePanel,
    handleStateClick, handleRegionClick, handleGeoFocus, toggleLayer,
  } = useAppState()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>

      <Header
        time={time}
        timeRange={timeRange}
        onTimeRangeChange={setTimeRange}
      />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* Left sidebar or collapsed handle */}
        {leftOpen ? (
          <LeftSidebar
            selectedRegion={selectedRegion}
            selectedState={selectedState}
            geoFocus={geoFocus}
            layers={layers}
            onRegionClick={handleRegionClick}
            onStateClick={handleStateClick}
            onGeoFocus={handleGeoFocus}
            onLayerToggle={toggleLayer}
            onClose={() => setLeftOpen(false)}
          />
        ) : (
          <button
            onClick={() => setLeftOpen(true)}
            title="Open Filters"
            style={{
              width: 20, background: '#0C1829',
              border: 'none', borderRight: '1px solid #1A3050',
              color: '#4A6D8C', cursor: 'pointer',
              fontSize: 14, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ›
          </button>
        )}

        {/* Centre: Map + timeline */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
          <div style={{ flex: 1, padding: '8px 12px', overflow: 'hidden' }}>
            <IndiaMap
              selectedState={selectedState}
              selectedRegion={selectedRegion}
              geoFocus={geoFocus}
              layers={layers}
              timeRange={timeRange}
              onStateClick={handleStateClick}
              onGeoFocus={handleGeoFocus}
            />
          </div>

          {/* Timeline slider */}
          <div
            style={{
              background: '#070F1E', borderTop: '1px solid #1A3050',
              padding: '5px 16px', flexShrink: 0,
              display: 'flex', alignItems: 'center', gap: 12,
            }}
          >
            <span style={{ fontSize: 9, fontFamily: "'JetBrains Mono'", color: '#3B6A9C', whiteSpace: 'nowrap' }}>
              TIMELINE
            </span>
            <input
              type="range" min={0} max={100} defaultValue={100}
              style={{ flex: 1, accentColor: '#F59E0B', height: 3, cursor: 'pointer' }}
            />
            <span style={{ fontSize: 9, fontFamily: "'JetBrains Mono'", color: '#F59E0B', whiteSpace: 'nowrap' }}>
              NOW
            </span>
            <span style={{ fontSize: 9, fontFamily: "'JetBrains Mono'", color: '#4A6D8C', whiteSpace: 'nowrap' }}>
              ↔ {timeRange === 24 ? 'LAST 24H' : timeRange === '7d' ? 'LAST 7D' : 'LAST 30D'}
            </span>
          </div>
        </div>

        {/* Right panel or collapsed handle */}
        {rightOpen ? (
          <RightPanel
            activePanel={activePanel}
            selectedRegion={selectedRegion}
            selectedState={selectedState}
            onPanelChange={(id: PanelId) => setActivePanel(id)}
            onClose={() => setRightOpen(false)}
          />
        ) : (
          <button
            onClick={() => setRightOpen(true)}
            title="Open Data Panels"
            style={{
              width: 20, background: '#0C1829',
              border: 'none', borderLeft: '1px solid #1A3050',
              color: '#4A6D8C', cursor: 'pointer',
              fontSize: 14, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ‹
          </button>
        )}
      </div>

      <StatusBar time={time} />
    </div>
  )
}
