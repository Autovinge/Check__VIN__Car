// pages/payment/success.js
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function PaymentSuccess() {
  return (
    <Box minH="60vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Heading color="green.500" mb={4}>გადახდა წარმატებით დასრულდა</Heading>
      <Text mb={6}>გმადლობთ გადახდისთვის! დეტალები გამოგეგზავნებათ ელფოსტაზე.</Text>
      <Link href="/" passHref>
        <Button colorScheme="blue">მთავარ გვერდზე დაბრუნება</Button>
      </Link>
    </Box>
  )
}
