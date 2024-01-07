
import { NavLink } from "react-router-dom";
import banner from "../assets/image/banner.jpg"

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-green-600">Your Imagination, Your Style</h1>
                    <p className="py-6">Welcome to <span className="text-green-500">Green Shop</span>, where style meets substance. Dive into a curated collection of fashion-forward threads that speak volumes.Unleash your individuality and redefine your wardrobe with each click. Elevate your style, embrace the extraordinary. Start your fashion journey with us!.</p>
                    <NavLink to='/services'><button className="btn btn-outline btn-accent">Show ALL Services</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;