import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const NavItem: FC<{ activeItem: string; setActiveItem: Function; name: string; route: string }> = ({
  activeItem,
  name,
  route,
  setActiveItem,
}) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-font-green">
          {name}
        </span>
      </a>
    </Link>
  ) : (
    <div className="border-t-2 border-font-green">
      <div className="mt-2">{name}</div>
    </div>
  );
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("Úvod");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("Úvod");
    if (pathname === "/about") setActiveItem("O mně");
    if (pathname === "/first") setActiveItem("První setkání");
    if (pathname === "/practice") setActiveItem("Má praxe");
    if (pathname === "/contact") setActiveItem("Kontakt");
  }, []);

  return (
    <nav className="flex w-full p-8 py-10 lg:justify-center">
      <div className="flex flex-col justify-center px-4 py-2 border-2 border-black border-solid align-center">
        <h1 className="text-center text-md md:text-[2rem] text-font-green font-bold">PSYCHOLOG A TERAPEUT, BRNO</h1>
        <h2 className="text-md md:text-[1.5rem] font-bold text-center">Mgr. Petr Davídek</h2>
      </div>
      <div className="hidden py-4 ml-auto space-x-10 2xl:px-20 lg:flex">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Úvod" route="/" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="O mně" route="/about" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="První setkání" route="/first" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Má praxe" route="/practice" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Kontakt" route="/contact" />
        <div className="lg:hidden 2xl:flex flex-col max-w-[17rem] space-y-4 text-font-green">
          <span>„Jsme předurčeni k tomu, být štastní v nedokonalém světě.“</span>
          <span className="text-right">Albert Peso</span>
        </div>
      </div>
      <div className="flex ml-auto lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
