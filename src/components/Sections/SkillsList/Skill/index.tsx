import styled from 'styled-components'

export const SkillContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 95px;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.1);
    }
    span {
      color: ${({ theme }) => theme.colors.GREEN};
    }
  }

  span {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: ${({ theme }) => theme.colors.TITLE};
    transition: color 0.3s ease-in-out;
  }
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 64px;

  img {
    transition: transform 0.3s ease-in-out;
  }
`

interface SkillProps {
  name: string
  image: string
}

export function Skill({ name, image }: SkillProps) {
  return (
    <SkillContainer>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <span>{name}</span>
    </SkillContainer>
  )
}
