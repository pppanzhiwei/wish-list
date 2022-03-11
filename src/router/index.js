import Welcome from '../pages/welcome';
import WishDetails from '../pages/wishDetails';
import WishInput from '../pages/wishInput';
const routerPaths = {
  INDEX: '/',
  WISH_DETAILS: '/wishDetails',
  WISH_INPUT: '/wishInput',
};

const routeConfigs = [
  {
    path: routerPaths.INDEX,
    element: <Welcome />,
  },
  {
    path: routerPaths.WISH_DETAILS,
    element: <WishDetails />,
  },
  {
    path: routerPaths.WISH_INPUT,
    element: <WishInput />,
  },
];

export { routeConfigs, routerPaths };
