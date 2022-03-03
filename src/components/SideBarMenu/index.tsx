import { useState } from 'react'
import Image from 'next/image'
import { menuItems } from './menuItens'
import ProfilePic from '../../../public/images/Photo.png'
import * as S from './styles'

export function SideBarMenu() {
  const [currentItemMenu, setCurrentItemMenu] = useState(0)

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
      <S.Title>
        <h1>Ricardo Machado</h1>
        <span>Desenvolvedor</span>
      </S.Title>
      <S.NavMenu>
        {menuItems.map((item, index) => (
          <S.NavItem
            key={index}
            href={item.href}
            active={index === currentItemMenu}
            onClick={() => {
              setCurrentItemMenu(index)
            }}
          >
            {item?.label}
          </S.NavItem>
        ))}
      </S.NavMenu>
    </S.SideBarContainer>
  )
}
