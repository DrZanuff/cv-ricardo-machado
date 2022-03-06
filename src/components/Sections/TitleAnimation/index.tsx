import { Fit, Layout, useRive } from 'rive-react'
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
  const [animationReadyMobile, setAnimationReadyMobile] = useState(false)
  const [animationOpacity, setAnimationOpacity] = useState(0)

  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setAnimationReady(true)
      setAnimationReadyMobile(true)

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
      4000 // every 4 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  const { RiveComponent } = useRive(
    {
      src: '/cv_animation.riv',
      onLoad: () => setAnimationReady(true),
      layout: new Layout({ fit: Fit.Cover }),
      autoplay: true,
    },
    { fitCanvasToArtboardHeight: true }
  )

  const { RiveComponent: RiveComponentMobile } = useRive({
    src: '/cv_animation.riv',
    onLoad: () => setAnimationReadyMobile(true),
    layout: new Layout({ fit: Fit.FitWidth }),
    autoplay: true,
  })

  return (
    <S.TitleAnimationContainer>
      <h1>It's all about</h1>
      <h2>
        <TextTransition text={Titles[textIndex]} springConfig={presets.stiff} />
      </h2>

      {/* <--Mobile--> */}
      <h3>{Titles[textIndex]}</h3>
      {/* <--/Mobile-> */}

      {animationReady === true && (
        <S.AnimationContainer opacity={animationOpacity}>
          <RiveComponent />
        </S.AnimationContainer>
      )}
      {animationReadyMobile === true && (
        <S.AnimationContainerMobile opacity={animationOpacity}>
          <RiveComponentMobile />
        </S.AnimationContainerMobile>
      )}
      {animationReady === false && animationReadyMobile === false && (
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
