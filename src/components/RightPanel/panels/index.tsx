import React, { useState } from 'react'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import StatBox from '@/components/ui/StatBox'
import { SEVERITY_COLORS, NEWS_CATEGORY_COLORS } from '@/data/regions'
import {
  EARTHQUAKES, FLOODS, CYCLONES, FIRES,
  WEATHER_ALERTS, MONSOON, CITY_TEMPS,
  RAILWAYS, AIRPORTS, HIGHWAYS, PORTS,
  SENSEX, NIFTY, RUPEE, CRUDE, GOLD, COMMODITIES,
  AQI_DATA, POWER_OUTAGES, WATER_ALERTS, INTERNET_STATUS,
  NEWS, HEALTH_DATA,
} from '@/data/mockData'

/* ── EnvironmentPanel ─────────────────────────────────────────────── */
export function EnvironmentPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section title="🔴 Earthquakes" count={EARTHQUAKES.length}>
        {EARTHQUAKES.map((e, i) => (
          <div
            key={i} className="event-item"
            style={{
              padding: '6px 8px', borderRadius: 5, marginBottom: 4,
              background: 'rgba(239,68,68,.05)', border: '1px solid rgba(239,68,68,.12)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#EF4444', fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 15 }}>
                M {e.mag}
              </span>
              <span style={{ fontSize: 9, color: '#6B8FAD', fontFamily: "'JetBrains Mono'" }}>{e.time}</span>
            </div>
            <div style={{ fontSize: 11, color: '#94C5FF' }}>{e.loc}</div>
            <div style={{ fontSize: 10, color: '#4A6D8C', marginTop: 1 }}>
              Depth: {e.depth} ·{' '}
              <span style={{ color: SEVERITY_COLORS[e.sev] }}>{e.sev}</span>
            </div>
          </div>
        ))}
      </Section>

      <Section title="🌀 Active Cyclones" count={CYCLONES.length}>
        {CYCLONES.map((c, i) => (
          <div
            key={i}
            style={{
              padding: '8px', borderRadius: 5, marginBottom: 4,
              background: 'rgba(139,92,246,.08)', border: '1px solid rgba(139,92,246,.2)',
            }}
          >
            <div style={{ color: '#A78BFA', fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 14 }}>
              {c.name} — {c.cat}
            </div>
            <div style={{ fontSize: 11, color: '#94C5FF', marginTop: 3 }}>📍 {c.loc}</div>
            <div style={{ fontSize: 10, color: '#6B8FAD', marginTop: 2 }}>
              Landfall in {c.landfall} · Wind {c.wind}
            </div>
          </div>
        ))}
      </Section>

      <Section title="💧 Flood Alerts" count={FLOODS.length}>
        {FLOODS.map((f, i) => (
          <div
            key={i} className="event-item"
            style={{
              padding: '6px 8px', borderRadius: 5, marginBottom: 4,
              background: 'rgba(59,130,246,.05)', border: '1px solid rgba(59,130,246,.12)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: '#93C5FD' }}>{f.loc}</span>
              <span style={{ fontSize: 9, color: '#6B8FAD' }}>Affected: {f.affected}</span>
            </div>
            <div style={{ fontSize: 10, marginTop: 2 }}>{f.status}</div>
          </div>
        ))}
      </Section>

      <Section title="🔥 Forest Fires" count={FIRES.length}>
        {FIRES.map((f, i) => (
          <div
            key={i} className="event-item"
            style={{
              padding: '6px 8px', borderRadius: 5, marginBottom: 4,
              background: 'rgba(249,115,22,.05)', border: '1px solid rgba(249,115,22,.12)',
            }}
          >
            <div style={{ fontSize: 11, color: '#FCA862' }}>{f.loc}</div>
            <div style={{ fontSize: 10, color: '#6B8FAD', marginTop: 1 }}>
              Area: {f.area} ·{' '}
              <span style={{ color: f.status === 'Active' ? '#EF4444' : '#22C55E' }}>{f.status}</span>
              {' '}· Since {f.since}
            </div>
          </div>
        ))}
      </Section>
    </div>
  )
}

