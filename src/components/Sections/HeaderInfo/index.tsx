import { GmailIcon, TwitterIcon, WhatsappIcon } from './icons'
import * as S from './styles'

interface HeaderProps {
  currentLanguage: 'ptBR' | 'enUS'
}

export function HeaderInfo({ currentLanguage = 'ptBR' }: HeaderProps) {
  return (
    <S.HeaderInfoContainer>
      <S.LeftSide>
        <h3>{currentLanguage == 'ptBR' ? 'SOBRE' : 'ABOUT'}</h3>
        {currentLanguage == 'ptBR' ? (
          <span>{'35 anos   /   Desenvolvedor   /   Designer'}</span>
        ) : (
          <span>{'35 years   /   Developer   /   Designer'}</span>
        )}
        <p>
          {currentLanguage == 'ptBR'
            ? `Programador Front-End, com experiência nas áreas de Design e
            Desenvolvimento de Jogos. Gosto de estar sempre aprendendo coisas
            novas e ser desafiado. Prezo muito por um bom trabalho em equipe, que
            na minha opinião é o essencial para um ambiente de trabalho.`
            : `
            Front-End Programmer, with experience in Design and in Game Development.
            I like to be learning new things and being challenged. I really appreciate good
            teamwork, which in my opinion is essential for a work environment.
            `}
        </p>
      </S.LeftSide>
      <S.Separator />
      <S.RightSide>
        <S.ListContainer>
          {currentLanguage == 'ptBR' ? (
            <>
              Pontos Fortes
              <ul>
                <li>Good Javascript Fundamentals</li>
                <li>English proficiency</li>
                <li>Team work</li>
              </ul>
            </>
          ) : (
            <>
              Strong points
              <ul>
                <li>Good Javascript Fundamentals</li>
                <li>English proficiency</li>
                <li>Team work</li>
              </ul>
            </>
          )}
        </S.ListContainer>
        <h4>{currentLanguage == 'ptBR' ? 'CONTATO' : 'CONTACT'}</h4>
        <S.LinksContainer>
          <S.LinkItem>
            <WhatsappIcon />
            <a href="https://wa.me/5561992207186" target="_blank">
              (61) 99220-7186
            </a>
          </S.LinkItem>

          <S.LinkItem>
            <TwitterIcon />
            <a href="https://twitter.com/drzanuff" target="_blank">
              twitter.com/drzanuff
            </a>
          </S.LinkItem>

          <S.LinkItem>
            <GmailIcon />
            <a href="mailto: ricardo.machado.nwi@gmail.com" target="_blank">
              ricardo.machado.nwi@gmail.com
            </a>
          </S.LinkItem>
        </S.LinksContainer>
      </S.RightSide>
    </S.HeaderInfoContainer>
  )
}
