import * as S from './styles'

interface ImageSectionProps {
  image: string
  alt: string
}

export function ImageSection({ image, alt }: ImageSectionProps) {
  return (
    <S.ImageSectionContainer>
      <S.ImageContainer>
        <img src={image} alt={alt} />
      </S.ImageContainer>
    </S.ImageSectionContainer>
  )
}
