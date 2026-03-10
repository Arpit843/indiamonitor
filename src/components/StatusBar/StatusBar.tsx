import React from 'react'
import LiveDot from '@/components/ui/LiveDot'

interface Props {
  time: Date
}

const SOURCES = 'IMD · NDMA · NSE · BSE · AAI · MoRTH · MoHFW · ISRO · CWC · CPCB'

export default function StatusBar({ time }: Props) {
  return (
    <footer
      style={{
        background: '#050C1A',
        borderTop: '1px solid #0F2040',
        padding: '3px 14px',
        display: 'flex', gap: 14, alignItems: 'center',
        flexShrink: 0, height: 22,
      }}
    >
      <span style={{ fontSize: 8, color: '#1E4D6B', fontFamily: "'JetBrains Mono'" }}>
        INDIA MONITOR v2.0
      </span>
      <span style={{ fontSize: 8, color: '#1E4D6B', fontFamily: "'JetBrains Mono'" }}>
        DATA SOURCES: {SOURCES}
      </span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
        <LiveDot color="#22C55E" size={5} />
        <span style={{ fontSize: 8, color: '#22C55E', fontFamily: "'JetBrains Mono'" }}>
          ALL FEEDS NOMINAL
        </span>
        <span style={{ fontSize: 8, color: '#1E4D6B', fontFamily: "'JetBrains Mono'" }}>
          LAST SYNC: {time.toLocaleTimeString('en-IN', { hour12: false })}
        </span>
      </div>
    </footer>
  )
}
