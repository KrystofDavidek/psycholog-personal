'use client'

import { useState, useEffect, FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimension";

export const CITATION = `„Jsme předurčeni k tomu být šťastní i v nedokonalém světě."`;

const routes = {
  "": "",
  about: "o-mně",
  first: "první-setkání",
  practice: "má-praxe",
  contact: "kontakt",
};

type Routes = keyof typeof routes;

const NavItem: FC<{ isSide?: boolean; activeItem: string; setActiveItem: (name: string) => void; name: string; routeName: Routes }> = ({
  isSide,
  activeItem,
  name,
  routeName,
  setActiveItem,
}) => {
  if (isSide) {
    const isActive = activeItem === name;
    return (
      <li>
        <Link
          href={`/${routes[routeName]}`}
          onClick={() => setActiveItem(name)}
          className={`block px-4 py-3 rounded-lg font-medium transition-smooth ${
            isActive
              ? "bg-font-green text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}>
          {name}
        </Link>
      </li>
    );
  }

  return activeItem !== name ? (
    <div>
      <Link
        href={`/${routes[routeName]}`}
        className="font-bold transition-smooth"
        onClick={() => setActiveItem(name)}>
        <span className="hover:text-font-green">{name}</span>
      </Link>
    </div>
  ) : (
    <div>
      <div className="border-b-2 font-bold pb-2 border-font-green">{name}</div>
    </div>
  );
};

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    isSideMenuOpen ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true);
  };
  const [activeItem, setActiveItem] = useState<string>("Úvod");
  const pathname = usePathname();

  useEffect(() => {
    const handleEsc = (event: { key: string }) => {
      if (isSideMenuOpen && event.key === "Escape") toggleSideMenu();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isSideMenuOpen]);

  useEffect(() => {
    toggleSideMenu();
  }, [activeItem]);

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, [width]);

  // Sync active item with current pathname
  useEffect(() => {
    const decoded = decodeURIComponent(pathname);
    if (decoded === "/") setActiveItem("Úvod");
    else if (decoded === "/o-mně" || pathname === "/about") setActiveItem("O mně");
    else if (decoded === "/první-setkání" || pathname === "/first") setActiveItem("První setkání");
    else if (decoded === "/má-praxe" || pathname === "/practice") setActiveItem("Má praxe");
    else if (decoded === "/kontakt" || pathname === "/contact") setActiveItem("Kontakt");
  }, [pathname]);

  return (
    <>
      <nav className="flex items-center w-full pt-10 pb-8 pl-4 md:pb-0 lg:justify-center pr-[2.5rem] 2xl:pr-[2.5rem] bg-white/80 backdrop-blur-sm">
        <div className="flex flex-col justify-center px-4 ml-6 mr-2 flex-shrink-0">
          <h1 className="text-center text-md md:text-[2rem] text-font-green font-bold tracking-wide">PSYCHOLOG A TERAPEUT, BRNO</h1>
          <h2 className="text-md md:text-[1.5rem] font-bold text-center">Mgr. Petr Davídek</h2>
        </div>
        <div className="hidden ml-auto space-x-5 2xl:space-x-10 2xl:pl-20 lg:flex items-center flex-shrink-0 lg:text-lg">
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Úvod" routeName="" />
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="O mně" routeName="about" />
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="První setkání" routeName="first" />
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Má praxe" routeName="practice" />
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Kontakt" routeName="contact" />
        </div>
        <div className="ml-auto mr-2 lg:hidden">
          <HamburgerIcon isOpen={isSideMenuOpen} handleClick={toggleSideMenu} />
        </div>
      </nav>
      <div className="hidden lg:flex justify-end pr-[2.5rem] pb-2">
        <p className="text-font-green italic font-medium text-right text-sm max-w-sm">
          {CITATION}
          <span className="block mt-1 text-xs not-italic font-semibold text-font-green/70">— Albert Peso</span>
        </p>
      </div>

      {isSideMenuOpen && (
        <>
          <div className="side-menu-backdrop lg:hidden" onClick={toggleSideMenu} />
          <SideMenu activeItem={activeItem} setActiveItem={setActiveItem} onClose={toggleSideMenu} />
        </>
      )}
    </>
  );
};

const SideMenu: FC<{ activeItem: string; setActiveItem: (name: string) => void; onClose: () => void }> = ({ activeItem, setActiveItem, onClose }) => {
  return (
    <div className="fixed top-0 left-0 z-20 w-3/4 max-w-xs h-screen bg-white lg:hidden side-menu-enter shadow-soft-lg flex flex-col">
      <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-gray-100">
        <span className="text-font-green font-bold text-lg tracking-wide">Menu</span>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-smooth" aria-label="Zavřít menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>
      </div>
      <ul className="flex flex-col gap-1 px-3 py-4 text-base">
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Úvod" routeName="" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="O mně" routeName="about" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="První setkání" routeName="first" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Má praxe" routeName="practice" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Kontakt" routeName="contact" />
      </ul>
      <div className="mt-auto px-5 py-6 border-t border-gray-100">
        <p className="text-xs text-gray-400">Mgr. Petr Davídek</p>
        <p className="text-xs text-gray-400">Psycholog a terapeut, Brno</p>
      </div>
    </div>
  );
};

export default Navbar;

type HamburgerIconProps = {
  isOpen: boolean;
  handleClick: () => void;
};

const HamburgerIcon = ({ isOpen, handleClick }: HamburgerIconProps) => {
  const genericHamburgerLine = `h-[3px] w-6 my-1 rounded-full bg-gray-700 transition ease transform duration-300`;
  return (
    <button className="flex flex-col items-center justify-center w-12 h-12 group" onClick={handleClick}>
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};
