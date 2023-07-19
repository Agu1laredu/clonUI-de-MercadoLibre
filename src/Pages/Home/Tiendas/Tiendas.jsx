import { Stack } from "@chakra-ui/react";
import { CustomSlider, SectionRoute } from "../../../Components";
import { dataCardBrand } from "../../../Constant";
import { TiendaCard } from "./components";

const Tiendas = () => {
  return (
    <Stack maxW="full" w="full" justify="flex-start" overflow="hidden">
      <SectionRoute
        title="Beneficios de Mercado Puntos"
        cta="Ver todos los beneficios"
      />
      <CustomSlider>
        {dataCardBrand.map((element) => (
          <TiendaCard key={element.key} props={element} />
        ))}
      </CustomSlider>
    </Stack>
  );
};

export default Tiendas;
