import React from 'react'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AddCardIcon from '@mui/icons-material/AddCard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
const VerticalMenu = () => {
        const styling = {
            color:"orange",
            fontSize:"30px",
            marginTop:"-5px",
            marginRight:"10px"
        }
  return (
    <div className='leftSide text-xl flex flex-col gap-2 font-extrabold'>
        <Link to="/user/panel" className='ml-5 text-orange-400 mt-5  mr-5 p-3 rounded-xl bg-orange-100 cursor-pointer'><DashboardIcon sx={styling}/>Dashboard</Link>
        <Link className='ml-5 text-orange-400 mt-5  mr-5 p-3 rounded-xl hover:bg-orange-100 cursor-pointer'><ShoppingCartIcon  sx={styling}/>My Orders</Link>
        <Link className='ml-5 text-orange-400 mt-5  mr-5 p-3 rounded-xl hover:bg-orange-100 cursor-pointer'><FavoriteIcon  sx={styling}/>Favourites </Link>
        <Link className='ml-5 text-orange-400 mt-5  mr-5 p-3 rounded-xl hover:bg-orange-100 cursor-pointer'> <LocationPinIcon sx={styling} />Payments</Link>
        <Link className='ml-5 text-orange-400 mt-5  mr-5 p-3 rounded-xl hover:bg-orange-100 cursor-pointer'> <AddCardIcon  sx={styling}/>Cart</Link>
        <Link to="notifications" className='ml-5 text-orange-400 mt-5  mr-5 p-3 rounded-xl hover:bg-orange-100 cursor-pointer'> <NotificationsIcon  sx={styling}/>Notification</Link>
        <Link to="/logout" className='ml-5 text-orange-400 mt-5  mr-5 p-3 rounded-xl hover:bg-orange-100 cursor-pointer'><LogoutIcon  sx={styling}/>LogOut</Link>
    </div>
  )
}

export default VerticalMenu