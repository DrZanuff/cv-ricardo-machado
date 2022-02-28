import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  height: 100vh;
  background: #010101;
  color: ${({ theme }) => theme.colors.TEXT};
`
export const Menu = styled.aside`
  position: fixed;
  left: 0;
  height: 100vh;
  background: ${({ theme }) => theme.colors.GRAY_MENU};
  width: 315px;

  box-shadow: 1.5px 0 5px rgba(0, 0, 0, 0.219), 10px 0 6px rgba(0, 0, 0, 0.144),
    14px 0 11px rgba(0, 0, 0, 0.103), 22px 0 30px rgba(0, 0, 0, 0.26),
    35px 0 65px rgba(0, 0, 0, 0.007);

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    height: 125px;
    width: 100vw;

    box-shadow: 0 1.5px 5px rgba(0, 0, 0, 0.219),
      0 10px 6px rgba(0, 0, 0, 0.144), 0 14px 11px rgba(0, 0, 0, 0.103),
      0 22px 30px rgba(0, 0, 0, 0.26), 0 35px 65px rgba(0, 0, 0, 0.007);
  }
`
export const Content = styled.div`
  background: ${({ theme }) => theme.colors.GRAY_BG};
  margin: 70px auto 134px 0;
  height: calc(100% - 70px);
  padding-left: 410px;
  width: 95%;
`
