import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <div className="min-vh-100">
      <div className="">
        <Carousel />
        <div className="bg-card">
          <Search />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
