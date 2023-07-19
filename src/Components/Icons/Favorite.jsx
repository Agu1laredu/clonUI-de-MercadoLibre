import { chakra } from "@chakra-ui/react";

const Favorite = ({ props }) => {
  return (
    <chakra.svg
      zIndex={"20"}
      h="38px"
      w="38px"
      fill={props.favorites === "true" ? "ml.blue" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={19} cy={19} r={19} fill="#efefefc7" />
      <chakra.path
        d="m18.296 12.294.677.622.677-.622a4.906 4.906 0 0 1 5.214-.914c.6.25 1.146.617 1.604 1.079l.71-.705-.709.706c1.97 1.977 1.966 5.041.004 7.003l-7.5 7.5-7.5-7.5c-1.963-1.962-1.965-5.026 0-7h.001A4.944 4.944 0 0 1 14.978 11c1.229 0 2.413.462 3.318 1.294Z"
        stroke="ml.blue"
        strokeWidth={2}
      />
    </chakra.svg>
  );
};

export default Favorite;
