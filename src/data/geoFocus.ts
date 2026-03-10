import type { GeoFocusItem } from '@/types'

export const GEO_FOCUS: GeoFocusItem[] = [
  {
    id: 'himalayan',
    name: 'Himalayan Region',
    icon: '⛰️',
    states: ['jk', 'hp', 'uk', 'ar', 'sk'],
  },
  {
    id: 'gangetic',
    name: 'Indo-Gangetic Plains',
    icon: '🌾',
    states: ['pb', 'hr', 'dl', 'up', 'bh'],
  },
  {
    id: 'thar',
    name: 'Thar Desert',
    icon: '🏜️',
    states: ['rj', 'gj'],
  },
  {
    id: 'deccan',
    name: 'Deccan Plateau',
    icon: '🏔️',
    states: ['mp', 'cg', 'mh', 'ka', 'tg', 'ap'],
  },
  {
    id: 'wghats',
    name: 'Western Ghats',
    icon: '🌿',
    states: ['gj', 'mh', 'ga', 'ka', 'kl'],
  },
  {
    id: 'eghats',
    name: 'Eastern Ghats',
    icon: '🌲',
    states: ['or', 'ap', 'tn'],
  },
  {
    id: 'coastal',
    name: 'Coastal India',
    icon: '🌊',
    states: ['gj', 'mh', 'ga', 'ka', 'kl', 'tn', 'ap', 'or', 'wb'],
  },
  {
    id: 'northeast',
    name: 'Northeast India',
    icon: '🍃',
    states: ['as', 'ar', 'me', 'nl', 'mn', 'mz', 'tr', 'sk'],
  },
]

/** Smart panel focus hints per geo region */
export const GEO_FOCUS_HINTS: Record<string, string[]> = {
  himalayan: ['Seismic zones active', 'Glacier monitoring', 'Landslide risk', 'Border infrastructure'],
  gangetic:  ['Flood plains watch', 'Agricultural output', 'Industrial corridor', 'Dense population'],
  thar:      ['Drought conditions', 'Desert ecology', 'Border monitoring', 'Solar energy zones'],
  deccan:    ['Plateau agriculture', 'Mineral extraction', 'Water stress'],
  wghats:    ['Biodiversity hotspot', 'Monsoon intercept', 'Coffee & spice zones'],
  eghats:    ['Cyclone exposure', 'Tribal belt monitoring', 'Coastal erosion'],
  coastal:   ['Cyclone tracking', 'Port activity', 'Maritime traffic', 'Fishing alerts'],
  northeast: ['Flood monitoring', 'Seismic activity', 'Border zones', 'Biodiversity'],
}
