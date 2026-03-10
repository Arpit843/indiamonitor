import type {
  MapEvent, EarthquakeEntry, FloodEntry, CycloneEntry, FireEntry,
  WeatherAlert, MonsoonData, CityTemp, RailwayEntry, AirportEntry,
  HighwayEntry, PortEntry, IndexData, CommodityEntry, AqiEntry,
  OutageEntry, WaterEntry, InternetEntry, NewsEntry, HealthEntry,
} from '@/types'

// ── Map Events ───────────────────────────────────────────────────────
export const MAP_EVENTS: MapEvent[] = [
  { id:1, type:'earthquake', lat:315, lon:235, magnitude:3.8, label:'M 3.8 — Uttarakhand', time:'1h ago',  severity:'moderate' },
  { id:2, type:'earthquake', lat:200, lon:450, magnitude:2.9, label:'M 2.9 — Manipur',     time:'3h ago',  severity:'minor'    },
  { id:3, type:'cyclone',    lat:350, lon:410, label:'Cyclone REMAL (Cat 2)',               time:'Active',  severity:'high'     },
  { id:4, type:'flood',      lat:380, lon:220, label:'Brahmaputra flood alert',             time:'6h ago',  severity:'high'     },
  { id:5, type:'fire',       lat:235, lon:308, label:'Forest fire — MP Corridor',           time:'12h ago', severity:'moderate' },
]

// ── Environment ──────────────────────────────────────────────────────
export const EARTHQUAKES: EarthquakeEntry[] = [
  { mag:3.8, loc:'Chamoli, Uttarakhand', time:'1h ago',  depth:'18km', sev:'moderate' },
  { mag:2.9, loc:'Imphal, Manipur',      time:'3h ago',  depth:'12km', sev:'minor'    },
  { mag:4.2, loc:'Andaman Islands',      time:'8h ago',  depth:'35km', sev:'moderate' },
  { mag:2.5, loc:'Pithoragarh, UK',      time:'14h ago', depth:'8km',  sev:'minor'    },
]

export const FLOODS: FloodEntry[] = [
  { loc:'Assam (Brahmaputra basin)',  status:'🔴 Critical', affected:'2.3L' },
  { loc:'Bihar (Kosi River)',         status:'🟠 Alert',    affected:'80K'  },
  { loc:'Odisha (Mahanadi basin)',    status:'🟡 Watch',    affected:'30K'  },
]

export const CYCLONES: CycloneEntry[] = [
  { name:'REMAL', cat:'Category 2', loc:'Bay of Bengal', landfall:'36h', wind:'95 km/h' },
]

export const FIRES: FireEntry[] = [
  { loc:'Balaghat, Madhya Pradesh', area:'1,240 ha', status:'Active',    since:'2 days' },
  { loc:'Simlipal, Odisha',         area:'880 ha',   status:'Contained', since:'5 days' },
]

// ── Weather ──────────────────────────────────────────────────────────
export const WEATHER_ALERTS: WeatherAlert[] = [
  { type:'Heatwave',   loc:'Delhi, Rajasthan, UP',  level:'Red',    temp:'+46°C'  },
  { type:'Heavy Rain', loc:'Kerala, Tamil Nadu',    level:'Orange', rain:'115mm'  },
  { type:'Cyclone',    loc:'Andhra Pradesh coast',  level:'Red',    wind:'95km/h' },
]

export const MONSOON: MonsoonData = {
  progress: 62,
  stage: 'Active',
  onset: 'Kerala Jun 1 ✓',
  coverage: 'S. India + Central',
}

export const CITY_TEMPS: CityTemp[] = [
  { city:'Delhi',    hi:45, lo:30, feels:48 },
  { city:'Mumbai',   hi:34, lo:27, feels:36 },
  { city:'Chennai',  hi:38, lo:26, feels:41 },
  { city:'Kolkata',  hi:36, lo:28, feels:39 },
  { city:'Bengaluru',hi:32, lo:21, feels:34 },
]

