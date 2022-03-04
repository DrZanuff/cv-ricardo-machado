import styled from 'styled-components'

export const ImageSectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.GRAY_MENU};
  position: relative;
  margin-bottom: 20px;
  &::before {
    content: '';
    height: inherit;
    background-color: ${({ theme }) => theme.colors.GRAY_MENU};
    width: 40px;
    height: 100%;
    position: absolute;
    left: -40px;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 25px 0;
  margin-left: -40px;

  img {
    object-fit: contain;
    height: 100%;
  }

  @media (max-width: 1024px) {
    padding: 15px 0;
    margin-left: 0px;

    img {
      width: 100%;
    }
  }
`
