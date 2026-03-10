import type { StateData } from '@/types'

export const STATE_DATA: StateData[] = [
  { id:'jk', name:'Jammu & Kashmir',   short:'J&K',  region:'north',     path:'M90,5 L230,5 L250,30 L240,90 L200,108 L155,115 L105,102 L75,78 L82,40 Z',              cx:162, cy:58  },
  { id:'hp', name:'Himachal Pradesh',  short:'H.P.', region:'north',     path:'M155,115 L200,108 L225,115 L235,145 L210,165 L175,165 L152,148 Z',                     cx:192, cy:138 },
  { id:'pb', name:'Punjab',            short:'Pb',   region:'north',     path:'M80,102 L105,102 L155,115 L152,148 L135,168 L100,170 L80,148 L78,120 Z',               cx:112, cy:137 },
  { id:'hr', name:'Haryana',           short:'Hr',   region:'north',     path:'M135,168 L152,148 L175,165 L195,168 L200,195 L185,208 L150,210 L132,192 Z',            cx:165, cy:185 },
  { id:'dl', name:'Delhi',             short:'DL',   region:'north',     path:'M183,192 L196,192 L196,205 L183,205 Z',                                                cx:189, cy:199 },
  { id:'uk', name:'Uttarakhand',       short:'UK',   region:'north',     path:'M200,108 L240,90 L265,100 L272,130 L255,158 L230,162 L210,150 L210,130 Z',             cx:235, cy:132 },
  { id:'up', name:'Uttar Pradesh',     short:'U.P.', region:'north',     path:'M150,210 L185,208 L200,195 L230,185 L255,175 L272,165 L310,170 L330,185 L335,215 L320,248 L295,262 L260,270 L215,268 L182,255 L162,238 Z', cx:242, cy:222 },
  { id:'rj', name:'Rajasthan',         short:'Rj',   region:'north',     path:'M55,148 L80,148 L100,170 L132,192 L150,210 L162,238 L155,290 L142,320 L110,335 L70,330 L45,308 L42,275 L48,225 L52,185 Z', cx:100, cy:242 },
  { id:'bh', name:'Bihar',             short:'Bh',   region:'east',      path:'M330,185 L370,178 L392,188 L398,215 L382,245 L348,252 L325,248 L320,230 Z',            cx:358, cy:215 },
  { id:'jh', name:'Jharkhand',         short:'Jh',   region:'east',      path:'M320,248 L348,252 L368,258 L372,290 L348,308 L320,310 L300,290 L305,268 Z',            cx:336, cy:280 },
  { id:'wb', name:'West Bengal',       short:'W.B.', region:'east',      path:'M370,178 L400,172 L420,185 L418,225 L405,255 L380,270 L368,258 L372,245 L382,218 Z',   cx:392, cy:220 },
  { id:'or', name:'Odisha',            short:'Od',   region:'east',      path:'M368,258 L405,255 L422,270 L418,310 L398,338 L370,345 L348,320 L348,308 L372,290 Z',   cx:385, cy:305 },
  { id:'sk', name:'Sikkim',            short:'Sk',   region:'northeast', path:'M392,163 L405,160 L409,172 L396,175 Z',                                                cx:400, cy:168 },
  { id:'as', name:'Assam',             short:'As',   region:'northeast', path:'M418,185 L462,170 L488,180 L490,205 L468,220 L440,228 L415,218 L412,200 Z',            cx:450, cy:200 },
  { id:'me', name:'Meghalaya',         short:'Me',   region:'northeast', path:'M415,218 L440,228 L440,248 L418,255 L408,245 L408,228 Z',                              cx:424, cy:238 },
  { id:'ar', name:'Arunachal Pradesh', short:'A.P.', region:'northeast', path:'M462,170 L510,148 L516,175 L495,195 L470,205 L448,200 L440,185 Z',                     cx:479, cy:178 },
  { id:'nl', name:'Nagaland',          short:'Nl',   region:'northeast', path:'M468,220 L490,215 L495,240 L475,248 L455,240 L455,225 Z',                              cx:475, cy:233 },
  { id:'mn', name:'Manipur',           short:'Mn',   region:'northeast', path:'M455,240 L475,248 L478,268 L460,278 L445,265 L445,248 Z',                              cx:462, cy:258 },
  { id:'mz', name:'Mizoram',           short:'Mz',   region:'northeast', path:'M445,265 L460,278 L458,295 L440,298 L432,280 Z',                                       cx:447, cy:280 },
  { id:'tr', name:'Tripura',           short:'Tr',   region:'northeast', path:'M418,255 L435,258 L438,278 L420,282 L412,268 Z',                                       cx:425, cy:268 },
  { id:'mp', name:'Madhya Pradesh',    short:'M.P.', region:'central',   path:'M162,238 L182,255 L215,268 L260,270 L295,262 L320,310 L308,338 L280,352 L235,355 L192,345 L170,320 L162,295 Z', cx:235, cy:308 },
  { id:'cg', name:'Chhattisgarh',      short:'C.G.', region:'central',   path:'M295,262 L320,310 L348,308 L360,328 L352,358 L325,368 L300,355 L280,352 L308,338 Z',   cx:320, cy:325 },
  { id:'gj', name:'Gujarat',           short:'Gj',   region:'west',      path:'M42,275 L70,330 L68,358 L58,390 L42,410 L28,405 L20,382 L22,348 L30,315 L35,290 Z',    cx:45,  cy:345 },
  { id:'mh', name:'Maharashtra',       short:'M.H.', region:'west',      path:'M70,330 L110,335 L142,320 L162,295 L170,320 L192,345 L200,380 L185,405 L160,418 L130,420 L98,408 L72,390 L62,368 L65,348 Z', cx:130, cy:372 },
  { id:'ga', name:'Goa',               short:'Ga',   region:'west',      path:'M128,420 L143,420 L143,432 L128,432 Z',                                                cx:135, cy:426 },
  { id:'ka', name:'Karnataka',         short:'Ka',   region:'south',     path:'M98,408 L128,420 L143,432 L172,438 L195,458 L195,495 L170,510 L142,510 L112,498 L90,478 L88,452 L92,430 Z', cx:140, cy:462 },
  { id:'tg', name:'Telangana',         short:'Tg',   region:'south',     path:'M192,345 L235,355 L258,368 L268,392 L258,415 L232,425 L205,415 L195,395 L195,375 Z',   cx:228, cy:388 },
  { id:'ap', name:'Andhra Pradesh',    short:'A.P.', region:'south',     path:'M258,368 L300,368 L328,382 L335,415 L322,450 L295,468 L268,465 L245,445 L235,425 L258,415 L268,392 Z', cx:285, cy:418 },
  { id:'tn', name:'Tamil Nadu',        short:'T.N.', region:'south',     path:'M170,510 L195,498 L232,498 L268,492 L295,478 L302,508 L285,540 L258,558 L228,562 L198,550 L175,532 Z', cx:234, cy:525 },
  { id:'kl', name:'Kerala',            short:'Kl',   region:'south',     path:'M112,498 L142,510 L170,510 L175,532 L168,548 L148,555 L122,540 L108,518 Z',            cx:140, cy:523 },
]

/** States large enough to label on the map */
export const LABELED_STATES = new Set([
  'rj','mp','mh','up','cg','ka','ap','tn','wb','gj','ar','as',
])
