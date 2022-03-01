import styled from 'styled-components'

export const TitleAnimationContainer = styled.section`
  display: flex;
  width: 100%;
  /* height: 518px; */
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.TITLE};
    text-transform: uppercase;
    font-size: 55px;
    margin-bottom: 0px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.GREEN};
    text-transform: uppercase;
    font-size: 35px;
  }
`
interface AnimationContainerProps {
  opacity: number
}

export const AnimationContainer = styled.div<AnimationContainerProps>`
  opacity: ${({ opacity }) => opacity};
  transition-delay: 2s;
  transition: opacity 2s ease-in-out;
  display: flex;
  width: 100%;
  min-height: 518px;
  height: 100%;

  canvas {
    height: 100%;
    min-height: 518px;
  }
`
export const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 518px;
  justify-content: center;
  align-items: center;
`