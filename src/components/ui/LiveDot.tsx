import React from 'react'

interface Props {
  color?: string
  size?: number
}

export default function LiveDot({ color = '#22C55E', size = 8 }: Props) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: size, height: size }}>
      <span
        className="ripple-ring"
        style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: color, opacity: 0.6,
        }}
      />
      <span
        style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: color }}
      />
    </span>
  )
}
