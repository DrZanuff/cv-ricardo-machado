import { SideBarMenu } from '../src/components/SideBarMenu'
import { Sections } from '../src/components/Sections'
import * as S from '../styles/home'

export default function Home() {
  return (
    <S.Container>
      <S.Menu>
        <SideBarMenu />
      </S.Menu>
      <S.Content>
        <Sections />
      </S.Content>
    </S.Container>
  )
}
