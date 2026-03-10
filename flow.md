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
