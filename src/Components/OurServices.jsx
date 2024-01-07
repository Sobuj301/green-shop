import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const OurServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl font-medium text-center mt-10">Our Services</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                 {
                services?.map(service =><ServiceCard key={service.id} service={service}></ServiceCard>)
                 }
           </div>
        </div>
    );
};

export default OurServices;