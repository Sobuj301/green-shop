import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const MyService = ({ service,handleDelete }) => {
    console.log(service)
    const {serviceName,photo,price,description,_id}= service;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-80" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{description}</p>
                    <p>Price:${price}</p>
                    <div className="card-actions  justify-end gap-5">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                       <NavLink to={`/dashboard/update/${_id}`}><button className="btn btn-primary">Edit</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;