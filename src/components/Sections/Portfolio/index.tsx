import { GitHubIcon, ItchIcon } from './icons'
import styled from 'styled-components'

const PortfolioContainer = styled.section`
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

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;

    li {
      display: flex;
      gap: 20px;
      align-items: center;

      a {
        text-decoration: none;
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        color: ${({ theme }) => theme.colors.GREEN};
      }
    }
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 25px;
    }
  }
`

interface PortfolioProps {
  language: 'ptBR' | 'enUS'
}

export function Portfolio({ language }: PortfolioProps) {
  return (
    <PortfolioContainer>
      <h3>{language === 'ptBR' ? 'PORTFÓLIO' : 'PORTFOLIO'}</h3>

      <ul>
        <li>
          <GitHubIcon />
          <a href="https://www.github.com/DrZanuff" target="_blank">
            github.com/DrZanuff
          </a>
        </li>

        <li>
          <ItchIcon />
          <a href="https://drzanuff.itch.io/" target="_blank">
            drzanuff.itch.io/
          </a>
        </li>
      </ul>
    </PortfolioContainer>
  )
}
