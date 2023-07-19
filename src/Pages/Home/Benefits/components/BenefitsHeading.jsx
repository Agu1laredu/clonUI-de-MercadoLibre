import { HStack, Image, Box, Stack, Heading, Text } from "@chakra-ui/react";

const BenefitsHeading = ({
  props: { imgUrl, imgAlt, description, title, promotional },
}) => {
  return (
    <HStack
      position={"absolute"}
      bottom="-1px"
      w="full"
      h="35%"
      borderBottomRadius={"xl"}
      p="2"
      gap="4"
      bgGradient="linear(#1a339740 0%, #a90f9059 25%, #a90f9080 50%)"
    >
      <Box borderRadius="md" p="1" bg="#fff" boxShadow="sm" boxSize="68px">
        <Image borderRadius="md" src={imgUrl} alt={imgAlt} />
      </Box>
      <Stack justify="center" h="full" color="#fff" borderRadius="">
        {promotional && (
          <Text textTransform="uppercase" fontWeight="medium" fontSize="sm">
            {promotional}
          </Text>
        )}
        <Heading margin="0 !important" fontWeight="500" fontSize={"xl"}>
          {title}
        </Heading>
        <Text margin="0 !important" fontSize="lg">
          {description}
        </Text>
      </Stack>
    </HStack>
  );
};

export default BenefitsHeading;
