import styled, { keyframes } from 'styled-components'
import theme from '../../../styles/theme'

const rotation = keyframes`
    from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
`

const backRotation = keyframes`
    from {
          -webkit-transform: rotate(359deg);
      }
      to {
				-webkit-transform: rotate(0deg);
		}
`
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 24px 44px 0px 29px; */
  margin-top: 24px;
  margin-left: 44px;
  margin-right: 29px;

  #animate-div-wrapper {
    &::before {
      content: '';
      height: 20px;
      width: 100%;
      background: ${({ theme }) => theme.colors.GRAY_MENU};
      margin-top: -13px;
    }
    background: ${({ theme }) => theme.colors.GRAY_MENU};
    box-shadow: 0 1.5px 5px rgba(0, 0, 0, 0.219),
      0 10px 6px rgba(0, 0, 0, 0.144), 0 14px 11px rgba(0, 0, 0, 0.103),
      0 22px 30px rgba(0, 0, 0, 0.26), 0 35px 65px rgba(0, 0, 0, 0.007);
  }

  #animate-div {
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 15px;
    margin: 15px 10px 0px;
    flex-direction: column;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  /* gap: 15px; */
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 15px;
  }
`

export const Badge = styled.div`
  width: 103px;
  height: 103px;
  border-radius: 50%;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.GREEN};
  position: relative;

  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }
`
export const Dot = styled.div`
  position: absolute;
  margin: auto auto;
  width: 10px;
  height: 10px;
  animation: ${rotation} 2s infinite linear;
`

export const DotSmall = styled.div`
  position: absolute;
  margin: auto auto;
  width: 10px;
  height: 10px;
  animation: ${backRotation} 2s infinite ease-in-out alternate-reverse;
`

export const Circle = styled.div`
  position: relative;
  top: -50px;
  background-color: ${({ theme }) => theme.colors.GREEN};
  width: 8px;
  height: 8px;
  border-radius: 50%;

  @media (max-width: 1024px) {
    top: -42px;
  }
`
export const SmallCircle = styled.div`
  position: relative;
  top: -50px;
  background-color: ${({ theme }) => theme.colors.GREEN};
  width: 6px;
  height: 6px;
  border-radius: 50%;

  @media (max-width: 1024px) {
    top: -42px;
  }
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: ${({ theme }) => theme.colors.TITLE};
  }

  span {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: ${({ theme }) => theme.colors.GREEN};
  }

  @media (max-width: 1024px) {
    align-items: flex-start;
    h1 {
      margin: 5px 0;
    }
  }
`
export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 40px;
  width: 100%;

  > button:last-child {
    margin-top: 60px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`
export const NaveMenuMobile = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 40px;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 7px;

  > button:last-child {
    margin-top: 60px;
  }

  /* @media (max-width: 1024px) {
    display: flex;
  } */
`

interface NavItemProps {
  active: boolean
}

export const NavItem = styled.a<NavItemProps>`
  outline: none;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;

  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  transition: color 0.2s ease-in-out, padding-left 0.2s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 19px;
    line-height: 22px;
  }

  &:hover {
    color: ${({ active }) =>
      active === true ? theme.colors.GREEN : theme.colors.TEXT};
    padding-left: 15px;
  }

  color: ${({ active }) =>
    active === true ? theme.colors.GREEN : theme.colors.TITLE};
`
export const IconContainer = styled.div`
  display: none;
  width: 100%;
  justify-content: center;

  @media (max-width: 1024px) {
    display: flex;
  }
`
