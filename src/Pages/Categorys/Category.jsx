import { Heading } from "@chakra-ui/react";
import React from "react";

const Category = ({ params }) => {
  const { id } = params;
  return (
    <div>
      Category
      <Heading textTransform="capitalize">{id}</Heading>
    </div>
  );
};

export default Category;
