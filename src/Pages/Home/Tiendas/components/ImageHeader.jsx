import { Box, Image } from "@chakra-ui/react";
import { Link } from "wouter";
import handleScrollToTop from "../../../../utils/handleScrollToTop";

const ImageHeader = ({ children, props }) => {
  return (
    <Link href={`/products/${props.brand.brand}`}>
      <Box position="relative" width="285px" cursor="pointer">
        <Image
          onClick={handleScrollToTop}
          borderRadius="md"
          objectPosition="center"
          src={props.bgHeader}
          alt={props.key}
        />
        <>{children}</>{" "}
      </Box>
    </Link>
  );
};

export default ImageHeader;
