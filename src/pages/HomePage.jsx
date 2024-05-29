import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Footer from "../components/Footer.jsx";
const HomePage = () => {
  return (
    <div className="min-vh-100">
      <div className="header">
        <Navbar />
        <div className="landing">
          <h1>LA LA LAND</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            error eum eligendi, quo vero alias recusandae reiciendis quasi
            asperiores dicta totam doloribus at facilis minima.
          </p>
          <Link>Watch</Link>
        </div>
      </div>
      <div className="content-page">
        <Cards />
        <Cards />
      </div>
      <div className="onrelease">
        <div className="card-realse">
          <div className="text-onrelease">
            <h1>Vina: Sebelum 7 Hari</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              accusantium.
            </p>
            <Link>Watch</Link>
          </div>
        </div>
      </div>
      <div>
        <Cards />
        <Cards />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
