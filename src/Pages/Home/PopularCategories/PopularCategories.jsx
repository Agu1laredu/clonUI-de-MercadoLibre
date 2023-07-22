import { Grid, Stack } from '@chakra-ui/react'
import { Router } from 'wouter'
import { SectionRoute } from '../../../Components'
import { dataCategory } from '../../../Constant/dataCategory'
import { CardCategories } from './components/CardCategories'

const PopularCategories = () => {
  return (
    <Router base="/category">
      <Stack w="full" maxW="full" minH={{ base: 'auto', md: '50vh' }} gap="4">
        <SectionRoute title="Categorías populares" />
        <Grid
          gridTemplateColumns="repeat(auto-fill,minmax(150px,1fr))"
          gap={'1'}
          bg="#f1f1f1"
          w="full"
          borderRadius="xl"
          boxShadow="sm"
        >
          {dataCategory.map((element) => (
            <CardCategories props={element} key={element.id} />
          ))}
        </Grid>
      </Stack>
    </Router>
  )
}

export default PopularCategories
