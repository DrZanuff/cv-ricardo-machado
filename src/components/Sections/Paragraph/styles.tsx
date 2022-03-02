import styled from 'styled-components'

export const ParagraphContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 50px;
  max-width: 800px;

  p {
    width: 100%;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 180.5%;
    /* or 27px */
    text-align: justify;

    color: ${({ theme }) => theme.colors.TEXT};
    margin-bottom: 35px;
  }

  h3 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
    line-height: 41px;

    color: ${({ theme }) => theme.colors.TITLE};
    margin-top: 10px;
    margin-bottom: 52px;
  }

  h4 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 180.5%;
    /* or 27px */

    text-align: justify;

    color: ${({ theme }) => theme.colors.TITLE};
    margin-top: 0px;
    margin-bottom: 0px;
  }

  a {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 180.5%;
    /* or 27px */
    text-align: justify;

    color: ${({ theme }) => theme.colors.GREEN};
  }
`
