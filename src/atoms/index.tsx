import { atom } from 'recoil'

type languages = 'ptBR' | 'enUS'

export const language = atom({
  key: 'language',
  default: 'enUS' as languages,
})
