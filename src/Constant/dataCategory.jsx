import {
  Cocina,
  Computer,
  Games,
  Home,
  Micro,
  Ticket,
  Belleza,
  Joyas,
  Souvenirs,
  Accesorios,
  Celular,
} from "../Components";
export const dataCategory = [
  // { heading: "autos,motos y otros", icon: "", id: "a12" },
  {
    heading: "computación",
    route: "/computacion",
    icon() {
      return <Computer />;
    },
    id: "a123",
  },
  {
    heading: "electrodomesticos y aires ac.",
    route: "/electrodomesticos",
    icon() {
      return <Cocina />;
    },
    id: "a1234",
  },
  {
    heading: "Entradas para eventos",
    route: "/entradas",
    icon() {
      return <Ticket />;
    },
    id: "a12345",
  },
  {
    heading: "inmuebles",
    route: "/inmuebles",
    icon() {
      return <Home />;
    },
    id: "a123456",
  },
  // {
  //   heading: "belleza y cuidado personal",
  //   icon() {
  //     return <Belleza />;
  //   },
  //   id: "a1234567",
  // },
  {
    heading: "juegos y juguetes",
    route: "/juegos-juguetes",
    icon() {
      return <Games />;
    },
    id: "a12345678",
  },
  {
    heading: "celulares y teléfonos",
    route: "/celulares",
    icon() {
      return <Celular />;
    },
    id: "a123456789",
  },
  {
    heading: "electrónica,audio y video",
    route: "/electronica",
    icon() {
      return <Micro />;
    },
    id: "b12",
  },
  // {
  //   heading: "Joyas y accesorios",
  //   icon() {
  //     return <Joyas />;
  //   },
  //   id: "b123",
  // },
  // {
  //   heading: "hogar, muebles y jardín",
  //   icon() {
  //     return <Home />;
  //   },
  //   id: "b1234",
  // },
  // {
  //   heading: "accesorios para vehículos",
  //   icon() {
  //     return <Accesorios />;
  //   },
  //   id: "b12345",
  // },
  // {
  //   heading: "consolas y videojuegos",
  //   icon() {
  //     return <Cocina />;
  //   },
  //   id: "b123456",
  // },
  // {
  //   heading: "souvenir y regalos",
  //   icon() {
  //     return <Souvenirs />;
  //   },
  //   id: "b1234567",
  // },
];
