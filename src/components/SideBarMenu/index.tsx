import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useAnimation, motion } from 'framer-motion'
import { menuItems } from './menuItens'
import { CloseMenu, MobileMenuIcon } from './icons'
import theme from '../../../styles/theme'
import ProfilePic from '../../../public/images/Photo.png'
import * as S from './styles'

export function SideBarMenu() {
  const [currentItemMenu, setCurrentItemMenu] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const control = useAnimation()
  const controlWrapper = useAnimation()

  const toggleMobileMenu = useCallback(
    async (status = null) => {
      const isOpen = status == null ? !isMobileMenuOpen : status
      setIsMobileMenuOpen(isOpen)
      if (!isOpen) {
        await control.start({
          opacity: 0,
        })
        await controlWrapper.start({
          height: '0px',
        })
        control.start({
          visibility: 'hidden',
        })
        if (status != null) {
          window.scrollBy(0, -200)
        }
      } else {
        await controlWrapper.start({
          height: '420px',
          transition: { duration: 0.5 },
        })
        control.start({
          visibility: 'visible',
          transition: { duration: 0 },
        })
        await control.start({
          opacity: 1,
        })
      }
    },
    [isMobileMenuOpen]
  )

  return (
    <S.SideBarContainer>
      <S.IconContainer onClick={() => toggleMobileMenu()}>
        {isMobileMenuOpen === true ? <CloseMenu /> : <MobileMenuIcon />}
      </S.IconContainer>
      <S.InfoContainer>
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
      </S.InfoContainer>
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

      <motion.div
        id="animate-div-wrapper"
        animate={controlWrapper}
        initial={{
          height: 0,
          width: '100vw',
          backgroundColor: theme.colors.GRAY_MENU,
        }}
      >
        <motion.div
          id="animate-div"
          animate={control}
          initial={{
            visibility: 'hidden',
            opacity: 0,
            width: '100vw',
          }}
        >
          <S.NaveMenuMobile>
            {menuItems.map((item, index) => (
              <S.NavItem
                key={index}
                href={item.href}
                active={index === currentItemMenu}
                onClick={() => {
                  setCurrentItemMenu(index)
                  toggleMobileMenu(false)
                }}
              >
                {item?.label}
              </S.NavItem>
            ))}
          </S.NaveMenuMobile>
        </motion.div>
      </motion.div>
    </S.SideBarContainer>
  )
}
