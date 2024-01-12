import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllServiceCard from "../Components/AllServiceCard";
import { useState } from "react";


const Services = () => {

    // const [price,setPrice] = useState()
    const [serviceName,setServiceName]= useState()

    console.log(serviceName)
    const servicesName = [
        "City Threads Boutique",
        "Vintage Vogue Emporium",
        "Local Luxe Boutique",
        "Quaint Couture Corner",
        "Eclectic Elegance Haven",
        "Modern Minimalist Attire"
      ]
      
    const getServices = async () => {
        const res = await axios.get(`http://localhost:5000/services?service_name=${serviceName}`);
        return res
    }
 

    const { data, isLoading, isError, error} = useQuery({
        queryKey: ['service',serviceName],
        queryFn: getServices
    })


    if (isLoading) {
        return <p className="text-center">loading..........</p>
    }

    if (isError) {
        return <p className="text-center">Something is wrong :{error}</p>
    }
    return (
          <div>
          <div>
              <select  
              className=" input input-bordered w-1/2 mt-5" name="" id=""
              onChange={(e) =>setServiceName(e.target.value)}
              >
                <option value="one choice">one choice</option>
                {
                    servicesName?.map(name =><option key={name} value={name}>{name}</option>)
                }
              </select>
           </div>
          
            <div className="mt-10 space-y-5 grid justify-center">
                {
                    data?.data?.map(service => <AllServiceCard key={service._id} service={service}></AllServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;