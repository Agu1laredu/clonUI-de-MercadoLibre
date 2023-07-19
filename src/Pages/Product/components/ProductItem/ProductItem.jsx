import { Box, Image, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "wouter";
import { Favorite } from "../../../../Components";

const ProductItem = ({ children, imgUrl, imgAlt, idArt, brand }) => {
  const [favorites, setFavorites] = useState(false);
  const handleFavoriteClick = () => setFavorites(!favorites);
  return (
    <Box
      cursor={"pointer"}
      position="relative"
      zIndex="1"
      h='fit-content'
      borderRadius="md"
      _hover={{ boxShadow: "xl" }}
    >
      <Box  borderRadius="full" boxShadow="md" _hover={{ boxShadow:'xl'}} onClick={handleFavoriteClick}>
        <Favorite
          props={{
            favorites: favorites.toString(),
            position: "absolute",
            right: "3",
            top: "3",
          }}
        />
      </Box>
      <Link to={`/${brand}/${idArt}`}>
        <Stack>
          <Image
            borderTopRadius="md"
            src={imgUrl}
            alt={imgAlt}
            zIndex="15"
            borderBottom="1px solid #ececec"
          />
          {children}
        </Stack>
      </Link>
    </Box>
  );
};

export default ProductItem;
