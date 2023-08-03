import React from 'react'
import { Box, Link, Text, Select } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const handleChange = (e) => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query
      },
      null,
      { locale: e.target.value }
    )
  }
  return (
    <Box display="flex" w={'full'} h="100px" bg={'blue.400'}>
      <Box
        display="flex"
        justifyContent={'space-between'}
        alignItems="center"
        w={'100%'}
      >
        <Box display="flex">
          <Link
            mt="40px"
            ml={'52px'}
            fontSize={'2xl'}
            href="/"
            textColor="white"
          >
            {t('hero-title')}
          </Link>
        </Box>
        <box>
          <Select onChange={(e) => handleChange(e)} display={'flex'} justifyContent="flex-end" width="fit-content">
            <option value="en">EN</option>
            <option value="ka">KA</option>

          </Select>
        </box>
      </Box>
    </Box>
  )
}



export default Navbar
