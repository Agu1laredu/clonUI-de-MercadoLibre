import { chakra } from '@chakra-ui/react'
const LogoIcon = () => {
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      width={{ base: '88px', md: '100px' }}
      height="62"
      viewBox="0 0 110.205 62.715"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.112"
          y1="0.676"
          x2="0.822"
          y2="0.683"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#e456fa" />
          <stop offset="1" stopColor="#2b4c7d" />
        </linearGradient>
      </defs>
      <g id="Grupo_4" data-name="Grupo 4" transform="translate(1368 -815.495)">
        <path
          id="Trazado_5"
          data-name="Trazado 5"
          d="M55.1-6.418c-.626,21.871,55.1,12.453,55.1,27.814S85.535,49.21,55.1,49.21,0,36.757,0,21.4,55.729-28.288,55.1-6.418Z"
          transform="translate(-1368 829)"
          fill="url(#linear-gradient)"
        />
        <text
          id="Free_Market"
          data-name="Free
Market"
          transform="translate(-1314 850)"
          fill="#fff"
          fontSize="19"
          fontFamily="Poppins-SemiBold, Poppins"
          fontWeight="600"
        >
          <tspan x="-20.596" y="0">
            Free
          </tspan>
          <tspan x="-33.915" y="16">
            Market
          </tspan>
        </text>
      </g>
    </chakra.svg>
  )
}

export default LogoIcon
