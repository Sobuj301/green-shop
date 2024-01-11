import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/Providers/AuthProvider";
import Swal from "sweetalert2";

const Edit = ({service}) => {
    console.log(service)
    const {serviceName,price,photo,name,email,description,area,_id} = service;
    const{user} = useContext(AuthContext)

    const handleUpdate =(e)=>{
        e.preventDefault()

        const form = e.target;
        const serviceName = form.serviceName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const price = form.price.value;
        const name = form.name.value;
        const area = form.area.value;
        const description = form.description.value;

        const updateService = {serviceName,photo,email,price,name,area,description}
        console.log(updateService)

        axios.patch(`http://localhost:5000/update/${_id}`,updateService)
        .then(res =>{
            console.log(res.data)
            if(res?.data?.modifiedCount>0){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Update Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="max-w-4xl mx-auto mt-3 p-5 border shadow-sm rounded-3xl">
            <h2 className="text-4xl font-black text-center">Update Service</h2>
            <form onSubmit={handleUpdate} className="card-body">
                <div className='flex gap-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" defaultValue={serviceName} name='serviceName' className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input type="url" defaultValue={photo} name='photo' className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={email} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" defaultValue={name} name='name' className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Area</span>
                        </label>
                        <input type="text" name='area' defaultValue={area} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price} name='price' className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' defaultValue={description} className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-outline btn-success btn-block" type="submit" value="Add Service" />

                </div>
            </form>
        </div>
    );
};

export default Edit;