import { NavLink } from 'react-router-dom';
import error from '../assets/image/error.jpg'
const ErrorPage = () => {
    return (
        <div className='max-w-3xl mx-auto mt-10'>
            <img src={error} alt="" />
            <NavLink to="/"><button className='btn btn-secondary mt-3'> go back home page</button></NavLink>
        </div>
    );
};

export default ErrorPage;