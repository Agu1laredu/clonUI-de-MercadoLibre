import {
  Cocina,
  Computer,
  Games,
  Home,
  Micro,
  Ticket,
  Celular,
} from '../Components'
export const dataCategory = [
  {
    heading: 'computación',
    route: '/computacion',
    icon() {
      return <Computer />
    },
    id: 'a123',
  },
  {
    heading: 'electrodomesticos y aires ac.',
    route: '/electrodomesticos',
    icon() {
      return <Cocina />
    },
    id: 'a1234',
  },
  {
    heading: 'Entradas para eventos',
    route: '/entradas',
    icon() {
      return <Ticket />
    },
    id: 'a12345',
  },
  {
    heading: 'inmuebles',
    route: '/inmuebles',
    icon() {
      return <Home />
    },
    id: 'a123456',
  },
  {
    heading: 'juegos y juguetes',
    route: '/juegos-juguetes',
    icon() {
      return <Games />
    },
    id: 'a12345678',
  },
  {
    heading: 'celulares y teléfonos',
    route: '/celulares',
    icon() {
      return <Celular />
    },
    id: 'a123456789',
  },
  {
    heading: 'electrónica,audio y video',
    route: '/electronica',
    icon() {
      return <Micro />
    },
    id: 'b12',
  },
]
