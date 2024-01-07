import Banner from "../Components/Banner";
import Member from "../Components/Member";
import OurServices from "../Components/OurServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-5xl mx-auto">
               <OurServices></OurServices>
               <Member></Member>
            </div>
          
        </div>
    );
};

export default Home;