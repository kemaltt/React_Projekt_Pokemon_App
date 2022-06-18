import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../images/image 2.png";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <Link className="nav_link" to="/">
            <h4>Home</h4>
          </Link>
        </li>
        <li>
          <Link className="nav_link" to="/type">
            <h4>Type</h4>
          </Link>
        </li>
      </ul>
    </div>

    // <>
    //   <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    //     <div class="container-fluid ">
    //       <img src={logo} alt="logo" />
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav_link active " aria-current="page" to="/">
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav_link" to="/type">
    //               Type
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
}
