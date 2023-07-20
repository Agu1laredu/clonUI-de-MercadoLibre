import React from 'react'
import { Box } from '@chakra-ui/react'

const Computer = ({ props, ...rest }) => (
  <Box as="span" _hover={{ color: '#fafafa' }} {...rest}>
    <svg
      {...props}
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 48 48"
      style={{
        enableBackground: 'new 0 0 48 48',
      }}
      xmlSpace="preserve"
    >
      <style>{'.st0{fill:none;stroke:#3483fa;stroke-miterlimit:10}'}</style>
      <path
        className="st0"
        d="M4 8h40v24.7H4zM24 37.3v-4.7M14.2 40c3.8-3.6 15.8-3.6 19.6 0M4 27.7h40"
      />
    </svg>
  </Box>
)

export default Computer
