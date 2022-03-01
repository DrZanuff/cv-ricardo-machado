import * as S from './styles'
import type { ParagraphComponentProps } from './types'

export function Paragraph({
  ptBR = '',
  enUS = '',
  currentLanguage = 'ptBR',
}: ParagraphComponentProps) {
  return (
    <S.ParagraphContainer
      dangerouslySetInnerHTML={{
        __html: currentLanguage === 'ptBR' ? ptBR : enUS,
      }}
    />
  )
}
