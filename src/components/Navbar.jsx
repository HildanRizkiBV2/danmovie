import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Dan Movies</h1>
      </div>
      <div className="menu">
        <Link className="active">Home</Link>
        <Link>Popular</Link>
        <Link to="/search">Search</Link>
      </div>
      <div className="profil">
        <img
          src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
          alt=""
        />
        <p>Login</p>
      </div>
    </div>
  );
};

export default Navbar;
