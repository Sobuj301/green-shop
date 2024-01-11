import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const AllServiceCard = ({ service }) => {
    const { _id, price, service_name, service_img, service_description, service_provider_img, service_provider_name
    } = service;
    
    return (

       <div>
             
             <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
            <div
                className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                <img
                    src={service_img}
                    alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
                <h6
                    className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    {service_name}
                </h6>
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {service_description}
                </h4>
                <p>
                        Price:${price}
                    </p>
                <div className="flex mt-5 gap-3">
                    <img alt=""
                        src={service_provider_img}
                        className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {service_provider_name}
                    </p>
                </div>
                <NavLink to={`/service/${_id}`}>
                      <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button">
                      View Details</button>
                </NavLink>
            </div>
        </div>
       </div>
    );
};

export default AllServiceCard;