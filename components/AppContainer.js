import Navbar from './Navbar'
import Form from './Form'
import Hero from './Hero'
import Reasons from './Reasons'
import SampleButton from './SampleButton'
import Footer from './Footer'
import {Box} from '@chakra-ui/react'

const AppContainer = ({ children }) => {
  return (
    <Box backgroundColor="#F1F4FD">
      <Navbar />
      <Form />
      <Hero />
      <Reasons />
      <SampleButton />
      <Footer />
      {children}
    </Box>
  )
}

export default AppContainer
