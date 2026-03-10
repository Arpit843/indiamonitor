import React from 'react'

interface Props {
  label: string
  value: string | number
  unit?: string
  change?: number
  color?: string
}

export default function StatBox({ label, value, unit = '', change, color = '#3B82F6' }: Props) {
  const positive = change !== undefined && change >= 0
  return (
    <div
      style={{
        background: '#0C1829',
        border: '1px solid #1E3A5F',
        borderRadius: 6,
        padding: '8px 10px',
        flex: 1,
      }}
    >
      <div style={{ fontSize: 10, color: '#6B8FAD', fontFamily: "'JetBrains Mono'", marginBottom: 3 }}>
        {label}
      </div>
      <div style={{ fontSize: 16, fontFamily: "'Rajdhani'", fontWeight: 700, color }}>
        {value}
        <span style={{ fontSize: 11, color: '#4A6D8C' }}> {unit}</span>
      </div>
      {change !== undefined && (
        <div style={{ fontSize: 10, color: positive ? '#22C55E' : '#EF4444', marginTop: 2 }}>
          {positive ? '▲' : '▼'} {Math.abs(change)}%
        </div>
      )}
    </div>
  )
}
