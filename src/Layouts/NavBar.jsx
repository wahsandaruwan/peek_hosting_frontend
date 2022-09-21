import { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import MobileMenu from './MobileMenu'

const NavBar = () => {
  // Navbar state
  const [navState, setNavState] = useState(false)

  //   Toggle mobie menu
  const toggleMobileMenu = () => setNavState(!navState)
  return (
    <>
      <div className="fixed w-screen z-10 bg-blue-200 p-5">
        <div className="w-full h-full px-[20px] flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-lg p-4 pr-2 bg-white text-zinc-700 font-bold rounded sm:text-2xl">
              PeeK
              <span className="p-3 bg-zinc-700 text-white ml-3 rounded">
                hOstiNg
              </span>
            </h1>
            <ul className="hidden lg:flex mx-10">
              <li>Home</li>
              <li>About</li>
              <li>Hosting</li>
              <li>Domain</li>
              <li>SSL</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <button className="mr-3">Login</button>
            <button>Register</button>
          </div>
          <div className="lg:hidden" onClick={toggleMobileMenu}>
            {!navState ? (
              <MenuIcon className="w-8 cursor-pointer" />
            ) : (
              <XIcon className="w-8 cursor-pointer" />
            )}
          </div>
        </div>
        {navState && <MobileMenu />}
      </div>
    </>
  )
}
export default NavBar
