import { useContext } from "react";
import { AuthContext } from "../Components/Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {

    const {user}= useContext(AuthContext)


    const handleAddService = (e) =>{
        e.preventDefault()
       const form = e.target;
       const serviceName = form.serviceName.value || ''
       const photo = form.photo.value || ''
       const email = user?.email || '';
       const name = form.name.value ||'';
       const area = form.area.value || '';
       const price = form.price.value || '';
       const description = form.description.value || '';
       const addService = {serviceName,photo,email,name,area,price,description}
       
       console.log(addService)

       axios.post("http://localhost:5000/addService",addService)
       .then(res =>{
        console.log(res.data)
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Service added",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset()
       })
    }
    return (
        <div className="max-w-5xl mx-auto border mt-4 shadow-xl rounded-2xl">
            <h2 className="text-center text-black text-5xl p-5">Add Service</h2>
            <form  onSubmit={handleAddService} className="card-body">
                <div className='flex gap-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" placeholder="service name" name='serviceName' className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input type="url" placeholder="picture url" name='photo'  className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name='email' className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Area</span>
                        </label>
                        <input type="text" name='area' placeholder="area" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price " name='price' className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' placeholder="description" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-outline btn-success btn-block" type="submit" value="Add Service" />

                </div>
            </form>
        </div>
    );
};

export default AddService;