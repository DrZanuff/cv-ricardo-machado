import { TitleAnimation } from './TitleAnimation'
import { HeaderInfo } from './HeaderInfo'
import { Paragraph } from './Paragraph'
import { Portfolio } from './Portfolio'
import { SkillsList } from './SkillsList'
import { ImageSection } from './ImageSection'
import { data } from './data'
import * as S from './styles'

export function Sections() {
  return (
    <S.SectionsContainer>
      <TitleAnimation />
      <div id="section1" />
      <HeaderInfo currentLanguage="ptBR" />
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
      <Paragraph {...data.chippu} currentLanguage="ptBR" />
      <ImageSection image="/images/component.jpg" alt="Dica do Dia" />

      <Paragraph {...data.quiz} currentLanguage="ptBR" />
      <ImageSection image="/images/quiz.jpg" alt="Quiz do Witcher" />

      <Paragraph {...data.game} currentLanguage="ptBR" />
      <ImageSection image="/images/mobile.jpg" alt="Com Fogo não se Brinca" />

      <Paragraph {...data.gamefication} currentLanguage="ptBR" />
      <ImageSection image="/images/gamefictaion.jpg" alt="Rank" />

      <div id="section7" />
      <Paragraph {...data.likes} currentLanguage="ptBR" />
    </S.SectionsContainer>
  )
}
