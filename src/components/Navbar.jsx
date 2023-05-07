import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();
  const getdata = () => {
    const saved = localStorage.getItem("user");
    setToken(saved);
  };
  useEffect(() => {
    getdata();
  }, []);
  const logout =()=>{
    localStorage.removeItem('user');
    window.location.reload();
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <nav>
        <h1>HEALTHIFY YOU</h1>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onClick="hideMenu()"></i>
          <ul>
            <li>
              <Link to="/">HOME</Link>{" "}
            </li>
            <li>
              <Link to="prediction">PREDICTION</Link>
            </li>

            <li>
              <Link to="contact">CONTACT US</Link>
            </li>
            {!token ? (
              <>
              <li>
                <Link to="login">Login </Link>
              </li>
              <li>
                <Link to="signup">SIGN UP</Link>
              </li>
            </>
            ) : (
              <>
                <li>
                  <Link to="profile">Profile </Link>
                </li>
                <li>
                  <Link to="login" onClick={logout} >Log Out</Link>
                </li>
              </>
              
            )}
          </ul>
        </div>
        <i className="fa fa-bars" onClick="showMenu()"></i>
      </nav>
    </div>
  );
};

export default Navbar;
