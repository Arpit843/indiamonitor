// ── Region & State ───────────────────────────────────────────────────
export interface RegionMeta {
  id: string
  name: string
  icon: string
  color: string
  states?: string[]
}

export interface StateData {
  id: string
  name: string
  short: string
  region: string
  path: string
  cx: number
  cy: number
}

export interface GeoFocusItem {
  id: string
  name: string
  icon: string
  states: string[]
}

export interface LayerDef {
  id: string
  name: string
  color: string
  active: boolean
}

// ── Map Events ───────────────────────────────────────────────────────
export type EventType = 'earthquake' | 'cyclone' | 'flood' | 'fire'

export interface MapEvent {
  id: number
  type: EventType
  lat: number
  lon: number
  label: string
  time: string
  severity: 'high' | 'moderate' | 'minor' | 'low'
  magnitude?: number
}

// ── Panel Data ───────────────────────────────────────────────────────
export interface EarthquakeEntry {
  mag: number
  loc: string
  time: string
  depth: string
  sev: 'high' | 'moderate' | 'minor' | 'low'
}

export interface FloodEntry {
  loc: string
  status: string
  affected: string
}

export interface CycloneEntry {
  name: string
  cat: string
  loc: string
  landfall: string
  wind: string
}

export interface FireEntry {
  loc: string
  area: string
  status: string
  since: string
}

export interface WeatherAlert {
  type: string
  loc: string
  level: 'Red' | 'Orange' | 'Yellow'
  temp?: string
  rain?: string
  wind?: string
}

export interface MonsoonData {
  progress: number
  stage: string
  onset: string
  coverage: string
}

export interface CityTemp {
  city: string
  hi: number
  lo: number
  feels: number
}

export interface RailwayEntry {
  id: string
  route: string
  status: string
  reason: string
}

export interface AirportEntry {
  name: string
  flights: number
  status: string
  delay: string
}

export interface HighwayEntry {
  nh: string
  section: string
  status: string
  reason: string
}

export interface PortEntry {
  name: string
  traffic: string
  vessels: number
}

export interface IndexData {
  val: number
  chg: number
}

export interface CommodityEntry {
  name: string
  price: string
  chg: string
}

export interface AqiEntry {
  city: string
  aqi: number
  level: string
  color: string
}

export interface OutageEntry {
  loc: string
  status: string
  since: string
  homes: string
}

export interface WaterEntry {
  loc: string
  status: string
  supply: string
}

export interface InternetEntry {
  loc: string
  status: string
}

export interface NewsEntry {
  cat: string
  headline: string
  time: string
  src: string
}

export interface HealthEntry {
  disease: string
  state: string
  cases: string
  trend: string
  alert: 'Alert' | 'Watch' | 'Normal'
}

// ── App State ────────────────────────────────────────────────────────
export interface AppState {
  selectedRegion: string
  selectedState: string | null
  geoFocus: string | null
  activePanel: PanelId
  layers: Record<string, boolean>
  timeRange: number | string
  leftOpen: boolean
  rightOpen: boolean
}

export type PanelId = 'environ' | 'weather' | 'infra' | 'economy' | 'services' | 'news' | 'health'
