import { Stack, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'wouter'
import React from 'react'
const links = [
  {
    route: '/Ofertas',
    textAlternative: 'Categorías',
    icon: <ChevronDownIcon margin="0 !important" />,
  },
  { route: '/category/Ofertas', textAlternative: 'Ofertas' },
  { route: '/category/Historial', textAlternative: 'Historial' },
  { route: '/category/Supermercado', textAlternative: 'Supermercado' },
  { route: '/category/Moda', textAlternative: 'Moda' },
  { route: '/category/vender', textAlternative: 'vender' },
  { route: '/category/Ayuda', textAlternative: 'Ayuda' },
]
const OptionNav = () => {
  return (
    <Stack as="nav" gap="2" direction="row">
      {links.map((link, ind) => (
        <Link key={ind.id} href={link.route}>
          {link.icon ? (
            <Stack
              direction="row"
              color="#3333337d"
              _hover={{
                color: 'ml.greyAlpha',
                transition: 'color .3s ease-out',
              }}
              cursor="pointer"
              align="center"
            >
              <Text as="a" fontSize="sm" color="currentcolor">
                {link.textAlternative}
              </Text>
              {link.icon}
            </Stack>
          ) : (
            <Text
              as="a"
              cursor="pointer"
              fontSize="sm"
              color="#3333337d"
              _hover={{
                color: 'ml.greyAlpha',
                transition: 'color .3s ease-out',
              }}
            >
              {link.textAlternative}
            </Text>
          )}
        </Link>
      ))}
    </Stack>
  )
}

export default OptionNav
