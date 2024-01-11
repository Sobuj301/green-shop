import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Components/Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const BookNow = () => {
    const previousService = useLoaderData()
    const {user} = useContext(AuthContext)
    console.log(user)
    
    const { _id, service_name, service_img, service_description, service_provider_img, service_provider_name, price } = previousService
    
    const handleAddBookingService = (e) =>{
        e.preventDefault()
        const form = e.target || ''
        const serviceName = form.serviceName.value || ''
        const photo = form.photo.value || ''
        const userEmail = user?.email;
        const providerName =form.providerName.value || ''
        const date = form.date.value || ''
        const instruction = form.instruction.value || ''
        const price = form.price.value || ''
        const booking = {serviceName,photo,providerName,date,instruction,price,userEmail} 
        
        axios.post('http://localhost:5000/bookings',booking)
        .then(res =>{
            console.log(res.data)
            if(res?.data){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Booking Done",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  form.reset()
            }
        })
    }
     
    return (
        <div>
            <form onSubmit={handleAddBookingService} className="card-body">
                <div className='flex gap-5'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" defaultValue={service_name} name='serviceName' className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Service Image</span>
                    </label>
                    <input type="url"  name='photo'defaultValue={service_img} className="input input-bordered w-full" required />
                </div>
                </div>
                <div className='flex gap-5'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">User email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name='email' className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Service Provider Name</span>
                    </label>
                    <input type="text" defaultValue={service_provider_name} name='providerName' className="input input-bordered w-full" required />
                </div>
                </div>
                <div className='flex gap-5'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date"  name='date' className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Instruction </span>
                    </label>
                    <input type="text" placeholder="instruction " name='instruction' className="input input-bordered w-full" required />
                </div>
                </div>
                <div className='flex gap-5'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text"  name='price'defaultValue={price} className="input input-bordered w-full" required/>
                </div>
                </div>
                <div className="form-control mt-6">
                    
                    <input  className="btn btn-outline btn-success btn-block"  type="submit" value="Booking Now" />
                   
                </div>
            </form>
        </div>
    );
};

export default BookNow;