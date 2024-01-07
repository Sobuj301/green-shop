import { NavLink } from 'react-router-dom';
import logo from '../assets/image/green.jpg'
import { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user, logOut)


    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/services'>Services</NavLink>
        {
            user?.email ? <>
                <button onClick={logOut}>Logout</button>
                <details className="dropdown">
                    <summary>Dashboard</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 gap-5">
                       <NavLink to='/myServices'>My-services</NavLink>
                       <NavLink to='/addServices'>Add-services</NavLink>
                       <NavLink to='/mySchedules'>My-schedules</NavLink>
                    </ul>
                </details>
            </>
                :
                <NavLink to='/login'>Login</NavLink>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                            {links}
                        </ul>
                    </div>
                    <img className='w-24' src={logo} alt="" />
                    <NavLink className=" text-3xl font-bold" to="/">
                        Green shop
                    </NavLink>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {links}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;