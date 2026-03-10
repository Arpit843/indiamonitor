import { useState, useCallback } from 'react'
import { LAYERS_DEF } from '@/data/layers'
import { STATE_DATA } from '@/data/states'
import type { PanelId } from '@/types'

export function useAppState() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all')
  const [selectedState,  setSelectedState]  = useState<string | null>(null)
  const [geoFocus,       setGeoFocus]       = useState<string | null>(null)
  const [activePanel,    setActivePanel]    = useState<PanelId>('environ')
  const [layers,         setLayers]         = useState<Record<string, boolean>>(
    () => Object.fromEntries(LAYERS_DEF.map(l => [l.id, l.active]))
  )
  const [timeRange,  setTimeRange]  = useState<number | string>(24)
  const [leftOpen,   setLeftOpen]   = useState(true)
  const [rightOpen,  setRightOpen]  = useState(true)

  const handleStateClick = useCallback((id: string | null) => {
    setSelectedState(prev => (prev === id ? null : id))
    if (id) {
      const s = STATE_DATA.find(s => s.id === id)
      if (s) setSelectedRegion(s.region)
    }
  }, [])

  const handleRegionClick = useCallback((id: string) => {
    setSelectedRegion(id)
    setSelectedState(null)
    setGeoFocus(null)
  }, [])

  const handleGeoFocus = useCallback((id: string) => {
    setGeoFocus(prev => (prev === id ? null : id))
    setSelectedState(null)
  }, [])

  const toggleLayer = useCallback((id: string) => {
    setLayers(prev => ({ ...prev, [id]: !prev[id] }))
  }, [])

  return {
    selectedRegion, selectedState, geoFocus, activePanel, layers,
    timeRange, leftOpen, rightOpen,
    setSelectedRegion, setSelectedState, setGeoFocus,
    setActivePanel: setActivePanel as (id: PanelId) => void,
    setTimeRange, setLeftOpen, setRightOpen,
    handleStateClick, handleRegionClick, handleGeoFocus, toggleLayer,
  }
}
