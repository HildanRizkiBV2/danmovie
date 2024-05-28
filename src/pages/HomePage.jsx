import Cards from "../components/Cards";
import Carousel from "../components/Carousel";

const HomePage = () => {
  return (
    <div className="min-vh-100">
      <div className="">
        <Carousel />
        <div className="bg-card">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
