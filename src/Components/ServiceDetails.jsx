
import { NavLink, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    console.log(service)
    const { _id, service_name, service_img, service_description, service_provider_img, service_provider_name, price } = service;

    return (
        <div
            className="relative flex max-w-3xl flex-col mx-auto mt-5 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img
                    src={service_img}
                    alt="ui/ux review check" />
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {service_name}
                </h4>
                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                    {service_description}
                </p>
            </div>
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center -space-x-3">
                    <img alt="natali craig"
                        src={service_provider_img}
                        className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10 mr-8" />
                    <p>{service_provider_name}</p>
                </div>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    Price:${price}
                </p>
            </div>
            <NavLink to={`/book/${_id}`}><button className="btn btn-outline btn-success btn-block mb-3">Book Now </button></NavLink>
        </div>
    );
};

export default ServiceDetails;