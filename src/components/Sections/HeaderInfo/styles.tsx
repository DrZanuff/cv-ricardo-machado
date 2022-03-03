import styled from 'styled-components'

export const HeaderInfoContainer = styled.section`
  display: flex;
  width: 100%;
  margin-left: 50px;
  align-items: center;
  margin-bottom: 30px;
`

export const LeftSide = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  min-height: 290px;
  justify-content: center;

  h3 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
    line-height: 41px;
    margin: 0 0 15px;

    color: ${({ theme }) => theme.colors.TITLE};
  }

  span {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin: 0;

    color: ${({ theme }) => theme.colors.GREEN};
  }

  p {
    font-family: Rubik;
    font-style: italic;
    font-weight: 300;
    font-size: 17px;
    line-height: 180.5%;
    /* or 31px */
    text-align: justify;

    color: ${({ theme }) => theme.colors.TEXT};
  }
`
export const Separator = styled.span`
  opacity: 0.5;
  display: flex;
  align-items: center;
  min-width: 1px;
  height: 250px;
  margin-left: 29px;
  margin-right: 32px;
  background-color: ${({ theme }) => theme.colors.TITLE};
`
export const ListContainer = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.TEXT};

  ul {
    margin-top: 2px;
  }
`
export const RightSide = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  h4 {
    margin-top: 0px;
    margin-bottom: 8px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    /* or 32px */
    color: ${({ theme }) => theme.colors.TITLE};
  }
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const LinkItem = styled.div`
  display: flex;
  gap: 16px;

  a {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    /* or 25px */
    color: ${({ theme }) => theme.colors.GREEN};
  }
`
