import React from 'react'

interface Props {
  title: string
  count?: number
  children: React.ReactNode
}

export default function Section({ title, count, children }: Props) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span
          style={{
            fontSize: 11, fontFamily: "'Rajdhani'", fontWeight: 700,
            color: '#7BA8D4', letterSpacing: 0.5, textTransform: 'uppercase',
          }}
        >
          {title}
        </span>
        {count !== undefined && (
          <span
            style={{
              fontSize: 9, color: '#4A6D8C', fontFamily: "'JetBrains Mono'",
              background: '#0C1829', padding: '1px 5px', borderRadius: 3,
            }}
          >
            {count}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}
