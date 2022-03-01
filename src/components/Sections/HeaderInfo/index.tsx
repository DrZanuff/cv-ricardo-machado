import { GmailIcon, TwitterIcon, WhatsappIcon } from './icons'
import * as S from './styles'

export function HeaderInfo() {
  return (
    <S.HeaderInfoContainer>
      <S.LeftSide>
        <h3>SOBRE</h3>
        <span>{'32 anos   /   Desenvolvedor   /   Designer'}</span>
        <p>
          Programador Front-End, com experiência nas áreas de Design e
          Desenvolvimento de Jogos. Gosto de estar sempre aprendendo coisas
          novas e ser desafiado. Prezo muito por um bom trabalho em equipe, que
          na minha opinião é o essencial para um ambiente de trabalho.
        </p>
      </S.LeftSide>
      <S.Separator />
      <S.RightSide>
        <S.ListContainer>
          Pontos Fortes
          <ul>
            <li>Bons fundamentos de Javascript</li>
            <li>Proficiência em Inglês</li>
            <li>Trabalho em equipe</li>
          </ul>
        </S.ListContainer>
        <h4>CONTATO</h4>
        <S.LinksContainer>
          <S.LinkItem>
            <WhatsappIcon />
            <a href="#">(61) 99220-7186</a>
          </S.LinkItem>

          <S.LinkItem>
            <TwitterIcon />
            <a href="#">twitter.com/drzanuff</a>
          </S.LinkItem>

          <S.LinkItem>
            <GmailIcon />
            <a href="#">ricardo.machado.nwi@gmail.com</a>
          </S.LinkItem>
        </S.LinksContainer>
      </S.RightSide>
    </S.HeaderInfoContainer>
  )
}
