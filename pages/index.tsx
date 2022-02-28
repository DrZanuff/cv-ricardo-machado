import { SideBarMenu } from '../src/components/SideBarMenu'
import * as S from '../styles/home'

export default function Home() {
  return (
    <S.Container>
      <S.Menu>
        <SideBarMenu />
      </S.Menu>
      <S.Content>
        <h1>Hello</h1>
        <p>Tudo bem pessoa??</p>
      </S.Content>
    </S.Container>
  )
}