/* ── WeatherPanel ─────────────────────────────────────────────────── */
export function WeatherPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section title="⚠️ Active Alerts" count={WEATHER_ALERTS.length}>
        {WEATHER_ALERTS.map((a, i) => (
          <div
            key={i} className="event-item"
            style={{
              padding: '6px 8px', borderRadius: 5, marginBottom: 4,
              background: a.level === 'Red' ? 'rgba(239,68,68,.08)' : 'rgba(249,115,22,.06)',
              border: `1px solid ${a.level === 'Red' ? 'rgba(239,68,68,.2)' : 'rgba(249,115,22,.18)'}`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: a.level === 'Red' ? '#FCA5A5' : '#FCD34D' }}>
                {a.type}
              </span>
              <Badge text={a.level} color={a.level === 'Red' ? '#EF4444' : '#F59E0B'} />
            </div>
            <div style={{ fontSize: 10, color: '#94C5FF', marginTop: 2 }}>{a.loc}</div>
            <div style={{ fontSize: 10, color: '#6B8FAD', marginTop: 1 }}>
              {a.temp ?? a.rain ?? a.wind}
            </div>
          </div>
        ))}
      </Section>

      <Section title="🌧️ Monsoon Tracker">
        <div style={{ background: 'rgba(34,197,94,.06)', border: '1px solid rgba(34,197,94,.15)', borderRadius: 6, padding: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: '#86EFAC' }}>Coverage</span>
            <span style={{ fontSize: 11, color: '#86EFAC', fontFamily: "'JetBrains Mono'" }}>
              {MONSOON.progress}%
            </span>
          </div>
          <div style={{ background: '#0C1829', borderRadius: 3, height: 6, marginBottom: 8 }}>
            <div
              style={{
                width: `${MONSOON.progress}%`, height: '100%',
                background: 'linear-gradient(90deg,#22C55E,#86EFAC)',
                borderRadius: 3, transition: 'width .5s',
              }}
            />
          </div>
          <div style={{ fontSize: 10, color: '#6B8FAD' }}>Stage: <span style={{ color: '#86EFAC' }}>{MONSOON.stage}</span></div>
          <div style={{ fontSize: 10, color: '#6B8FAD', marginTop: 2 }}>Onset: {MONSOON.onset}</div>
          <div style={{ fontSize: 10, color: '#6B8FAD', marginTop: 2 }}>Coverage: {MONSOON.coverage}</div>
        </div>
      </Section>

      <Section title="🌡️ City Temperatures">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {CITY_TEMPS.map((t, i) => (
            <div
              key={i}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '4px 8px', borderRadius: 4, background: 'rgba(15,32,64,.5)',
              }}
            >
              <span style={{ fontSize: 11, color: '#94C5FF', minWidth: 80 }}>{t.city}</span>
              <span style={{ fontSize: 11, color: t.hi > 40 ? '#EF4444' : '#FCA862', fontFamily: "'JetBrains Mono'", fontWeight: 700 }}>
                {t.hi}°
              </span>
              <span style={{ fontSize: 10, color: '#4A6D8C', fontFamily: "'JetBrains Mono'" }}>{t.lo}°</span>
              <span style={{ fontSize: 9, color: '#6B8FAD', fontFamily: "'JetBrains Mono'" }}>feels {t.feels}°</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

/* ── InfraPanel ───────────────────────────────────────────────────── */
export function InfraPanel() {
  const row = (children: React.ReactNode) => (
    <div style={{ padding: '5px 8px', borderRadius: 4, background: 'rgba(15,32,64,.5)', marginBottom: 3, border: '1px solid #0F2040' }}>
      {children}
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section title="🚄 Railway Status" count={RAILWAYS.length}>
        {RAILWAYS.map((r, i) => (
          <div key={i} className="event-item" style={{ padding: '5px 8px', borderRadius: 4, background: 'rgba(15,32,64,.5)', marginBottom: 3, border: '1px solid #0F2040' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 10, color: '#94C5FF', fontFamily: "'JetBrains Mono'" }}>{r.id}</span>
              <span style={{ fontSize: 10 }}>{r.status}</span>
            </div>
            <div style={{ fontSize: 11, color: '#CBD5E1' }}>{r.route}</div>
            {r.reason && <div style={{ fontSize: 9, color: '#6B8FAD', marginTop: 1 }}>{r.reason}</div>}
          </div>
        ))}
      </Section>

      <Section title="✈️ Airport Operations" count={AIRPORTS.length}>
        {AIRPORTS.map((a, i) => (
          <div key={i} style={{ padding: '5px 8px', borderRadius: 4, background: 'rgba(15,32,64,.5)', marginBottom: 3, border: '1px solid #0F2040' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: '#94C5FF' }}>{a.name}</span>
              <span style={{ fontSize: 9, color: '#6B8FAD' }}>{a.flights} flights</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
              <span style={{ fontSize: 10 }}>{a.status}</span>
              <span style={{ fontSize: 9, color: '#6B8FAD' }}>Avg delay: {a.delay}</span>
            </div>
          </div>
        ))}
      </Section>

      <Section title="🛣️ Highway Closures" count={HIGHWAYS.filter(h => h.status.includes('Closed')).length}>
        {HIGHWAYS.map((h, i) => (
          <div key={i} style={{ padding: '5px 8px', borderRadius: 4, background: 'rgba(15,32,64,.5)', marginBottom: 3, border: '1px solid #0F2040' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 10, color: '#F59E0B', fontFamily: "'JetBrains Mono'", fontWeight: 700 }}>{h.nh}</span>
              <span style={{ fontSize: 10 }}>{h.status}</span>
            </div>
            <div style={{ fontSize: 11, color: '#94C5FF' }}>{h.section}</div>
            {h.reason && <div style={{ fontSize: 9, color: '#EF4444', marginTop: 1 }}>{h.reason}</div>}
          </div>
        ))}
      </Section>

      <Section title="⚓ Port Activity">
        {PORTS.map((p, i) => (
          <div key={i} style={{ padding: '5px 8px', borderRadius: 4, background: 'rgba(15,32,64,.5)', marginBottom: 3, border: '1px solid #0F2040' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: '#94C5FF' }}>{p.name}</span>
              <span style={{ fontSize: 10, color: p.traffic === 'Normal' ? '#22C55E' : '#EF4444' }}>{p.traffic}</span>
            </div>
            <div style={{ fontSize: 9, color: '#6B8FAD' }}>Vessels at berth: {p.vessels}</div>
          </div>
        ))}
      </Section>
    </div>
  )
}

/* ── EconomyPanel ─────────────────────────────────────────────────── */
export function EconomyPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section title="📈 Market Indices">
        <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
          <StatBox label="SENSEX"   value={SENSEX.val.toLocaleString()} change={SENSEX.chg} color="#F59E0B" />
          <StatBox label="NIFTY 50" value={NIFTY.val.toLocaleString()}  change={NIFTY.chg}  color="#22C55E" />
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <StatBox label="USD/INR"   value={`₹${RUPEE.val}`}   change={RUPEE.chg}  color="#3B82F6" />
          <StatBox label="CRUDE OIL" value={`$${CRUDE.val}`}   change={CRUDE.chg}  color="#EF4444" unit="/bbl" />
        </div>
      </Section>

      <Section title="🌾 Commodity Prices">
        {COMMODITIES.map((c, i) => (
          <div
            key={i}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '5px 8px', borderRadius: 4, background: 'rgba(15,32,64,.5)', marginBottom: 3,
            }}
          >
            <span style={{ fontSize: 11, color: '#94C5FF' }}>{c.name}</span>
            <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono'", color: '#D0E8FF' }}>{c.price}</span>
            <span style={{ fontSize: 10, color: c.chg.startsWith('+') ? '#22C55E' : '#EF4444' }}>{c.chg}</span>
          </div>
        ))}
      </Section>

      <Section title="💛 Gold">
        <div
          style={{
            display: 'flex', justifyContent: 'space-between', padding: '7px 8px', borderRadius: 4,
            background: 'rgba(245,158,11,.05)', border: '1px solid rgba(245,158,11,.15)',
          }}
        >
          <span style={{ fontSize: 12, color: '#FCD34D' }}>MCX Gold (10g)</span>
          <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono'", color: '#FCD34D', fontWeight: 700 }}>
            ₹{GOLD.val.toLocaleString()}
          </span>
          <span style={{ fontSize: 10, color: GOLD.chg < 0 ? '#EF4444' : '#22C55E' }}>
            {GOLD.chg > 0 ? '+' : ''}{GOLD.chg}%
          </span>
        </div>
      </Section>
    </div>
  )
}

