import React from "react";
import logoo from '../Assets/logoo.avif'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
        <div className="upper-text">
                <h5>FREE DELIVERY NATIONWIDE</h5>
        </div>
         <nav class="navbar navbar-expand-lg navbar-light  bg-white  sticky-top">
        <a class="navbar-brand" href="#"><img src={logoo} className="logo"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                COLLECTIONS
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item ">
            <Link className="nav-link" to="/newarrivals">NEW ARRIVALS</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/summercollection">SUMMER COLLECTION</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/aboutus">ABOUT</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/contactus">CONTACT</Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0  ">
            <div className="d-flex align-items-center justify-content center">
              <h6>MY CART</h6>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>



          </form>
        </div>
      </nav>
        </>
      );
}
 
export default Navbar;