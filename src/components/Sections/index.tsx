import { TitleAnimation } from './TitleAnimation'
import { HeaderInfo } from './HeaderInfo'
import { Paragraph } from './Paragraph'
import { Portfolio } from './Portfolio'
import { SkillsList } from './SkillsList'
import { ImageSection } from './ImageSection'
import { useRecoilState } from 'recoil'
import { language } from '../../atoms/index'
import { data } from './data'
import * as S from './styles'

export function Sections() {
  const [currentLanguage] = useRecoilState(language)

  return (
    <S.SectionsContainer>
      <TitleAnimation />
      <div id="section1" />
      <HeaderInfo currentLanguage={currentLanguage} />
      <Paragraph {...data.intro} currentLanguage={currentLanguage} />

      <div id="section2" />
      <Paragraph {...data.experiences} currentLanguage={currentLanguage} />

      <div id="section3" />
      <Portfolio language={currentLanguage} />

      <div id="section4" />
      <SkillsList language={currentLanguage} />

      <div id="section5" />
      <Paragraph {...data.studies} currentLanguage={currentLanguage} />

      <div id="section6" />
      <Paragraph {...data.chippu} currentLanguage={currentLanguage} />
      <ImageSection image="/images/component.jpg" alt="Dica do Dia" />

      <Paragraph {...data.quiz} currentLanguage={currentLanguage} />
      <ImageSection image="/images/quiz.jpg" alt="Quiz do Witcher" />

      <Paragraph {...data.game} currentLanguage={currentLanguage} />
      <ImageSection image="/images/mobile.jpg" alt="Com Fogo não se Brinca" />

      <Paragraph {...data.gamefication} currentLanguage={currentLanguage} />
      <ImageSection image="/images/gamefictaion.jpg" alt="Rank" />

      <div id="section7" />
      <Paragraph {...data.likes} currentLanguage={currentLanguage} />
    </S.SectionsContainer>
  )
}
