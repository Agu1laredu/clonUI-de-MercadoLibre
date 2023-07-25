import { Stack } from '@chakra-ui/react'
import { CustomSlider, SectionRoute } from '../../../Components'
import { dataCardBrand } from '../../../Constant'
import { TiendaCard } from './components'

const Tiendas = () => {
  return (
    <Stack maxW="full" w="full" justify="flex-start" overflow="hidden">
      <SectionRoute title="Las mejores tiendas te esperan" cta="Ver tiendas" />
      <CustomSlider>
        {dataCardBrand.map((element) => (
          <TiendaCard key={element.key} props={element} />
        ))}
      </CustomSlider>
    </Stack>
  )
}

export default Tiendas
