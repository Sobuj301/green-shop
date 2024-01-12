import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Providers/AuthProvider";
import axios from "axios";
import Booking from "./Booking";
import Swal from "sweetalert2";

const Schedule = () => {
    const {user} = useContext(AuthContext)
    const [bookings,setBookings] = useState([]) 

    console.log(bookings)


   useEffect(()=>{
        axios.get(`http://localhost:5000/bookings?userEmail=${user?.email}`)
        .then(res =>{
            setBookings(res.data)
        })
   },[])


   if(!bookings){
     Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have not any booking!",
       
      });
   }
    return (
        <div>
             <h2 className='text-5xl font-bold m-3 '>My booking:</h2> 
            <div className="space-y-5">
                {
                    bookings?.map(booking =><Booking key={booking._id} booking={booking}></Booking>)
                }
            </div>
            <div className="mt-10">
                <h2 className="text-5xl font-bold">My Pending Work :</h2>
            </div>
        </div>
    );
};

export default Schedule;