import { Button, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ urlImg, topHeading, heading }) => {
  return (
    <Grid w='full' gridTemplateColumns='repeat(auto-fit,minmax(225px,1fr))' alignItems='center' justifyItems={'center'} borderRadius="md" boxShadow="sm" bg="#fff">
      <Stack p='8' gap='2' textAlign="start" textTransform="Uppercase">
        <Text fontSize='sm' letterSpacing="3">{topHeading}</Text>
        <Heading fontWeight={"bold"} fontSize="2xl">{heading}</Heading>
        <Button
          textTransform="capitalize"
          borderRadius="sm"
          colorScheme={"linkedin"}
          px='8'
          w='fit-content'
        >
          Ver más
        </Button>
      </Stack>
      <Image borderRadius="md" maxW={'200px'}  src={urlImg} alt={heading} />
    </Grid>
  );
};

export default Card;