// ── Infrastructure ───────────────────────────────────────────────────
export const RAILWAYS: RailwayEntry[] = [
  { id:'12301', route:'Howrah Rajdhani',  status:'🔴 Delayed 3h',  reason:'Flood track'    },
  { id:'22691', route:'Rajdhani Express', status:'🟢 On Time',     reason:''               },
  { id:'12561', route:'Shram Shakti Exp', status:'🟡 45 min late', reason:'Signal failure' },
]

export const AIRPORTS: AirportEntry[] = [
  { name:'IGI Delhi',    flights:980, status:'🟢 Normal',    delay:'8 min avg'      },
  { name:'CSIA Mumbai',  flights:820, status:'🟡 Moderate',  delay:'22 min avg'     },
  { name:'MAA Chennai',  flights:440, status:'🔴 Disrupted', delay:'1h 15min avg'   },
]

export const HIGHWAYS: HighwayEntry[] = [
  { nh:'NH-44', section:'Nagpur–Hyderabad', status:'🔴 Closed', reason:'Landslide' },
  { nh:'NH-48', section:'Delhi–Jaipur',     status:'🟢 Open',   reason:''          },
]

export const PORTS: PortEntry[] = [
  { name:'JNPT Mumbai',   traffic:'Normal',    vessels:42 },
  { name:'Chennai Port',  traffic:'Disrupted', vessels:18 },
]

// ── Economy ──────────────────────────────────────────────────────────
export const SENSEX: IndexData  = { val:73842, chg:+0.42 }
export const NIFTY: IndexData   = { val:22356, chg:+0.38 }
export const RUPEE: IndexData   = { val:83.24, chg:-0.08 }
export const CRUDE: IndexData   = { val:83.4,  chg:+1.2  }
export const GOLD: IndexData    = { val:71200, chg:-0.3  }

export const COMMODITIES: CommodityEntry[] = [
  { name:'Rice',   price:'₹3,200/qtl', chg:'+1.2%' },
  { name:'Wheat',  price:'₹2,275/qtl', chg:'-0.4%' },
  { name:'Cotton', price:'₹6,780/qtl', chg:'+2.1%' },
  { name:'Sugar',  price:'₹3,450/qtl', chg:'+0.7%' },
]

// ── Public Services ──────────────────────────────────────────────────
export const AQI_DATA: AqiEntry[] = [
  { city:'Delhi',     aqi:312, level:'Hazardous', color:'#7C0000' },
  { city:'Mumbai',    aqi:88,  level:'Moderate',  color:'#FFA500' },
  { city:'Lucknow',   aqi:215, level:'Very Poor',  color:'#8B0000' },
  { city:'Bengaluru', aqi:52,  level:'Good',       color:'#22C55E' },
  { city:'Hyderabad', aqi:134, level:'Unhealthy',  color:'#EF4444' },
]

export const POWER_OUTAGES: OutageEntry[] = [
  { loc:'Jaipur Grid East',  status:'Active',  since:'4h', homes:'28K' },
  { loc:'Bhilai Industrial', status:'Partial', since:'1h', homes:'5K'  },
]

export const WATER_ALERTS: WaterEntry[] = [
  { loc:'Chennai (Tamil Nadu)',  status:'🔴 Acute Shortage', supply:'3h/day'  },
  { loc:'Bengaluru North Zone',  status:'🟡 Intermittent',   supply:'8h/day'  },
]

export const INTERNET_STATUS: InternetEntry[] = [
  { loc:'Manipur',        status:'🔴 Suspended (Govt. Order)' },
  { loc:'Kashmir Valley', status:'🟡 Slow — 2G only'          },
]

