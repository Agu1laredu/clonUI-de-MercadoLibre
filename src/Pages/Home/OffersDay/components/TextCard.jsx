import { Grid, Heading, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "wouter";

const TextCard = () => {
  return (
    <Grid boxSize='full'  p="12" gap='4' placeContent="center" textTransform="Uppercase" color="#fff">
      <Text letterSpacing={2} fontSize="md">
        Ofertas del día
      </Text>
      <Heading fontFamily='body' fontWeight='600'>Aprovechá las mejores ofertas</Heading>
      <Link href="/Ofertas/day">
        <Text as='a' cursor='pointer' fontFamily='body' fontSize="md" display='flex' alignItems='center'>
          Ver más <ChevronRightIcon width='2rem' height='2rem' />
        </Text>
      </Link>
    </Grid>
  );
};

export default TextCard;
