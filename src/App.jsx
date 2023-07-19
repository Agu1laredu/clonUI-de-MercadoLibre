import { Stack } from "@chakra-ui/react";
import { Navbar } from "./Components";
import Routes from "./Routes/Routes";

const App = () => {
  return (
    <Stack margin="0 auto" bg="#ebebeb" alignItems="center">
      <Navbar />
      <Routes />
    </Stack>
  );
};

export default App;
