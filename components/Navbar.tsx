import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import MenuIcon from "../assets/bars-solid.svg";
import CloseIcon from "../assets/window-close-regular.svg";
import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimension";

const NavItem: FC<{ isSide?: boolean; activeItem: string; setActiveItem: Function; name: string; route: string }> = ({
  isSide,
  activeItem,
  name,
  route,
  setActiveItem,
}) => {
  const color = isSide ? "border-black" : "border-font-green";

  return activeItem !== name ? (
    <div>
      <Link href={route}>
        <a className="font-bold transition duration-500 hover:scale-120">
          <span
            onClick={() => {
              setActiveItem(name);
            }}
            className={`${!isSide && "hover:text-font-green"}`}
          >
            {name}
          </span>
        </a>
      </Link>
    </div>
  ) : (
    <>
      {isSide ? (
        <div className={`pb-2 font-bold border-b-2 ${color}`}>{name}</div>
      ) : (
        <div>
          <div className={`border-b-2 font-bold pb-2 ${color}`}>{name}</div>
        </div>
        // <div className={` border-b-2 ${color}`}>{name}</div>
      )}
    </>
  );
};

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };
  const [activeItem, setActiveItem] = useState<string>("Úvod");
  const { pathname } = useRouter();

  useEffect(() => {
    toggleSideMenu();
  }, [activeItem]);

  useEffect(() => {
    setisSideMenuOpen(false);
  }, [width]);

  useEffect(() => {
    if (pathname === "/") setActiveItem("Úvod");
    if (pathname === "/about") setActiveItem("O mně");
    if (pathname === "/first") setActiveItem("První setkání");
    if (pathname === "/practice") setActiveItem("Má praxe");
    if (pathname === "/kontakt") setActiveItem("Kontakt");
  }, []);

  return (
    <nav className="flex w-full pt-10 pb-8 pl-4 md:pb-0 lg:justify-center pr-[2.5rem] 2xl:pr-[2.5rem]">
      <div className="flex flex-col justify-center px-4 py-2 ml-6 mr-2 align-center">
        <h1 className="text-center text-md md:text-[2rem] text-font-green font-bold">PSYCHOLOG A TERAPEUT, BRNO</h1>
        <h2 className="text-md md:text-[1.5rem] font-bold text-center">Mgr. Petr Davídek</h2>
      </div>
      <div className="hidden py-4 ml-auto space-x-5 2xl:space-x-10 2xl:pl-20 lg:flex">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Úvod" route="/" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="O mně" route="/about" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="První setkání" route="/first" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Má praxe" route="/practice" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Kontakt" route="/kontakt" />
        <div className="font-bold hidden xl:flex flex-col max-w-[15rem] text-font-green">
          <span className="text-right">„Jsme předurčeni k tomu, být štastní v nedokonalém světě.“</span>
          <span className="pt-4 text-right">Albert Peso</span>
        </div>
      </div>
      <button
        onClick={() => {
          toggleSideMenu();
        }}
        className="w-8 h-8 ml-auto mr-2 lg:hidden"
      >
        {isSideMenuOpen ? <Image src={CloseIcon} alt="close"></Image> : <Image src={MenuIcon} alt="menu"></Image>}
      </button>
      {isSideMenuOpen ? <SideMenu activeItem={activeItem} setActiveItem={setActiveItem} /> : ""}
    </nav>
  );
};

const SideMenu: FC<{ activeItem: string; setActiveItem: Function }> = ({ activeItem, setActiveItem }) => {
  return (
    <div className="fixed top-0 left-0 z-20 w-1/2 h-screen p-4 bg-font-green/95 sm:w-1/4 lg:hidden">
      <ul className="flex flex-col text-[1.5rem] gap-4">
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Úvod" route="/" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="O mně" route="/about" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="První setkání" route="/first" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Má praxe" route="/practice" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Kontakt" route="/kontakt" />
      </ul>
    </div>
  );
};

export default Navbar;
