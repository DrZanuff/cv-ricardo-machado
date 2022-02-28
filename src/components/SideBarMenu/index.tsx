import Image from 'next/image'
import ProfilePic from '../../../public/images/Photo.png'
import * as S from './styles'

export function SideBarMenu() {
  return (
    <S.SideBarContainer>
      <S.Badge>
        <Image src={ProfilePic} width={'100%'} height={'100%'} />
        <S.Dot>
          <S.Circle />
        </S.Dot>
        <S.DotSmall>
          <S.SmallCircle />
        </S.DotSmall>
      </S.Badge>
    </S.SideBarContainer>
  )
}
