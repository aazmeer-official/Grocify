import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'

const NavBarSearch = () => {
  return (
    <div className="flex w-full flex-wrap items-center gap-3 xl:w-auto xl:min-w-[25rem] xl:justify-end">
      <div className="relative min-w-0 flex-1 basis-full sm:basis-64 xl:basis-72">
        <label className="sr-only" htmlFor="search">
          Search groceries
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="min-h-11 w-full rounded-full border-2 border-slate-300 bg-white py-2 pl-4 pr-12 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15"
          placeholder="Search..."
        />
        <button
          className="absolute right-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-orange-500 text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          type="button"
          aria-label="Search products"
        >
          <SearchIcon fontSize="small" />
        </button>
      </div>

      <button
        className="grid h-11 w-11 place-items-center rounded-full bg-orange-50 text-slate-800 transition hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        type="button"
        aria-label="View shopping cart"
      >
        <ShoppingCartIcon fontSize="small" />
      </button>

      <button
        className="grid h-11 w-11 place-items-center rounded-full bg-orange-50 text-slate-800 transition hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        type="button"
        aria-label="Open profile"
      >
        <PersonIcon fontSize="small" />
      </button>
    </div>
  )
}

export default NavBarSearch
