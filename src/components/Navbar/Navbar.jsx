import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import NavBarIcon from './NavBarIcon'
import NavBarMenu from './NavBarMenu'
import NavBarSearch from './NavBarSearch'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-orange-100 bg-white/95">
      <nav
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <NavBarIcon />

        <button
          className="grid h-10 w-10 place-items-center rounded-full bg-orange-50 text-slate-800 transition hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 xl:hidden"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div
          className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col gap-4 xl:flex xl:w-auto xl:flex-1 xl:flex-row xl:items-center xl:justify-between xl:gap-8`}
        >
          <NavBarMenu onNavigate={() => setIsOpen(false)} />
          <NavBarSearch />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
