import {
  Stack,
  Box,
  Heading,
  StackDivider,
  HStack,
  Text,
  chakra,
  Grid,
} from '@chakra-ui/react'
import { SubsBenefits, SubsHeader } from './components/'
import { dataSubscribe } from '../../../Constant'

const Subscribe = () => {
  return (
    <Stack bg="#fff" w="full" borderRadius="md" boxShadow="lg">
      <HStack
        justify="space-between"
        py={6}
        px={{ base: 6, md: 8 }}
        color="#fff"
        borderRadius="md"
        bgGradient="linear(to-l, #0c1a51,#a90f90 50%)"
        style={{ height: 85 }}
      >
        <Heading>Suscribite al nivel 6</Heading>
        <HStack>
          <StackDivider h="16" w="5px" bg="#fff" />
          <Box>
            <Text as="s">$2.500</Text>
            <Heading fontSize={{ base: 'lg', md: '3xl' }}>
              $ 999 <chakra.span fontSize="sm">/mes</chakra.span>
            </Heading>
          </Box>
        </HStack>
      </HStack>
      <SubsHeader>
        <Grid
          gridTemplateColumns={{
            base: 'none',
            md: 'repeat(auto-fill,minmax(325px,1fr))',
          }}
          gap={2}
        >
          {dataSubscribe.map((element) => (
            <SubsBenefits key={element.key} props={element} />
          ))}
        </Grid>
      </SubsHeader>
    </Stack>
  )
}

export default Subscribe
