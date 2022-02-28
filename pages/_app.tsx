import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  )
}
export default App
