import { useRecoilState } from 'recoil'
import { language } from '../../atoms'
import styled, { css } from 'styled-components'

const LanguageContextContainer = styled.div`
  display: flex;
  position: absolute;
  gap: 0px;
  top: 15px;
  right: 20px;
  z-index: 10;

  @media (max-width: 1024px) {
    position: fixed;
    top: unset;
    bottom: 15px;
    right: 10px;
    padding: 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.GRAY_BG};

    box-shadow: 0 1.5px 5px rgba(0, 0, 0, 0.219),
      0 10px 6px rgba(0, 0, 0, 0.144), 0 14px 11px rgba(0, 0, 0, 0.103),
      0 22px 30px rgba(0, 0, 0, 0.26), 0 35px 65px rgba(0, 0, 0, 0.007);
  }
`
interface ButtonContainerProps {
  active: boolean
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  outline: none;
  border: none;
  background: none;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }

  ${({ active }) =>
    active === false &&
    css`
      filter: saturate(0);
    `}
`

export function LanguageContext() {
  const [currentLanguage, setCurrentLanguage] = useRecoilState(language)

  return (
    <LanguageContextContainer>
      <ButtonContainer
        active={currentLanguage == 'ptBR'}
        onClick={() => setCurrentLanguage('ptBR')}
      >
        <img src="/images/br.png" alt="ptBR" />
      </ButtonContainer>

      <ButtonContainer
        active={currentLanguage == 'enUS'}
        onClick={() => setCurrentLanguage('enUS')}
      >
        <img src="/images/en.png" alt="enUS" />
      </ButtonContainer>
    </LanguageContextContainer>
  )
}
