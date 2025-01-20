import { useLocation, Link } from 'react-router-dom';
import { MdHome, MdSearch, MdSubscriptions, MdLibraryAdd } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { ROUTES } from '../../routes';

export default function Footer() {
  const location = useLocation();

  console.log(ROUTES)
  
  const menuItems = [
    {
      icon: MdHome,
      label: 'Home',
      path: ROUTES.HOME
    },
    {
      icon: SiYoutubeshorts,
      label: 'Shorts',
      path: ROUTES.SHORTS
    },
    {
      icon: MdSearch,
      label: 'Search',
      path: ROUTES.SEARCH
    },
    {
      icon: MdSubscriptions,
      label: 'Subs',
      path: ROUTES.SUBS
    },
    {
      icon: MdLibraryAdd,
      label: 'Library',
      path: ROUTES.LIBRARY
    }
  ];

  return (
    <div className="absolute right-0 left-0 flex items-center justify-between px-2 pb-4 pt-3 md:hidden bg-[#1A1A1A] child:flex child:flex-col child:items-center child:cursor-pointer">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link to={item.path} key={item.path}>
            <div className={isActive ? "text-white" : "text-white/70"}>
              <item.icon 
                size={24} 
                className={isActive ? "text-redCustom bg-backgroundSelected" : "text-white/70"}
              />
              <span>
                {item.label}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
