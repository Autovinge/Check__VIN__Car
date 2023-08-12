import React, { useContext } from 'react'
import { Heading, Box, Text, Flex } from '@chakra-ui/react'
import { BsClock } from 'react-icons/bs'
import { LiaCoinsSolid } from 'react-icons/lia'
import { GoShieldCheck } from 'react-icons/go'
import { Lang } from '../context'
import data from '../locales/langs'

const Hero = () => {
  const { lang, setLang } = useContext(Lang)
  let { hero } = data[lang]

  return (
    <Box >
      <Box
        textColor="black"
        display="flex"
        justifyContent="center"
        w="fit-content"
        m="0 auto"
        mt="-180px"

    mb="50px"
      >
        <Heading
          mt={'50px'}
        border="1px solid white"
          // w="100%"
          ml="auto"
          mr="auto"
          mb="50px"
    p="30px 40px"
    borderRadius="10px"
          color="white"
          fontWeight="light"
          alignItems={'center'}
          fontSize={{ base: '16px', md: '20px', lg: '24px' }}
          textAlign="center"
        >
          {hero['hero-title']}
        </Heading>
      </Box>
      <Box display="flex" w={'full'} h="200px" bg={'blue.400'}>
        <Flex
          w={{ base: '100%', md: '80%', lg: '60%' }}
          ml="auto"
          mr="auto"
          fontSize={{ base: '80px', md: '95px', lg: '120px' }}
          textColor="white"
          justify="space-around"
          align="center"
        >
          <Box>
            <BsClock />
            <Text fontSize={{ base: '16px', md: '20px', lg: '24px' }} mt="5px">
              {hero['hero-time']}
            </Text>
          </Box>
          <Box>
            <LiaCoinsSolid style={{ marginLeft: '15px' }} />
            <Text fontSize={{ base: '16px', md: '20px', lg: '24px' }} mt="5px">
              {hero['hero-money']}
            </Text>
          </Box>
          <Box>
            <GoShieldCheck style={{ marginRight: '5px' }} />
            <Text fontSize={{ base: '16px', md: '20px', lg: '24px' }} mt="5px">
              {hero['hero-protect']}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero
