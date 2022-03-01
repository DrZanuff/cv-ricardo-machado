import Rive from 'rive-react'
import LoadingSpin from 'react-loading-spin'
import { useState, useEffect } from 'react'
import theme from '../../../../styles/theme'
import TextTransition, { presets } from 'react-text-transition'
import * as S from './styles'

const Titles = [
  'Development',
  'Front-End',
  'Design',
  'User Experience',
  'Back-End',
  'Animations',
  'User Interface',
]

export function TitleAnimation() {
  const [animationReady, setAnimationReady] = useState(false)
  const [animationOpacity, setAnimationOpacity] = useState(0)

  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setAnimationReady(true)

      setTimeout(() => {
        setAnimationOpacity(1)
      }, 1000)
    }, 1000)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setTextIndex((index) => {
          let newIndex = index + 1
          if (newIndex >= Titles.length) {
            newIndex = 0
          }
          return newIndex
        }),
      4000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <S.TitleAnimationContainer>
      <h1>
        <TextTransition text={Titles[textIndex]} springConfig={presets.stiff} />
      </h1>
      {animationReady === true && (
        <S.AnimationContainer opacity={animationOpacity}>
          <Rive
            src="/cv_animation.riv"
            onLoad={() => setAnimationReady(true)}
          />
        </S.AnimationContainer>
      )}
      {animationReady === false && (
        <S.SpinnerContainer>
          <LoadingSpin
            size={'200px'}
            width={'20px'}
            primaryColor={theme.colors.GREEN}
          />
        </S.SpinnerContainer>
      )}
    </S.TitleAnimationContainer>
  )
}
