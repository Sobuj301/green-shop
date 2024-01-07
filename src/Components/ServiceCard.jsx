

const ServiceCard = ({ service }) => {

    const { service_name, service_img, service_description, service_provider_img, service_provider_name, price } = service;
    return (
        <div>
            <div
                className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <img
                        src={service_img}
                        alt="ui/ux review check" />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                       {service_name}
                    </h4>
                    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                       {service_description}
                    </p>
                    <div className="flex justify-between  mt-5">
                    <p className="block font-medium text-base antialiased font-normal leading-relaxed text-inherit">
                        {service_provider_name}
                    </p>
                    <p className="text-base font-sans">Price:${price}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between px-5 pb-5">
                    <div className="flex items-center -space-x-3">
                        <img alt=""
                            src={service_provider_img}
                            className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                    </div>
                   
                    <button className="btn btn-active">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;