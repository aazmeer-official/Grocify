import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
]

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 font-semibold transition ${
    isActive ? 'text-orange-600' : 'text-slate-800 hover:text-orange-600'
  }`

const EasyMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-orange-100 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3"
        aria-label="Main menu"
      >
        <Link to="/" className="text-3xl font-extrabold text-slate-950">
          Gr<span className="text-4xl text-orange-600">O</span>cify
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <form className="relative hidden md:block" role="search">
          <label className="sr-only" htmlFor="easy-menu-search">
            Search products
          </label>
          <input
            id="easy-menu-search"
            type="search"
            placeholder="Search..."
            className="h-11 w-64 rounded-full border-2 border-orange-200 bg-white px-4 pr-11 outline-none transition focus:border-orange-500"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-orange-500 text-white"
            aria-label="Search products"
          >
            <SearchIcon fontSize="small" />
          </button>
        </form>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full bg-orange-50 text-slate-900 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="easy-mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        id="easy-mobile-menu"
        className={`${open ? 'grid' : 'hidden'} gap-2 border-t border-orange-100 bg-white px-4 py-3 md:hidden`}
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}

export default EasyMenu
