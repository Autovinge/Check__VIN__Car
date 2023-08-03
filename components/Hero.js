import React, {useContext} from 'react'
import {  Heading, Box,  Text, Flex } from '@chakra-ui/react'
import { BsClock } from 'react-icons/bs'
import { LiaCoinsSolid } from 'react-icons/lia'
import { GoShieldCheck } from 'react-icons/go'
import { Lang } from '../context'
import data from '../locales/langs'

const Hero = () => {
  const { lang, setLang } = useContext(Lang)
  let {hero} = data[lang]

  return (
    <Box>
      <Box display="flex" justifyContent="center" width={'100%'}>
        <Heading
          mt={'10%'}
          // w="100%"
          ml="auto"
          mr="auto"
          mb="20"
          pl="20px"
          pr="20px"
          alignItems={'center'}
          fontSize={{ base: '16px', md: '20px', lg: '24px' }}
          textAlign="center"
        >
    {hero["hero-title"]}
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
    {hero["hero-time"]}
            </Text>
          </Box>
          <Box>
            <LiaCoinsSolid />
            <Text fontSize={{ base: '16px', md: '20px', lg: '24px' }} mt="5px">
              SAVE MONEY
    {hero["hero-money"]}
            </Text>
          </Box>
          <Box>
            <GoShieldCheck />
            <Text fontSize={{ base: '16px', md: '20px', lg: '24px' }} mt="5px">
    {hero["hero-protect"]}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero
