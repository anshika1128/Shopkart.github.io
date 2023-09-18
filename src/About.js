import HeroSection from "./componenets/HeroSection";
import { useProductContext } from "./context/productcontex"

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "ShopCart",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;