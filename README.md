# India Monitor 🇮🇳

**National Intelligence Dashboard** — A real-time geospatial monitoring platform for tracking events, conditions, and data streams across India.

---

## Project Structure

```
india-monitor/
├── index.html                          # HTML entry point
├── vite.config.ts                      # Vite build config
├── tailwind.config.js                  # Tailwind CSS config
├── tsconfig.json                       # TypeScript config
├── package.json
└── src/
    ├── main.tsx                        # React root mount
    ├── App.tsx                         # Root layout component
    ├── index.css                       # Global styles + Tailwind
    │
    ├── types/
    │   └── index.ts                    # All TypeScript interfaces
    │
    ├── data/
    │   ├── regions.ts                  # Region metadata, colors, panel tabs
    │   ├── states.ts                   # SVG path data for all 30 states/UTs
    │   ├── geoFocus.ts                 # Geographic focus zones + hints
    │   ├── layers.ts                   # Map layer definitions
    │   └── mockData.ts                 # All panel mock data (replace w/ real APIs)
    │
    ├── hooks/
    │   ├── useClock.ts                 # Live IST clock hook
    │   └── useAppState.ts              # Central app state + actions
    │
    └── components/
        ├── ui/
        │   ├── LiveDot.tsx             # Animated live indicator dot
        │   ├── Badge.tsx               # Colored category badge
        │   ├── StatBox.tsx             # Metric box with change indicator
        │   └── Section.tsx             # Panel section with title + count
        │
        ├── Header/
        │   └── Header.tsx              # Top bar: brand, ticker, clock, time range
        │
        ├── Map/
        │   └── IndiaMap.tsx            # SVG India map with states + event markers
        │
        ├── LeftSidebar/
        │   └── LeftSidebar.tsx         # Region selector, state dropdown, geo focus, layers
        │
        ├── RightPanel/
        │   ├── RightPanel.tsx          # Tab bar + panel switcher
        │   ├── RegionalSummary.tsx     # Auto-generated region summary
        │   └── panels/
        │       └── index.tsx           # All 7 panel components:
        │                               #   EnvironmentPanel (earthquakes, cyclones, floods, fires)
        │                               #   WeatherPanel (alerts, monsoon, city temps)
        │                               #   InfraPanel (rail, airports, highways, ports)
        │                               #   EconomyPanel (markets, commodities, gold)
        │                               #   ServicesPanel (AQI, power, water, internet)
        │                               #   NewsPanel (categorized headlines)
        │                               #   HealthPanel (disease surveillance, vaccinations)
        │
        └── StatusBar/
            └── StatusBar.tsx           # Footer: version, data sources, sync time
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

App runs at **http://localhost:5173**

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 18 + TypeScript               |
| Build tool  | Vite 4                              |
| Styling     | Tailwind CSS 3 + inline styles      |
| Map         | Custom SVG (no external map library)|
| Fonts       | Rajdhani, JetBrains Mono, Noto Sans |

---

## Features

- 🗺️ **Interactive SVG map** — clickable states, color-coded regions, live event markers
- 🔍 **Region filtering** — 7 macro-regions (North, South, East, West, Central, Northeast, All)
- 🏛️ **State/UT selector** — all 30 states + union territories
- 🌐 **Geographic focus modes** — Himalayan, Gangetic, Thar, Deccan, Western Ghats, Eastern Ghats, Coastal, Northeast
- 🗂️ **7 data panels** — Environment, Weather, Infrastructure, Economy, Services, News, Health
- 📊 **Regional summary** — auto-generated context blurb per selected region/state
- ⏱️ **Timeline slider** — switch between 24h / 7d / 30d views
- 📰 **News ticker** — scrolling live headline bar
- 🔴 **Collapsible sidebars** — maximise map space
- ⚡ **Map layer toggles** — earthquakes, cyclones, floods, fires, transport, pollution

---

## Connecting Real Data Sources

Replace exports in `src/data/mockData.ts` with live API calls.

Suggested APIs:
| Panel | API Source |
|-------|-----------|
| Earthquakes | USGS Earthquake API / NCS India |
| Weather & Cyclones | IMD Open Data / OpenWeatherMap |
| Floods | CWC (Central Water Commission) |
| Air Quality | CPCB Sameer API |
| News | NewsAPI / Google News RSS |
| Stock Markets | NSE/BSE APIs |
| Railway | NTES / RailYatri API |

---

## License

MIT
