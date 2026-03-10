import { useState, useEffect } from 'react'

export function useClock(intervalMs = 1000): Date {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return time
}
