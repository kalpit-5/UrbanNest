import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="logo.png" alt="" />
          <span>UrbanNest</span>
        </Link>

        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://i.redd.it/yall-think-jake-gyllenhaal-has-a-minox-beard-v0-vh84ebb0ghhc1.jpg?width=1080&format=pjpg&auto=webp&s=4b26e62b83f3ca8432d3d1fe6724b39da057a07e" alt=""/>
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/">Sign in</Link>
            <Link to="/" className="register">
              Sign Up
            </Link>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
          <Link to="/">Sign in</Link>
          <Link to="/">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
