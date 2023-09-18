import FeatureProduct from "./componenets/FeatureProduct";
import HeroSection from "./componenets/HeroSection";
import Services from "./componenets/Services";
import Trusted from "./componenets/Trusted";

const Home = () => {

    const data = {
        name : "ShopCart",
    };
    return (
  <> 
    <HeroSection myData={data} />
    <FeatureProduct />
    <Services />
    <Trusted />
    </>
    );
};


export default Home;