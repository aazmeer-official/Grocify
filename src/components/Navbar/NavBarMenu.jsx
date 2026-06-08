import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
]

const linkClass = ({ isActive }) =>
  [
    'rounded-lg px-3 py-2 text-center text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 sm:text-base',
    isActive ? 'text-orange-500' : 'text-slate-800 hover:text-orange-500',
  ].join(' ')

const NavBarMenu = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-2 gap-2 xl:flex xl:flex-none xl:items-center xl:justify-center xl:gap-8">
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          end={link.to === '/'}
          className={linkClass}
          onClick={onNavigate}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  )
}

export default NavBarMenu
