import { TitleAnimation } from './TitleAnimation'
import { HeaderInfo } from './HeaderInfo'
import { Paragraph } from './Paragraph'
import { data } from './data'
import * as S from './styles'

export function Sections() {
  return (
    <S.SectionsContainer>
      <TitleAnimation />
      <HeaderInfo />
      <Paragraph {...data.intro} currentLanguage="ptBR" />
      <Paragraph {...data.experiences} currentLanguage="ptBR" />
      <Paragraph {...data.game} currentLanguage="ptBR" />
      <Paragraph {...data.gamefication} currentLanguage="ptBR" />
      <Paragraph {...data.likes} currentLanguage="ptBR" />
    </S.SectionsContainer>
  )
}
