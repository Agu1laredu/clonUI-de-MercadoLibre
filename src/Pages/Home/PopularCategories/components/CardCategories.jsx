import { Box, Grid, Text } from "@chakra-ui/react";
import { Link } from "wouter";

export const CardCategories = ({ props }) => {
  return (
    <Link href={props.route}>
      <Grid
        borderRadius="xl"
        bg="#fafafa"
        placeContent={"center"}
        justifyItems={"center"}
        p={4}
        minH="170px"
        cursor="pointer"
        textAlign="center"
        _hover={{ backgroundColor: "#d3e4ff" }}
      >
        {/* <Image src={cardCategoriesImg} alt={cardCategoriesAlt} /> */}
        <Box boxSize="68px">{props.icon()}</Box>
        <Text fontSize="md" textTransform="capitalize" fontWeight="semibold">
          {props.heading}
        </Text>
      </Grid>
    </Link>
  );
};
