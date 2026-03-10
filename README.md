<<<<<<< HEAD
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
=======
🇮🇳 India Monitor – Real-Time National Intelligence & Monitoring Dashboard

India Monitor is a real-time geospatial dashboard designed to track and visualize critical events and conditions across India. The platform aggregates multiple public data sources and presents them through an interactive map and modular panels, allowing users to monitor environmental conditions, infrastructure activity, disasters, and everyday civic indicators in one unified interface.The project focuses on providing region-specific, state-specific, and geography-based insights so users can analyze events not only by administrative boundaries but also by natural landforms such as the Himalayas, coastal zones, plains, and peninsular regions.The goal of the project is to create a modern operational dashboard for India, capable of helping users quickly understand what is happening across the country in real time.

india-monitor/
├── index.html
├── vite.config.ts / tailwind.config.js / tsconfig.json / package.json
└── src/
    ├── main.tsx              ← React root mount
    ├── App.tsx               ← Root layout, wires everything together
    ├── index.css             ← Global styles + Tailwind + keyframes
    ├── types/index.ts        ← All TypeScript interfaces
    ├── data/
    │   ├── regions.ts        ← Region metadata, colors, panel tabs
    │   ├── states.ts         ← SVG paths for all 30 states/UTs
    │   ├── geoFocus.ts       ← 8 geographic focus zones
    │   ├── layers.ts         ← Map layer definitions
    │   └── mockData.ts       ← All panel data (swap for real APIs here)
    ├── hooks/
    │   ├── useClock.ts       ← Live IST clock
    │   └── useAppState.ts    ← Centralised app state + actions
    └── components/
        ├── ui/               ← LiveDot, Badge, StatBox, Section
        ├── Header/           ← Brand, ticker, clock, time range
        ├── Map/              ← SVG map, event markers, quick focus
        ├── LeftSidebar/      ← Regions, state picker, geo focus, layers
        ├── RightPanel/       ← Tab bar, regional summary, 7 panels
        └── StatusBar/        ← Footer with feed status

🌍 Core Features
Interactive Geospatial Dashboard
Central interactive map of India
Real-time markers and geospatial data layers
Dynamic zoom and region focus
Multiple map overlays and filters
Region-Based Monitoring

Users can switch between major Indian regions:
North India
South India
East India
West India
Central India
Northeast India
Pan-India overview

Each region automatically updates the map and data panels.
State-Level Insights
Select any Indian state or union territory
View localized information such as weather alerts, civic issues, infrastructure disruptions, and regional news.

🏔 Geographic Focus Modes
India Monitor supports landmass-based analysis, allowing users to focus on specific geographic conditions rather than just political boundaries.

Supported focus zones include:
Himalayan Region – earthquakes, landslides, glacier activity, mountain weather
Indo-Gangetic Plains – floods, agricultural patterns, pollution monitoring
Thar Desert Region – drought conditions and heatwave monitoring
Deccan Plateau / Peninsular India – rainfall distribution and water resources
Western Ghats – biodiversity regions, rainfall patterns, landslides
Eastern Ghats – terrain and ecological monitoring
Coastal India – cyclone paths, sea conditions, port activity
Island Territories – Andaman & Nicobar and Lakshadweep monitoring
These modes automatically adjust map layers and data panels to highlight the most relevant information.

📊 Monitoring Panels
The dashboard contains multiple modular panels that track different types of information.
Disaster & Environment Monitoring
Earthquakes
Floods
Cyclones
Landslides
Forest fires
Heatwaves and drought conditions
Weather & Climate
Rainfall distribution
Monsoon progression
Severe weather alerts
Temperature anomalies
Infrastructure & Transportation
Railway network disruptions
Airport activity
Major highway closures
Maritime activity near major ports

Public Services & Daily Life
Focused on information relevant to everyday citizens:
Power outages
Water supply alerts
Air quality index
Traffic congestion hotspots
Public transport disruptions
Internet outages

News & Information Feed
Aggregated regional news categorized by:
governance
infrastructure
economy
disasters
technology
society
Public Health Indicators
disease outbreak alerts
pollution-related health advisories
healthcare system capacity indicators

🗺 Map Data Layers

Users can toggle multiple geospatial layers including:
earthquakes
cyclone tracks
wildfire zones
transportation networks
pollution heatmaps
population density
agricultural regions
infrastructure networks

⚡ Smart Focus System

The dashboard includes a smart geographic focus engine that automatically adjusts map layers and panels based on selected regions.
Examples:
Himalayan mode prioritizes seismic activity and landslides
Coastal mode highlights cyclones and maritime traffic
Plains mode emphasizes floods and agriculture

🧭 Timeline Analysis

A built-in timeline slider allows users to analyze changes over time:
last 24 hours
past 7 days
past month
This helps users track trends and evolving situations.

🧩 Modular Architecture

India Monitor is designed with a modular architecture, making it easy to extend with new panels, data sources, or visualization layers.
Future expansions may include predictive analytics, automated situation summaries, and advanced geographic risk analysis.

🎯 Project Vision

India Monitor aims to become a comprehensive real-time situational awareness dashboard for India, combining geospatial visualization, public data integration, and modular analytics tools to provide a clear understanding of national conditions.
>>>>>>> 3ee26511aeaa5fc4cf17d842dcf20d2c5a422e6c
