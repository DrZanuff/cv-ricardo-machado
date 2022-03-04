import styled from 'styled-components'

export const SkillsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 50px;
  max-width: 800px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    margin-left: 0px;
    padding: ${({ theme }) => theme.mobile.padding};
  }

  h3 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
    line-height: 41px;
    margin: 10px 0px;

    color: ${({ theme }) => theme.colors.TITLE};
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 25px;
    }
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 12px;
  padding-inline-start: 0px;
`
