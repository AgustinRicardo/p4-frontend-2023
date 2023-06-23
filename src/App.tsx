import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import BeersList from "./pages/BeersList";
import { Route, Routes } from "react-router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Routes>
          <Route path="/" element={<BeersList />} />
        </Routes>
      </Grid>
    </Box>
  </ChakraProvider>
);
