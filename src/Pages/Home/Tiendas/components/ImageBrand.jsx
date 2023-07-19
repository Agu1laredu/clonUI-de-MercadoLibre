import { Image, Link } from "@chakra-ui/react";
import handleScrollToTop from "../../../../utils/handleScrollToTop";

const ImageBrand = ({ imgBrand, imgBrandAtl }) => {
  return (
    <Link href={`/products/${imgBrand}`}>
      <Image
      onClick={handleScrollToTop}
        _hover={{ boxShadow: "md" }}
        position="absolute"
        left="0"
        right="0"
        top="45px"
        margin="0 auto"
        boxSize="88px"
        border="1px solid #ccc"
        borderRadius="xl"
        src={imgBrand}
        alt={imgBrandAtl}
      />
    </Link>
  );
};

export default ImageBrand;
