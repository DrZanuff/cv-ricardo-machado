import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { language } from '../src/atoms'
import { SideBarMenu } from '../src/components/SideBarMenu'
import { Sections } from '../src/components/Sections'
import { LanguageContext } from '../src/components/LanguageContext'
import * as S from '../styles/home'

export default function Home() {
  const [, setCurrentLanguage] = useRecoilState(language)

  useEffect(() => {
    const userLang = navigator.language || 'enUS'

    if (userLang === 'pt-BR') {
      setCurrentLanguage('ptBR')
    }
  }, [])

  return (
    <S.Container>
      <LanguageContext />
      <S.Menu>
        <SideBarMenu />
      </S.Menu>
      <S.Content>
        <Sections />
      </S.Content>
    </S.Container>
  )
}
