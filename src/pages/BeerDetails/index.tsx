import React from "react";
import { Heading, IconButton, VStack, useToast, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router";
import { getBeerById } from "../../services/beers";
import { ArrowBackIcon } from "@chakra-ui/icons";

const BeerDetails = () => {
  const toast = useToast();
  const { beerId } = useParams();
  const navigate = useNavigate();

  const [beer, setBeer] = React.useState({});

  const getBeerFromAPI = async (id: string) => {
    try {
      const currentBeer = await getBeerById(id);
      setBeer(currentBeer);
    } catch (error) {
      toast({
        title: "Error fetching beer",
        description: `There was an error fetching beer with id ${id}`,
        status: "error",
        duration: 5000,
        position: "bottom-right",
      });
    }
  };

  React.useEffect(() => {
    if (beerId) {
      getBeerFromAPI(beerId);
    }
  }, [beerId]);

  return (
    <VStack spacing={8}>
      <Heading>Beer Details</Heading>
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        icon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
      />
      <Text>{beerId}</Text>
    </VStack>
  );
};

export default BeerDetails;
