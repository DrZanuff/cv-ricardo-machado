import { TitleAnimation } from './TitleAnimation'
import { HeaderInfo } from './HeaderInfo'
import { Paragraph } from './Paragraph'
import { data } from './data'
import * as S from './styles'

export function Sections() {
  console.log('DATA:', data)

  return (
    <S.SectionsContainer>
      <TitleAnimation />
      <HeaderInfo />
      <Paragraph {...data.intro} currentLanguage="ptBR" />
    </S.SectionsContainer>
  )
}
