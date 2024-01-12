
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='grid grid-cols-12'>
                <div className='col-span-3  h-screen   text-center '>
                    <details className="dropdown mt-5">
                        <summary className="m-1 btn">Dashboard</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 space-y-4">
                            
                            <li><NavLink to="/dashboard/addService">Add-Product</NavLink></li>
                            <li><NavLink to="/dashboard/manageService">Manage-Service</NavLink></li>
                            <li><NavLink to="/dashboard/schedule">My Schedules</NavLink></li>

                        </ul>
                    </details>
                </div>
                <div className='col-span-9'>
                     <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;