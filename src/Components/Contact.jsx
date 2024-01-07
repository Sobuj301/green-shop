

const Contact = () => {
    return (

        <div>
            <h2 className="mt-10 text-3xl font-bold ">Contact Us: <span className="text-green-500">Green Shop</span> </h2>
            <p className="mb-5">
                Thank you for your interest in Urban Chic Apparel! If you have any questions, need assistance, or just want to say hello, we're here for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
                <div className="space-x-1 border p-5">

                    <h2 className="text-2xl">Visit Our Boutique:</h2>
                    <p>Urban Chic Apparel
                        123 Fashion Street,
                        Metropolis City, ZIP: 12345
                    </p>
                    <h2 className="text-2xl mt-5">Store Hours:</h2>
                    <p>
                        Monday to Saturday: 10:00 AM - 8:00 PM
                        Sunday: 12:00 PM - 6:00 PM</p>
                </div>
                <div className="col-span-1 border p-5">
                    <h2 className="text-2xl">Contact Information</h2>
                    <li>Customer Service: support@urbanchicapparel.com</li>
                    <li>Phone: (555) 123-4567</li>

                    <h2 className="text-2xl mt-3">Connect With Us:</h2>
                    <li> Facebook: @greenshop</li>
                    <li>Instagram: @greenshop</li>
                    <li>Twitter: @greenshop</li>
                </div>
            </div>
        </div>
    );
};

export default Contact;