import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Providers/AuthProvider";
import Edit from "./Edit";


const Update = () => {
    const [services,setServices] = useState([])
    const {user} = useContext(AuthContext)
    console.log(services)

    useEffect(()=>{
        axios(`http://localhost:5000/allServices?email=${user?.email}`)
        .then(res =>{
            setServices(res.data)
        })
    },[])
    
    return (
        <div>
            {
                services?.map(service =><Edit
                    key={service._id}
                    service={service}
                    ></Edit>)
            }
        </div>
    );
};

export default Update;