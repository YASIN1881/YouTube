export const ROUTES = {
  HOME: '/',
  LIBRARY: '/library',
  SEARCH: '/search',
  SHORTS: '/shorts',
  SUBS: '/subs'
};

import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Search from "./pages/Search/Search";
import Shorts from "./pages/Shorts/Shorts";
import Subs from "./pages/Subs/Subs";

const routes = [
    {path: ROUTES.HOME, element: <Home/>},
    {path: ROUTES.LIBRARY, element: <Library/>},
    {path: ROUTES.SEARCH, element: <Search/>},
    {path: ROUTES.SHORTS, element: <Shorts/>},
    {path: ROUTES.SUBS, element: <Subs/>}
];

export default routes; 