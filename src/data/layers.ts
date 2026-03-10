import type { LayerDef } from '@/types'

export const LAYERS_DEF: LayerDef[] = [
  { id: 'earthquake', name: 'Earthquakes', color: '#EF4444', active: true  },
  { id: 'cyclone',    name: 'Cyclones',    color: '#8B5CF6', active: true  },
  { id: 'flood',      name: 'Floods',      color: '#3B82F6', active: false },
  { id: 'fire',       name: 'Forest Fire', color: '#F97316', active: false },
  { id: 'transport',  name: 'Transport',   color: '#22C55E', active: false },
  { id: 'pollution',  name: 'Pollution',   color: '#9CA3AF', active: false },
]

export const EVENT_COLORS: Record<string, string> = {
  earthquake: '#EF4444',
  cyclone:    '#8B5CF6',
  flood:      '#3B82F6',
  fire:       '#F97316',
  transport:  '#22C55E',
  pollution:  '#9CA3AF',
}
