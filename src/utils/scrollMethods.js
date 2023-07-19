const scrollMethods = {
  scrollRight(setActionSlide, cardWidth) {
    setActionSlide((prev) => (prev >= widthSlide ? 0 : prev + cardWidth));
  },
  scrollLeft(setActionSlide, cardWidth) {
    setActionSlide((prev) => (prev <= 0 ? widthSlide + 10 : prev - cardWidth));
  },
};
