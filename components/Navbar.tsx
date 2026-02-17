import { useState, useEffect, FC } from "react";
import { useRouter } from "next/dist/client/router";
import { useRouter as useNextRouter } from "next/router";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimension";
import { CITATION } from "../pages/_app";

const routes = {
  "": "",
  about: "o-mně",
  first: "první-setkání",
  practice: "má-praxe",
  contact: "kontakt",
};

type Routes = keyof typeof routes;

const NavItem: FC<{ isSide?: boolean; activeItem: string; setActiveItem: Function; name: string; routeName: Routes }> = ({
  isSide,
  activeItem,
  name,
  routeName,
  setActiveItem,
}) => {
  const isActive = activeItem === name;

  return (
    <Link href={`/${routeName}`} as={`/${routes[routeName]}`}>
      <a
        onClick={() => setActiveItem(name)}
        className={`relative font-semibold transition-all duration-300 group ${
          isSide ? "text-xl py-2 block" : "text-base"
        } ${isActive ? (isSide ? "text-gray-900" : "text-primary-600") : isSide ? "text-gray-700 hover:text-gray-900" : "text-gray-700 hover:text-primary-600"}`}>
        <span className="relative">
          {name}
          {!isSide && (
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          )}
        </span>
      </a>
    </Link>
  );
};

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  const [activeItem, setActiveItem] = useState<string>("Úvod");
  const { pathname } = useRouter();
  const router = useNextRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (isSideMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSideMenuOpen]);

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, [activeItem]);

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, [width]);

  useEffect(() => {
    if (router.asPath === "/o-mn%C4%9B") {
      setActiveItem("O mně");
      return;
    }
    if (router.asPath === "/prvn%C3%AD-setk%C3%A1n%C3%AD") {
      setActiveItem("První setkání");
      return;
    }
    if (router.asPath === "/m%C3%A1-praxe") {
      setActiveItem("Má praxe");
      return;
    }
    if (router.asPath === "/kontakt") {
      setActiveItem("Kontakt");
      return;
    }
  }, [router.asPath]);

  useEffect(() => {
    if (pathname === "/") setActiveItem("Úvod");
    if (pathname === "/o-mně") setActiveItem("O mně");
    if (pathname === "/první-setkání") setActiveItem("První setkání");
    if (pathname === "/má-praxe") setActiveItem("Má praxe");
    if (pathname === "/kontakt") setActiveItem("Kontakt");
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-safari shadow-md py-4" : "bg-white py-6"
      }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <Link href="/">
            <a className="flex flex-col justify-center group">
              <h1 className="text-lg md:text-2xl lg:text-3xl font-heading font-bold text-primary-600 transition-colors duration-300 group-hover:text-primary-700">
                PSYCHOLOG A TERAPEUT, BRNO
              </h1>
              <h2 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-700">Mgr. Petr Davídek</h2>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Úvod" routeName="" />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="O mně" routeName="about" />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="První setkání" routeName="first" />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Má praxe" routeName="practice" />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Kontakt" routeName="contact" />
          </div>

          {/* Quote - Desktop only */}
          {width && width >= 1536 && (
            <div className="hidden 2xl:flex flex-col max-w-xs text-primary-700 italic text-sm">
              <span className="text-right">{CITATION}</span>
              <span className="pt-2 text-right font-semibold not-italic">— Albert Peso</span>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <HamburgerIcon isOpen={isSideMenuOpen} handleClick={toggleSideMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      {isSideMenuOpen && <SideMenu activeItem={activeItem} setActiveItem={setActiveItem} />}
    </nav>
  );
};

const SideMenu: FC<{ activeItem: string; setActiveItem: Function }> = ({ activeItem, setActiveItem }) => {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in lg:hidden" />

      {/* Side Panel */}
      <div className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-50 animate-slide-in-right lg:hidden">
        <div className="flex flex-col h-full p-8">
          <div className="flex flex-col space-y-6 mt-20">
            <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Úvod" routeName="" />
            <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="O mně" routeName="about" />
            <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="První setkání" routeName="first" />
            <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Má praxe" routeName="practice" />
            <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Kontakt" routeName="contact" />
          </div>

          {/* Quote in mobile menu */}
          <div className="mt-auto mb-8 text-primary-700 italic text-sm border-t border-gray-200 pt-6">
            <p className="text-right">{CITATION}</p>
            <p className="pt-2 text-right font-semibold not-italic">— Albert Peso</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

type HamburgerIconProps = {
  isOpen: boolean;
  handleClick: () => void;
};

const HamburgerIcon = ({ isOpen, handleClick }: HamburgerIconProps) => {
  const genericHamburgerLine = `h-0.5 w-6 my-1 bg-gray-700 transition-all duration-300 ease-in-out`;
  return (
    <button
      className="flex flex-col items-center justify-center w-12 h-12 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
      onClick={handleClick}
      aria-label="Toggle menu">
      <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  );
};
