import React from 'react'

interface Props {
  text: string
  color?: string
}

export default function Badge({ text, color = '#3B82F6' }: Props) {
  return (
    <span
      style={{
        fontSize: 9,
        fontFamily: "'JetBrains Mono'",
        padding: '1px 5px',
        borderRadius: 3,
        background: color + '22',
        color,
        border: `1px solid ${color}44`,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </span>
  )
}
