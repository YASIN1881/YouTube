import { useState } from "react";
import { MdMenu, MdSearch, MdMic, MdAddCircleOutline, MdNotificationsNone, MdSettings, MdCast    } from "react-icons/md";

export default function NavBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleClearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className='flex justify-between items-center mt-[13px]'>
        {/* Logo and Menu */}
        <div className="flex items-center gap-2 pl-2 lg:pl-3">
            {/* Menu */}
            <MdMenu size={24} color="white"/>
            {/* Logo */}
            <a href="/">
                <img 
                    src="/icons/Logo.svg" 
                    alt="Logo"
                />
            </a>
        </div>
        {/* Input search */}
        <div className="items-center justify-between hidden md:flex lg:w-[500px] xl:w-[727px] h-10 border border-[#2A2A2A] rounded-full pr-5 pl-[15px]">
          <div className="flex w-4/5">
            <MdSearch size={24} className="text-white/50"/>
            <input 
              type="search" 
              value={searchValue} 
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search" 
              className="bg-transparent border-none outline-none text-white ml-3 w-full"
            />
          </div>
          {searchValue && (
            <button 
              type="button" 
              onClick={handleClearSearch}
              className="text-white/50 hover:text-white"
            >
              X
            </button>
          )}
          <MdMic size={24} className="text-white/50 hover:text-white hover:cursor-pointer"/>
        </div>
        {/* icons bell setting */}
        <div className="flex items-center justify-between gap-2 lg:gap-4 xl:gap-6">
          <MdAddCircleOutline size={24} className="text-white hidden sm:block"/>
          <MdCast size={24} className="text-white block sm:hidden" />
          <MdNotificationsNone size={24} className="text-white"/>
          <MdSettings size={24} className="text-white hidden sm:block"/>
          <img src="https://github.com/shadcn.png" alt="@shadcn" className="size-7 rounded-full"/>
        </div>
    </div>
  )
}
