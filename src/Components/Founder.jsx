import founder from "../assets/image/sobuj.jpg"

const Founder = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mt-10">Founder of <span className="text-green-500">Green Shop</span></h2>
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
  <div
    className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={founder}
      alt="card-image" className="object-cover w-full h-full" />
  </div>
  <div className="p-6">
    <h6
      className="block mb-4 font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      Riyan Islam Sobuj
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     Merchandiser of Emaz Fahion Ware Limited 
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
    A merchandiser is a strategic professional responsible for planning, procuring, and managing the inventory of products to meet consumer demand. Their role involves analyzing market trends, collaborating with suppliers, and optimizing product displays to maximize sales. Merchandisers play a crucial role in ensuring that the right products are available at the right time and in the right quantities, contributing to the overall success of retail businesses
    </p>
    <a href="#" className="inline-block"><button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
</div>  
        </div>
    );
};

export default Founder;