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
`
export const SmallCircle = styled.div`
  position: relative;
  top: -50px;
  background-color: ${({ theme }) => theme.colors.GREEN};
  width: 6px;
  height: 6px;
  border-radius: 50%;
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
`

interface NavItemProps {
  active: boolean
}

export const NavItem = styled.button<NavItemProps>`
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

  &:hover {
    color: ${({ active }) =>
      active === true ? theme.colors.GREEN : theme.colors.TEXT};
    padding-left: 15px;
  }

  color: ${({ active }) =>
    active === true ? theme.colors.GREEN : theme.colors.TITLE};
`
