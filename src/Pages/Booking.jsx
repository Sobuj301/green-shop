

const Booking = ({ booking }) => {

    const {date,instruction,photo,price,providerName,serviceName,userEmail} = booking

    return (
        <div>
            <div className="card  card-side bg-base-100 shadow-xl">
                <figure><img className="h-60 w-96" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{instruction}</p>
                    <p>{providerName}</p>
                    <div className="flex gap-5">
                      <h2>Price:${price}</h2>
                      <h2>Date:{date}</h2>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Booking;