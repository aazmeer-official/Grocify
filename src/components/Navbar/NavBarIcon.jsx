import { Link } from 'react-router-dom'

const NavBarIcon = () => {
  return (
    <div className="shrink-0">
      <Link
        to="/"
        className="inline-flex items-center text-3xl font-extrabold leading-none text-slate-950 no-underline sm:text-4xl"
        aria-label="Grocify home"
      >
        Gro<span className="text-[1.2em] leading-none text-orange-500">C</span>ify
      </Link>
    </div>
  )
}

export default NavBarIcon
