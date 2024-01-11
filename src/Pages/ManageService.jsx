import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Providers/AuthProvider";
import MyService from "./MyService";
import Swal from "sweetalert2";



const ManageService = () => {
    const [manageServices,setManageServices] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        axios.get(`http://localhost:5000/allServices?email=${user?.email}`)
        .then(res => {
            setManageServices(res.data)
        })
    },[])


    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this service",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {


            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/allServices/${id}`)
            .then(res =>{
                console.log(res.data)
                if(res?.data?.deletedCount > 0){
                    
                      const remaining = manageServices?.filter(service => service._id !== id);
                      setManageServices(remaining)
                }
            }) 
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success"
              });
            }
          });


         
        
    }
    return (
        <div className="max-w-3xl mx-auto mt-5 space-y-3">
            {
                manageServices?.map(service => <MyService 
                    key={service._id} 
                    service={service}
                    handleDelete={handleDelete}
                    ></MyService>)
            }
        </div>
    );
};

export default ManageService;