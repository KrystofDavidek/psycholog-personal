'use client'

import { useState, useEffect, FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const CITATION = `„Jsme předurčeni k tomu být šťastní i v nedokonalém světě."`

const routes: Record<string, string> = {
  '': '',
  about: 'o-mně',
  first: 'první-setkání',
  practice: 'má-praxe',
  contact: 'kontakt',
}

const pathToName: Record<string, string> = {
  '/': 'Úvod',
  // Internal (destination) paths
  '/about': 'O mně',
  '/first': 'První setkání',
  '/practice': 'Má praxe',
  '/contact': 'Kontakt',
  // Czech (source) paths — usePathname() may return these with rewrites
  '/o-mně': 'O mně',
  '/o-mn%C4%9B': 'O mně',
  '/první-setkání': 'První setkání',
  '/prvn%C3%AD-setk%C3%A1n%C3%AD': 'První setkání',
  '/má-praxe': 'Má praxe',
  '/m%C3%A1-praxe': 'Má praxe',
  '/kontakt': 'Kontakt',
}

type RouteName = keyof typeof routes

const NavItem: FC<{
  isSide?: boolean
  activeItem: string
  name: string
  routeName: RouteName
}> = ({ isSide, activeItem, name, routeName }) => {
  const isActive = activeItem === name
  const href = `/${routes[routeName as string] || ''}`

  return (
    <Link
      href={href}
      className={`relative font-semibold transition-all duration-300 group ${
        isSide ? 'text-xl py-2 block' : 'text-base'
      } ${isActive ? (isSide ? 'text-gray-900' : 'text-primary-600') : isSide ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-primary-600'}`}>
      <span className="relative">
        {name}
        {!isSide && (
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
              isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        )}
      </span>
    </Link>
  )
}

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Derive active item from pathname
  const activeItem = pathToName[pathname] || 'Úvod'

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  // Handle scroll effect with threshold and hysteresis
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          if (scrollY > 50 && !scrolled) {
            setScrolled(true)
          } else if (scrollY <= 30 && scrolled) {
            setScrolled(false)
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  // Handle escape key and body overflow
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (isSideMenuOpen && event.key === 'Escape') setIsSideMenuOpen(false)
    }
    window.addEventListener('keydown', handleEsc)

    if (isSideMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isSideMenuOpen])

  // Close side menu on navigation
  useEffect(() => {
    setIsSideMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-safari shadow-md py-3' : 'bg-white py-4 md:py-6'
      }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Title */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            {/* Icon/Badge */}
            <div className="hidden sm:flex w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow duration-300">
              <span className="text-white font-bold text-xl">PD</span>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                PSYCHOLOG A TERAPEUT
              </span>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                Mgr. Petr Davídek
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <NavItem activeItem={activeItem} name="Úvod" routeName="" />
            <NavItem activeItem={activeItem} name="O mně" routeName="about" />
            <NavItem activeItem={activeItem} name="První setkání" routeName="first" />
            <NavItem activeItem={activeItem} name="Má praxe" routeName="practice" />
            <NavItem activeItem={activeItem} name="Kontakt" routeName="contact" />

            {/* CTA Button */}
            <Link href="/kontakt" className="btn btn-primary whitespace-nowrap text-sm xl:text-base px-4 xl:px-6 py-2 xl:py-3">
              Domluvit konzultaci
            </Link>
          </div>

          {/* Mobile CTA + Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link href="/kontakt" className="hidden sm:inline-flex btn btn-primary text-sm px-4 py-2 whitespace-nowrap">
              Kontakt
            </Link>

            <HamburgerIcon isOpen={isSideMenuOpen} handleClick={toggleSideMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      {isSideMenuOpen && <SideMenu activeItem={activeItem} toggleSideMenu={toggleSideMenu} />}
    </nav>
  )
}

const SideMenu: FC<{ activeItem: string; toggleSideMenu: () => void }> = ({
  activeItem,
  toggleSideMenu,
}) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in lg:hidden"
        onClick={toggleSideMenu}
        aria-label="Close menu"
      />

      {/* Side Panel */}
      <div className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-50 animate-slide-in-right lg:hidden overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-heading font-bold text-gray-900">Menu</h3>
            <button
              onClick={toggleSideMenu}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Close menu">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col space-y-2 p-6">
            <NavItem isSide activeItem={activeItem} name="Úvod" routeName="" />
            <NavItem isSide activeItem={activeItem} name="O mně" routeName="about" />
            <NavItem isSide activeItem={activeItem} name="První setkání" routeName="first" />
            <NavItem isSide activeItem={activeItem} name="Má praxe" routeName="practice" />
            <NavItem isSide activeItem={activeItem} name="Kontakt" routeName="contact" />
          </div>

          {/* CTA Button */}
          <div className="px-6 pb-6">
            <Link href="/kontakt" className="btn btn-primary w-full text-base">
              Domluvit konzultaci
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-auto p-6 bg-gradient-to-br from-primary-50 to-white border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Kontaktní údaje</h4>
            <div className="space-y-2">
              <a
                href="tel:734574243"
                className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                734 574 243
              </a>
              <a
                href="mailto:davidek.email@gmail.com"
                className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                davidek.email@gmail.com
              </a>
            </div>

            {/* Quote */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-primary-700 italic">{CITATION}</p>
              <p className="pt-2 text-xs text-primary-700 font-semibold not-italic">— Albert Peso</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

type HamburgerIconProps = {
  isOpen: boolean
  handleClick: () => void
}

const HamburgerIcon = ({ isOpen, handleClick }: HamburgerIconProps) => {
  const genericHamburgerLine = `h-0.5 w-6 my-1 bg-gray-700 transition-all duration-300 ease-in-out`
  return (
    <button
      className="flex flex-col items-center justify-center w-12 h-12 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
      onClick={handleClick}
      aria-label="Toggle menu">
      <div className={`${genericHamburgerLine} ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : ''}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
    </button>
  )
}
