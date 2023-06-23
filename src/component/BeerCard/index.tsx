import React, { FC } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Box,
} from "@chakra-ui/react";

type Beer = any;

const noImagePlaceholder =
  "https://commons.wikimedia.org/wiki/File:No-Image-Placeholder.svg";

const BeerCard: FC<Beer> = ({ beer }) => {
  const beerParams = {
    ABV: beer.abv,
    IBU: beer.ibu,
    "Target FG": beer.target_fg,
    "Target OG": beer.target_og,
    EBC: beer.ebc,
    SRM: beer.srm,
    PH: beer.ph,
    "Attenuation level": beer.attenuation_level,
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={beer.image_url || noImagePlaceholder}
        alt={beer.name}
      />

      <Stack textAlign={"left"}>
        <CardBody>
          <Heading size="md" display={"flex"} justifyContent={"space-between"}>
            {beer.name} <Badge colorScheme="green">{beer.first_brewed}</Badge>
          </Heading>

          <Text as="i" py="2">
            {beer.tagline}
          </Text>

          <Text mt="6">{beer.description}</Text>

          <Divider orientation="horizontal" my="10" />

          <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
            {Object.entries(beerParams).map(([key, value]) => (
              <Stat
                bg={"gray.100"}
                p="4"
                mx="6"
                my="2"
                minWidth="120px"
                borderRadius="10"
              >
                <StatLabel>{key}</StatLabel>
                <StatNumber>{value}</StatNumber>
              </Stat>
            ))}
          </Box>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default BeerCard;