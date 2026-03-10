import React from 'react'
import LiveDot from '@/components/ui/LiveDot'
import { TICKER_ITEMS } from '@/data/mockData'

interface Props {
  time: Date
  timeRange: number | string
  onTimeRangeChange: (v: number | string) => void
}

export default function Header({ time, timeRange, onTimeRangeChange }: Props) {
  const tickerText = TICKER_ITEMS.join('   ·   ')

  return (
    <header
      style={{
        background: '#070F1E',
        borderBottom: '1px solid #1A3050',
        padding: '0 14px',
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        zIndex: 50,
        gap: 12,
      }}
    >
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>🇮🇳</span>
          <div>
            <div
              style={{
                fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 18,
                color: '#F59E0B', letterSpacing: 2, lineHeight: 1,
              }}
            >
              INDIA MONITOR
            </div>
            <div
              style={{
                fontSize: 9, color: '#4A6D8C',
                fontFamily: "'JetBrains Mono'", letterSpacing: 1,
              }}
            >
              NATIONAL INTELLIGENCE DASHBOARD
            </div>
          </div>
        </div>
        <div style={{ height: 24, width: 1, background: '#1A3050' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <LiveDot color="#22C55E" size={7} />
          <span
            style={{
              fontSize: 9, color: '#22C55E',
              fontFamily: "'JetBrains Mono'", letterSpacing: 0.5,
            }}
          >
            LIVE
          </span>
        </div>
      </div>

      {/* Ticker */}
      <div
        style={{
          flex: 1,
          overflow: 'hidden',
          height: 20,
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div
          className="ticker-text"
          style={{ fontSize: 10, color: '#4A6D8C', fontFamily: "'JetBrains Mono'", whiteSpace: 'nowrap' }}
        >
          {tickerText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tickerText}
        </div>
      </div>

      {/* Clock + Time Range */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono'", fontSize: 14,
              color: '#F59E0B', letterSpacing: 1,
            }}
          >
            {time.toLocaleTimeString('en-IN', { hour12: false })}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 9, color: '#4A6D8C' }}>
            {time.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} IST
          </div>
        </div>
        <div style={{ height: 28, width: 1, background: '#1A3050' }} />
        <div style={{ display: 'flex', gap: 4 }}>
          {([24, '7d', '30d'] as (number | string)[]).map(t => (
            <button
              key={String(t)}
              className="clickable"
              onClick={() => onTimeRangeChange(t)}
              style={{
                fontSize: 9, padding: '3px 7px', borderRadius: 3,
                border: `1px solid ${timeRange === t ? '#F59E0B' : '#1A3050'}`,
                background: timeRange === t ? 'rgba(245,158,11,.12)' : 'transparent',
                color: timeRange === t ? '#F59E0B' : '#4A6D8C',
                fontFamily: "'JetBrains Mono'", cursor: 'pointer',
              }}
            >
              {t === 24 ? '24H' : t}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
