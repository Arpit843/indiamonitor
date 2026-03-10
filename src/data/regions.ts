import type { RegionMeta } from '@/types'

export const REGION_META: RegionMeta[] = [
  { id: 'all',      name: 'All India',      icon: '🇮🇳', color: '#3B82F6' },
  { id: 'north',    name: 'North India',    icon: '🏔️', color: '#6366F1' },
  { id: 'south',    name: 'South India',    icon: '🌴', color: '#10B981' },
  { id: 'east',     name: 'East India',     icon: '🌅', color: '#F59E0B' },
  { id: 'west',     name: 'West India',     icon: '🌊', color: '#EF4444' },
  { id: 'central',  name: 'Central India',  icon: '🏛️', color: '#8B5CF6' },
  { id: 'northeast',name: 'Northeast India',icon: '🍃', color: '#06B6D4' },
]

export const REGION_COLORS: Record<string, string> = {
  north:     '#4F6FBF',
  south:     '#2E8B57',
  east:      '#B8860B',
  west:      '#8B3A3A',
  central:   '#7B4F9B',
  northeast: '#2E8B8B',
  all:       '#1E3A5F',
}

export const PANEL_TABS = [
  { id: 'environ',  label: '🌋 Environ'   },
  { id: 'weather',  label: '🌤 Weather'   },
  { id: 'infra',    label: '🚄 Infra'     },
  { id: 'economy',  label: '📈 Economy'   },
  { id: 'services', label: '⚡ Services'  },
  { id: 'news',     label: '📰 News'      },
  { id: 'health',   label: '🏥 Health'    },
] as const

export const QUICK_FOCUS = [
  { id: 'himalayan', label: 'Himalayas', icon: '⛰️' },
  { id: 'gangetic',  label: 'Gangetic',  icon: '🌾' },
  { id: 'deccan',    label: 'Deccan',    icon: '🏔️' },
  { id: 'coastal',   label: 'Coastal',   icon: '🌊' },
  { id: 'northeast', label: 'Northeast', icon: '🍃' },
  { id: 'thar',      label: 'Thar',      icon: '🏜️' },
]

export const NEWS_CATEGORY_COLORS: Record<string, string> = {
  Disaster:       '#EF4444',
  Governance:     '#3B82F6',
  Economy:        '#F59E0B',
  Technology:     '#8B5CF6',
  Infrastructure: '#22C55E',
  Society:        '#EC4899',
}

export const SEVERITY_COLORS: Record<string, string> = {
  high:     '#EF4444',
  moderate: '#F97316',
  minor:    '#EAB308',
  low:      '#22C55E',
}
