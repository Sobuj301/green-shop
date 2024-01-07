

const About = () => {
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-10 mb-5">About our <span className="text-green-500">Green Shop</span></h2>
            <p className="mb-8">Established in 1985, Threads of Elegance Boutique has been a beacon of style and sophistication in the heart of our vibrant community. Founded by visionary fashion enthusiast, Isabella Reynolds, the boutique emerged from a dream to bring exquisite fashion closer to home.</p>

            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-1 border p-3">
                    <h3 className="text-xl mb-1 ">Beginning:</h3>
                    <p>Isabella, having traveled extensively and fallen in love with diverse global fashion, envisioned a local space where individuals could experience the allure of international styles without leaving town. Threads of Elegance was born as a haven for those seeking distinctive, handpicked fashion pieces.</p>

                </div>
                <div className="col-span-1 border p-3">
                    <h3 className="text-xl mb-1">Decades of Style:</h3>
                    <p>Over the decades, Threads of Elegance has evolved into a fashion destination synonymous with timeless elegance and personalized service. Our boutique has been a witness to the changing tides of fashion, adapting to trends while maintaining a commitment to enduring style</p>
                </div>
                <div className="col-span-1 border p-3">
                     <h3 className="text-xl mb-1">Curated Collections:</h3>
                     <p>Our journey is marked by a dedication to curating collections that tell a story. Each garment at Threads of Elegance has been selected for its unique craftsmanship, quality fabrics, and a touch of artistic flair. From classic couture to contemporary chic, our collections transcend trends.</p>
                </div>
                <div className="col-span-1 border p-3">
                    <h3 className="text-xl mb-1">Personalized Service:</h3>
                    What sets Threads of Elegance apart is our unwavering commitment to personalized service. Our team of seasoned fashion consultants takes pride in understanding the distinct preferences of each customer, ensuring a tailored shopping experience that goes beyond the transaction.
                </div>
                <div className="col-span-1 border p-3">
                     <h3 className="text-xl mb-1">A Community Icon:</h3>
                     <p>Threads of Elegance has grown to become an integral part of our community's fabric. We've been honored to dress generations of families, celebrating life's milestones and special moments together. The boutique has been a backdrop for local events, fashion shows, and charitable initiatives that enrich the lives of those around us</p>
                </div>
                <div className="col-span-1 border p-3">
                    <h3 className="text-xl mb-1">Future Threads:</h3>
                    <p>As we step into the future, Threads of Elegance remains dedicated to preserving the timeless elegance that defines our brand. We look forward to continuing our legacy of style, forging new connections, and dressing the next generation with the same passion and dedication that Isabella instilled in us.</p>
                </div>
            </div>
        </div>
    );
};

export default About;