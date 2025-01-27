import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import BeersList from "./pages/BeersList";
import BeerDetails from "./pages/BeerDetails";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Routes>
          <Route path="/" element={<BeersList />} /> 
          <Route path="/:beerId" element={<BeerDetails />} />
        </Routes>
      </Grid>
    </Box>
  </ChakraProvider>
);
