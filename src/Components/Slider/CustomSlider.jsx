import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Stack } from '@chakra-ui/react'
import { useState } from 'react'
import Slides from './components/Slides'

const CustomSlider = ({ children }) => {
  const [actionSlide, setActionSlide] = useState(0)
  const [widthSlide, setWidthSlide] = useState('')

  const scrollMethods = {
    scrollRight(setActionSlide) {
      setActionSlide((prev) =>
        prev >= widthSlide.carrouselReference ? 0 : prev + widthSlide.cardWidth,
      )
    },
    scrollLeft(setActionSlide) {
      setActionSlide((prev) =>
        prev <= 0
          ? widthSlide.carrouselReference + 10
          : prev - widthSlide.cardWidth,
      )
    },
  }

  return (
    <>
      <Stack
        my="10"
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        position="relative"
        style={{ width: 1200 }}
      >
        <ChevronLeftIcon
          color="ml.blue"
          onClick={() => scrollMethods.scrollLeft(setActionSlide)}
          zIndex="200"
          position="absolute"
          opacity={actionSlide === 0 ? '0' : '1'}
          cursor="pointer"
          width="4.5rem"
          height="3.5rem"
          borderRadius="full"
          bg="#fff"
          _hover={{
            opacity: '1',
            transition: 'all 300ms ease 0s',
          }}
          display={{ base: 'none', md: 'block' }}
          boxShadow="lg"
        />
        <Slides traslate={actionSlide} setWidthSlide={setWidthSlide}>
          {children}
        </Slides>
        <ChevronRightIcon
          color="ml.blue"
          onClick={() => scrollMethods.scrollRight(setActionSlide)}
          zIndex="200"
          position="absolute"
          right="0"
          cursor="pointer"
          width="3.5rem"
          height="3.5rem"
          borderRadius="full"
          bg="#fff"
          boxShadow="lg"
          display={{ base: 'none', md: 'block' }}
        />
      </Stack>
    </>
  )
}

export default CustomSlider