/* ── ServicesPanel ────────────────────────────────────────────────── */
export function ServicesPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section title="💨 Air Quality Index">
        {AQI_DATA.map((a, i) => (
          <div
            key={i}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '5px 8px', borderRadius: 4, background: 'rgba(15,32,64,.5)',
              marginBottom: 3, border: `1px solid ${a.color}22`,
            }}
          >
            <span style={{ fontSize: 11, color: '#94C5FF', minWidth: 80 }}>{a.city}</span>
            <span style={{ fontSize: 14, fontFamily: "'JetBrains Mono'", fontWeight: 700, color: a.color }}>{a.aqi}</span>
            <span style={{ fontSize: 9, color: a.color, background: a.color + '15', padding: '1px 5px', borderRadius: 3 }}>
              {a.level}
            </span>
          </div>
        ))}
      </Section>

      <Section title="⚡ Power Outages" count={POWER_OUTAGES.length}>
        {POWER_OUTAGES.map((o, i) => (
          <div
            key={i}
            style={{
              padding: '5px 8px', borderRadius: 4, marginBottom: 3,
              background: 'rgba(249,115,22,.06)', border: '1px solid rgba(249,115,22,.15)',
            }}
          >
            <div style={{ fontSize: 11, color: '#FCA862' }}>{o.loc}</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 2 }}>
              <span style={{ fontSize: 9, color: '#6B8FAD' }}>Since {o.since}</span>
              <span style={{ fontSize: 9, color: '#6B8FAD' }}>~{o.homes} homes</span>
            </div>
          </div>
        ))}
      </Section>

      <Section title="💧 Water Supply">
        {WATER_ALERTS.map((w, i) => (
          <div
            key={i}
            style={{
              padding: '5px 8px', borderRadius: 4, marginBottom: 3,
              background: 'rgba(59,130,246,.06)', border: '1px solid rgba(59,130,246,.15)',
            }}
          >
            <div style={{ fontSize: 11, color: '#93C5FD' }}>{w.loc}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <span style={{ fontSize: 10 }}>{w.status}</span>
              <span style={{ fontSize: 9, color: '#6B8FAD' }}>Supply: {w.supply}</span>
            </div>
          </div>
        ))}
      </Section>

      <Section title="🌐 Internet Status">
        {INTERNET_STATUS.map((n, i) => (
          <div
            key={i}
            style={{
              padding: '5px 8px', borderRadius: 4, marginBottom: 3,
              background: 'rgba(15,32,64,.5)', border: '1px solid #0F2040',
            }}
          >
            <div style={{ fontSize: 11, color: '#94C5FF' }}>{n.loc}</div>
            <div style={{ fontSize: 10, marginTop: 1 }}>{n.status}</div>
          </div>
        ))}
      </Section>
    </div>
  )
}

