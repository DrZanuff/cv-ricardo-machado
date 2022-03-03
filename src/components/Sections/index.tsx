import { TitleAnimation } from './TitleAnimation'
import { HeaderInfo } from './HeaderInfo'
import { Paragraph } from './Paragraph'
import { Portfolio } from './Portfolio'
import { SkillsList } from './SkillsList'
import { data } from './data'
import * as S from './styles'

export function Sections() {
  return (
    <S.SectionsContainer>
      <TitleAnimation />
      <div id="section1" />
      <HeaderInfo />
      <Paragraph {...data.intro} currentLanguage="ptBR" />
      <div id="section2" />
      <Paragraph {...data.experiences} currentLanguage="ptBR" />
      <div id="section3" />
      <Portfolio language="ptBR" />
      <div id="section4" />
      <SkillsList language="ptBR" />
      <div id="section5" />
      <Paragraph {...data.studies} currentLanguage="ptBR" />
      <div id="section6" />
      <Paragraph {...data.game} currentLanguage="ptBR" />
      <Paragraph {...data.gamefication} currentLanguage="ptBR" />
      <div id="section7" />
      <Paragraph {...data.likes} currentLanguage="ptBR" />
    </S.SectionsContainer>
  )
}
