import { SideBarMenu } from '../src/components/SideBarMenu'
import { Sections } from '../src/components/Sections'
import { LanguageContext } from '../src/components/LanguageContext'
import * as S from '../styles/home'

export default function Home() {
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
