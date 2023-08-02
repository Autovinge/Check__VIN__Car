import React from 'react'
import { HStack, Heading, Box, Square } from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import saveTime from '../public/shield.png'

const Hero = () => {
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
          VIN check reports for all makes and models of Cars,Trucks,RVs and
          Motorcycles
        </Heading>
      </Box>
      <Box display="flex" w={'full'} h="200px" bg={'blue.400'}>
        <Box>
          <HStack>
            <Image src={`${saveTime}`} alt="save time" />
          </HStack>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
