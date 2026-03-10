import React from 'react'
import { REGIONAL_SUMMARIES } from '@/data/mockData'
import { STATE_DATA } from '@/data/states'

interface Props {
  region: string
  state: string | null
}

export default function RegionalSummary({ region, state }: Props) {
  const stateData  = state ? STATE_DATA.find(s => s.id === state) : null
  const regionKey  = stateData?.region ?? region
  const regionName = stateData?.name ?? (region === 'all' ? 'All India' : REGIONAL_SUMMARIES[region] ? region.charAt(0).toUpperCase() + region.slice(1) + ' India' : 'All India')
  const displayName = stateData?.name ?? (region === 'all' ? 'All India' : regionName)
  const summary = REGIONAL_SUMMARIES[regionKey] ?? REGIONAL_SUMMARIES['all']

  return (
    <div
      style={{
        background: 'rgba(59,130,246,.06)',
        border: '1px solid rgba(59,130,246,.18)',
        borderRadius: 6,
        padding: '8px 10px',
        margin: '8px 0 4px',
      }}
    >
      <div
        style={{
          fontSize: 10, color: '#3B82F6', fontFamily: "'Rajdhani'", fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 5,
        }}
      >
        📊 Regional Summary — {displayName}
      </div>
      <p style={{ fontSize: 11, color: '#94C5FF', lineHeight: 1.55 }}>
        {summary}
      </p>
    </div>
  )
}