/* ── NewsPanel ────────────────────────────────────────────────────── */
export function NewsPanel() {
  const [filter, setFilter] = useState('All')
  const cats = ['All', ...Object.keys(NEWS_CATEGORY_COLORS)]
  const filtered = filter === 'All' ? NEWS : NEWS.filter(n => n.cat === filter)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {/* Category filter pills */}
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', paddingBottom: 6, borderBottom: '1px solid #1E3A5F' }}>
        {cats.map(c => (
          <button
            key={c}
            className="clickable"
            onClick={() => setFilter(c)}
            style={{
              fontSize: 9, padding: '2px 7px', borderRadius: 3, cursor: 'pointer',
              background: filter === c ? '#1E3A5F' : 'transparent',
              color: filter === c ? '#94C5FF' : '#4A6D8C',
              border: `1px solid ${filter === c ? '#2A5080' : 'transparent'}`,
              fontFamily: 'inherit',
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.map((n, i) => (
        <div
          key={i} className="event-item"
          style={{
            padding: '7px 8px', borderRadius: 5,
            background: 'rgba(15,32,64,.4)', border: '1px solid #0F2040',
            borderLeft: `3px solid ${NEWS_CATEGORY_COLORS[n.cat] ?? '#3B82F6'}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <Badge text={n.cat} color={NEWS_CATEGORY_COLORS[n.cat] ?? '#3B82F6'} />
            <span style={{ fontSize: 9, color: '#4A6D8C', fontFamily: "'JetBrains Mono'" }}>{n.time}</span>
          </div>
          <div style={{ fontSize: 11, color: '#CBD5E1', lineHeight: 1.4 }}>{n.headline}</div>
          <div style={{ fontSize: 9, color: '#4A6D8C', marginTop: 3 }}>Source: {n.src}</div>
        </div>
      ))}
    </div>
  )
}

/* ── HealthPanel ──────────────────────────────────────────────────── */
export function HealthPanel() {
  const alertColor: Record<string, string> = {
    Alert: '#EF4444', Watch: '#F59E0B', Normal: '#22C55E',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section title="🦠 Disease Surveillance">
        {HEALTH_DATA.map((h, i) => (
          <div
            key={i}
            style={{
              padding: '7px 8px', borderRadius: 5, marginBottom: 4,
              background: 'rgba(15,32,64,.5)', border: '1px solid #0F2040',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: '#D0E8FF', fontFamily: "'Rajdhani'", fontWeight: 700 }}>
                {h.disease}
              </span>
              <Badge text={h.alert} color={alertColor[h.alert]} />
            </div>
            <div style={{ fontSize: 10, color: '#94C5FF', marginTop: 3 }}>📍 {h.state}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <span style={{ fontSize: 10, color: '#D0E8FF' }}>{h.cases}</span>
              <span style={{ fontSize: 10, color: h.trend.includes('↑') ? '#EF4444' : '#22C55E' }}>
                {h.trend}
              </span>
            </div>
          </div>
        ))}
      </Section>

      <Section title="💉 Vaccination Campaigns">
        <div
          style={{
            padding: '8px', borderRadius: 5, marginBottom: 6,
            background: 'rgba(34,197,94,.06)', border: '1px solid rgba(34,197,94,.15)',
          }}
        >
          <div style={{ fontSize: 11, color: '#86EFAC', fontWeight: 600 }}>National Vaccination Drive</div>
          <div style={{ fontSize: 10, color: '#6B8FAD', marginTop: 3 }}>COVID-19 Booster · 18+ · Free at Govt. Centres</div>
          <div style={{ fontSize: 10, color: '#22C55E', marginTop: 2 }}>Progress: 78.4% adults vaccinated</div>
          <div style={{ background: '#0C1829', borderRadius: 3, height: 5, marginTop: 6 }}>
            <div style={{ width: '78%', height: '100%', background: '#22C55E', borderRadius: 3 }} />
          </div>
        </div>
        <div
          style={{
            padding: '8px', borderRadius: 5,
            background: 'rgba(59,130,246,.06)', border: '1px solid rgba(59,130,246,.15)',
          }}
        >
          <div style={{ fontSize: 11, color: '#93C5FD', fontWeight: 600 }}>Polio Immunisation Round</div>
          <div style={{ fontSize: 10, color: '#6B8FAD', marginTop: 3 }}>0–5 years · UP, Bihar, WB focus states</div>
        </div>
      </Section>
    </div>
  )
}
