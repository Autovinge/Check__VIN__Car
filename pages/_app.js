import { ChakraProvider } from '@chakra-ui/react'
import AppContainer from '../components/AppContainer'
import theme from '../config/theme'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp)
