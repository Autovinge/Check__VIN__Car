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
    <Box>
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
      <Box
        display="flex"
        align="center"
        mt="100px"
        maxW="1200px"
        ml="auto"
        mr="auto"
      >
        <Flex
          w={{ base: '100%', md: '80%', lg: '100%' }}
          ml="auto"
          mr="auto"
          fontSize={{ base: '80px', md: '95px', lg: '90px' }}
          textColor="white"
          align="center"

          // justify="space-evenly"
        >
          <Box
            backgroundColor="#3874CB"
            borderRadius="10px"
            h="200px"
            w="200px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            ml="auto"
            mr="auto"
          >
            <BsClock />
            <Text fontSize={{ base: '16px', md: '18px', lg: '20px' }} mt="15px">
              {hero['hero-time']}
            </Text>
          </Box>
          <Box
            backgroundColor="#3874CB"
            borderRadius="10px"
            h="200px"
            w="200px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            ml="auto"
            mr="auto"
          >
            <LiaCoinsSolid style={{ marginLeft: '15px' }} />
            <Text fontSize={{ base: '16px', md: '18px', lg: '20px' }} mt="15px">
              {hero['hero-money']}
            </Text>
          </Box>
          <Box
            backgroundColor="#3874CB"
            borderRadius="10px"
            h="200px"
            w="200px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            ml="auto"
            mr="auto"
          >
            <GoShieldCheck style={{ marginRight: '5px' }} />
            <Text fontSize={{ base: '16px', md: '18px', lg: '20px' }} mt="15px">
              {hero['hero-protect']}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero
