import { Stack } from "@chakra-ui/react";
import LocationNav from "./LocationNav";
import OptionNav from "./OptionNav";
import LoginNav from "./LoginNav";

const SubBar = (flexDirection) => {
  return (
    <Stack
      direction={flexDirection}
      align="flex-end"
      wrap="wrap"
      w="full"
      justify={{ base: "center", md: "space-between" }}
      gap="2"
    >
      <LocationNav />
      <OptionNav />
      <LoginNav />
    </Stack>
  );
};

export default SubBar;