// ── News ─────────────────────────────────────────────────────────────
export const NEWS: NewsEntry[] = [
  { cat:'Disaster',        headline:'Cyclone REMAL intensifies, Andhra coast on high alert',         time:'45 min ago', src:'NDMA'  },
  { cat:'Governance',      headline:'PM inaugurates 4 highway projects worth ₹12,000 Cr',            time:'2h ago',     src:'PIB'   },
  { cat:'Economy',         headline:'RBI holds repo rate at 6.5%, maintains withdrawal stance',       time:'4h ago',     src:'RBI'   },
  { cat:'Technology',      headline:'ISRO successfully tests GSLV-F14 cryogenic stage',              time:'5h ago',     src:'ISRO'  },
  { cat:'Disaster',        headline:'Assam flood situation worsens, 2.3 lakh displaced',             time:'6h ago',     src:'IMD'   },
  { cat:'Society',         headline:'Delhi heatwave: 2 deaths reported, IMD issues red alert',       time:'7h ago',     src:'IMD'   },
  { cat:'Infrastructure',  headline:'Mumbai Metro Line 2A sees record 4.5L daily ridership',         time:'9h ago',     src:'MMRC'  },
  { cat:'Economy',         headline:'India GDP growth revised to 7.6% for FY24 by CSO',              time:'12h ago',    src:'CSO'   },
]

export const TICKER_ITEMS = [
  '🔴 Cyclone REMAL Cat-2 approaching Andhra coast, 36h to landfall',
  '🌡️ Delhi heatwave: 45.8°C recorded at Safdarjung, red alert issued',
  '💧 Brahmaputra flood: 2.3L displaced in Assam, NDRF teams deployed',
  '📈 Sensex +0.42% at 73,842 | Nifty +0.38% at 22,356',
  '✈️ Chennai airport operating on restricted schedule due to cyclone threat',
  '🦠 Dengue surge in Kerala: 4,210 active cases, +12% week-on-week',
]

// ── Health ───────────────────────────────────────────────────────────
export const HEALTH_DATA: HealthEntry[] = [
  { disease:'Dengue',      state:'Kerala, Karnataka, TN', cases:'4,210 active', trend:'↑ +12%',  alert:'Watch'  },
  { disease:'Malaria',     state:'Odisha, Jharkhand',     cases:'2,890 active', trend:'→ Stable', alert:'Normal' },
  { disease:'Cholera',     state:'Bihar flood areas',     cases:'340 active',   trend:'↑ +40%',  alert:'Alert'  },
  { disease:'Scrub Typhus',state:'HP, Uttarakhand',       cases:'280 active',   trend:'↑ +8%',   alert:'Watch'  },
]

// ── Regional Summaries ───────────────────────────────────────────────
export const REGIONAL_SUMMARIES: Record<string, string> = {
  all:       '⚠️ Cyclone REMAL (Cat 2) approaching Andhra coast. Assam flood situation critical — 2.3L displaced. Delhi heatwave persists with AQI 312. IMD issues red alerts for 4 coastal states.',
  north:     '🌡️ Severe heatwave grips Delhi-NCR, Rajasthan, western UP. Temperatures above 45°C. NH-44 disrupted by landslide in HP. Uttarakhand seismic activity (M3.8) recorded.',
  south:     '🌀 Cyclone REMAL bearing down on Andhra-Tamil Nadu coast. Chennai airport disrupted. AQI moderate in Bengaluru. Dengue cases rising in Kerala (+12%).',
  east:      '💧 Brahmaputra in spate — Assam flood zones activated. Bihar Kosi basin on alert. West Bengal ports disrupted by cyclone preparedness.',
  west:      '📈 Maharashtra economic activity normal. Mumbai airport sees moderate delays. Goa tourism at seasonal peak.',
  central:   '🔥 Forest fires in Balaghat (MP) continue — 1,240 ha affected. MP and Chhattisgarh under heatwave watch.',
  northeast: '🌧️ Heavy rainfall in Assam — flood warnings active. Manipur internet suspension continues. Arunachal border weather stable.',
}
