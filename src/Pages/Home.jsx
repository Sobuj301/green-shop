import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Founder from "../Components/Founder";
import Member from "../Components/Member";
import OurServices from "../Components/OurServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-5xl mx-auto">
               <OurServices></OurServices>
               <Member></Member>
               <About></About>
               <Contact></Contact>
               <Founder></Founder>
            </div>
          
        </div>
    );
};

export default Home;