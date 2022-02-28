import styled, { keyframes } from 'styled-components'

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
  width: 100%;
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
