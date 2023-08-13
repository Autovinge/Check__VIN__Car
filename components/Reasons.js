import React, { useContext } from 'react'
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Flex,
  Heading,
  Text,
  Container
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { Lang } from '../context'
import data from '../locales/langs'

const Reasons = () => {
  const { lang, setLang } = useContext(Lang)
  let { reason } = data[lang]
  return (
    <Container
      textColor="white"
      maxW={['90%', '90%', '1150px']}
      borderRadius="5px"
      boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
      // pb="70px"
      ml="auto"
      mr="auto"
      mt="50px"
    >
      <Box
        display="flex"
        w="full"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        borderRadius="10px"
        boxShadow="0px 4px 10px 0px #0000000D"
        backgroundColor="#FFFFFF0D"
      >
        <Heading
          display="flex"
          justifyContent="center"
          flexDirection="column"
          mt={'5%'}
          w="100%"
          mb="10"
          alignItems={'center'}
          fontSize={{ base: '24px', md: '26px', lg: '28px' }}
          textAlign="center"
          fontWeight="lighter"
        >
          {reason['reasons']}
          <Box bg="blue.500" h="3px" m="0 auto" w={['90%', '90%', '65%']}></Box>
        </Heading>
        <Box display="flex" justifyContent="center" w="full" ml="7%" pb="40px">
          <Box w="50%">
            <List space={3}>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['identify']}
              </ListItem>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['accident']}
              </ListItem>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['history']}
              </ListItem>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['stolen']}
              </ListItem>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['rental']}
              </ListItem>
            </List>
          </Box>
          <Box w="50%">
            <List space={3}>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['lien']}
              </ListItem>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['odemeter']}
              </ListItem>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['value']}
              </ListItem>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['disaster']}
              </ListItem>
              <ListItem
                fontSize={{ base: '15px', md: '18px', lg: '16px' }}
                mb="10px"
              >
                <ListIcon border="50%" as={CheckIcon} color="green.500" />
                {reason['recall']}
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Flex maxW="1000px" m="0 auto" mt="100px" justifyContent="space-between" >
        <Box borderRadius="10px" bg="#FFFFFF0D" boxShadow="0px 4px 10px 0px #0000000D" maxW="45%" p="2rem" >

          <Heading
            display="flex"
            justifyContent="center"
            flexDirection="column"
            mt={'5%'}
            w="100%"
            alignItems={'center'}
            fontSize={{ base: '24px', md: '26px', lg: '28px' }}
            fontWeight="thiner"
          >
            {reason['why']}
          </Heading>

          <Box bg="blue.500" h="3px" w={['65%', '40%', '35%']} m="0 auto"></Box>
          <Box display="flex" justifyContent="center" mt="1.5%" p="0 25px" mt="20px">
            <Text
              disply="flex"
              textAlign="center"
              fontSize={{ base: '17px', md: '18px', lg: '18px' }}
            >
              {reason['why-text']}
            </Text>
          </Box>
        </Box>
        <Box bg="#FFFFFF0D" boxShadow="0px 4px 10px 0px #0000000D" borderRadius="10px" maxW="45%" p="2rem">
          <Heading
            display="flex"
            justifyContent="center"
            flexDirection="column"
            mt={'5%'}
            w="100%"
            alignItems={'center'}
            fontWeight="thiner"
            fontSize={{ base: '24px', md: '26px', lg: '28px' }}

          >
            {reason['fast']}
          </Heading>

          <Box bg="blue.500" h="3px" w={['65%', '40%', '35%']} m="0 auto"></Box>
          <Box display="flex" justifyContent="center" mt="20px" p="0 25px" >
            <Text
              disply="flex"
              textAlign="center"
              fontSize={{ base: '17px', md: '18px', lg: '18px' }}
            >
              {reason['fast-text']}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container >
  )
}

export default Reasons
