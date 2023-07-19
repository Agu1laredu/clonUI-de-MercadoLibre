import { Stack, Image, Box, Text } from "@chakra-ui/react";
import { Link } from "wouter";

const PayCard = ({
  props: { imgUrl, imgAlt, text, routeText, route, key },
}) => {
  return (
      <Stack
        p={4}
        direction='row'
        gap="4"
        alignItems="center"
      >
        <Image src={imgUrl} boxSize="48px" alt={imgAlt} />
        <Box>
          <Text fontWeight='semibold' textTransform="capitalize" fontSize="md">
            {text}
          </Text>
          <Link href={route}>
            <Text
              color="ml.blue"
              _hover={{ color: "#0049b6" }}
              as="a"
              textTransform="capitalize"
              cursor="pointer"
              fontSize="sm"
            >
              {routeText}
            </Text>
          </Link>
        </Box>
      </Stack>

  );
};

export default PayCard;
