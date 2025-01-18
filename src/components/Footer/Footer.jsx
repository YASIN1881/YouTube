import { MdHome, MdSearch, MdSubscriptions, MdLibraryAdd  } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

export default function Footer() {
  return (
    <div className="absolute right-0 left-0 flex items-center justify-between px-2 pb-4 pt-3 md:hidden bg-[#1A1A1A] child:flex child:flex-col child:items-center child:cursor-pointer">
        <div className="text-white">
            <div>
            <MdHome size={24} className="text-redCustom bg-backgroundSelected"/>
            </div>
            <span>
                Home
            </span> 
        </div>
        <div className="text-white/70">
            <SiYoutubeshorts size={24} className="text-white/70"/>
            <span>
                Shorts   
            </span>
        </div>
        <div className="text-white/70">
            <MdSearch size={24} className="text-white/70"/>
            <span>
                Seacrh
            </span>
        </div>
        <div className="text-white/70">
            <MdSubscriptions size={24} className="text-white/70"/>
            <span>
                Subs
            </span>
        </div>
        <div className="text-white/70">
            <MdLibraryAdd size={24} className="text-white/70"/>
            <span>
                Library
            </span>
        </div>
    </div>
  )
}
