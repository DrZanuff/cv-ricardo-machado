export interface ParagraphProps {
  ptBR: string
  enUS: string
}

export interface ParagraphComponentProps extends ParagraphProps {
  currentLanguage: 'ptBR' | 'enUS'
}
