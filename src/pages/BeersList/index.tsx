import { Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { getBeers } from "../../services/beers";
import BeersTable from "../../component/BeersTable";

const BeersList = () => {
  const [beers, setBeers] = React.useState([]);

  const getBeersFromAPI = async () => {
    const currentBeers = await getBeers();
    setBeers(currentBeers);
  };

  React.useEffect(() => {
    getBeersFromAPI();
  }, []);

  return (
    <VStack spacing={8}>
      <Heading>Beers List</Heading>
 
      {beers.length ? (
        <>
          <Text>({beers.length} beers today)</Text>
          <BeersTable beers={beers} />
        </>
      ) : (
        <Text>(No beers today)</Text>
      )}
    </VStack>
  );
};

export default BeersList;
