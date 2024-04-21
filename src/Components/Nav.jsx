import React from "react";
import logoo from '../Assets/logoo.avif'
import banner from "../Assets/banner.webp"
import Aragon from "../Assets/Aragon.webp"
import Button from '@mui/material/Button';
import boski from "../Assets/boski.webp"
import Iconic from "../Assets/Iconic.webp"
import aragoon from "../Assets/aragoon.webp"
import mustang from "../Assets/mustang.webp"
import boskii from "../Assets/boskii.webp"
import andazz from "../Assets/andazz.webp"
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { Cards } from "../Components/Cards"

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    try {
      navigate("/login");
    } catch (error) {
      // Handle navigation error (if any)
      console.error("Navigation error:", error);
    }
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <li class="nav-item active">
              <a class="nav-link" href="#">NEW ARRIVALS </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SUMMER COLLECTION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CONTACT</a>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={banner} className="img-fluid"></img>
          </div>
        </div>
        <div className="Aragon-section">
          <div className="row align-items-center">
            <div className="col-6">
              <img src={Aragon} className="img-fluid aragon-pic"></img>

            </div>
            <div className="col-6">
              <h2> 100% PURE EGYPTIAN COTTON</h2>
              <p>For the finest moments of your life, a fabric made with total loving care. Woven with 100/s yarns using extra-long staple cotton of Egyptian origin. When looking your best is the only option. You are thinking of somebody. Send a gift, we assure you of a lot of smiles in return</p>
              <Button variant="contained" onClick={handleClick} sx={{
                backgroundColor: 'black',
                padding: '15px 15px',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'grey',
                }
              }}>Shop Now</Button>

            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <h2> 100% PURE EGYPTIAN COTTON</h2>
            <p>For the finest moments of your life, a fabric made with total loving care. Woven with 100/s yarns using extra-long staple cotton of Egyptian origin. When looking your best is the only option. You are thinking of somebody. Send a gift, we assure you of a lot of smiles in return</p>
            <Button variant="contained" sx={{
              backgroundColor: 'black',
              padding: '15px 15px',
              color: 'white',
              '&:hover': {
                backgroundColor: 'grey',
              }
            }}>Shop Now</Button>
          </div>
          <div className="col-6">
            <img src={boski} className="img-fluid boski-pic"></img>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <img src={Iconic} className="img-fluid boski-pic"></img>

          </div>
          <div className="col-6">
            <h2> 100% PURE EGYPTIAN COTTON</h2>
            <p>For the finest moments of your life, a fabric made with total loving care. Woven with 100/s yarns using extra-long staple cotton of Egyptian origin. When looking your best is the only option. You are thinking of somebody. Send a gift, we assure you of a lot of smiles in return</p>
            <Button variant="contained" sx={{
              backgroundColor: 'black',
              padding: '15px 15px',
              color: 'white',
              '&:hover': {
                backgroundColor: 'grey',
              }
            }}>Shop Now</Button>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="d-flex justify-content-center">
          <h2>NEW ARRIVALS</h2>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 col-12 ">
            <img src={aragoon} className="img-fluid"></img>
            <div className=" d-flex align-items-center justify-content-center">
              <div>
                <h5>Aragon</h5>
                <h6>RS.10,500</h6>
              </div>
            </div>


          </div>
          <div className="col-lg-3 col-12 ">
            <img src={mustang} className="img-fluid"></img>
            <div className=" d-flex align-items-center justify-content-center">
              <div>
                <h5>Mustang</h5>
                <h6>RS.10,500</h6>
              </div>
            </div>

          </div>
          <div className="col-lg-3 col-12 ">
            <img src={boskii} className="img-fluid"></img>
            <div className=" d-flex align-items-center justify-content-center">
              <div>
                <h5>Boski</h5>
                <h6>RS.10,500</h6>
              </div>
            </div>

          </div>
          <div className="col-lg-3 col-12 ">
            <img src={andazz} className="img-fluid"></img>
            <div className=" d-flex align-items-center justify-content-center">
              <div>
                <h5>Andaz</h5>
                <h6>RS.10,500</h6>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid mt-4">
        <div className="row subscription">
          <div className="col-12  d-flex align-items-center justify-content-center">
            <div className="align-items-center subscription" >
              <h2>Subscribe to our newsletter</h2>
              <h5>Join our mailing list for the latest product info & more</h5>
              <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Email"
                variant="filled"
                sx={{ width: '400px' }}


              />
              <div>
                <Button variant="contained" sx={{
                  backgroundColor: 'black',
                  padding: '15px 80px',
                  color: 'white',
                  marginTop: '20px',
                  marginEnd: '20px',
                  '&:hover': {
                    backgroundColor: 'grey',
                  }

                }}>JOin</Button>
              </div>

            </div>

          </div>
        </div>

      </div>
      <div className="container-fluid footer-section">
        <div className="footer-section">
          <div class="row footer-row justify-content-between">
            <div class="col-12 col-lg-4">
              <h3>Head Office</h3>
              <hr className="custom-hr"></hr>
              <p>This is a big one and i consider it one of the most important things for a business.</p>
              <ul class="d-flex mt-3">
                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
              </ul>
            </div>
            <div class="col-7">
              <div class="row second-row">
                <div class="col-6 col-lg-4">
                  <h5>Quick Links</h5>
                  <hr className="custom-hr"></hr>
                  <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">NEW ARRIVALS</a></li>
                    <li><a href="#">SUMMER COLLECTION</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                  </ul>
                </div>
                <div class="col-6 col-lg-4">
                  <h5>Information</h5>
                  <hr className="custom-hr"></hr>
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                  </ul>
                </div>
                <div class="col-12 col-lg-4">
                  <h5>Contact with us</h5>
                  <hr className="custom-hr"></hr>
                  <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Condition</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="row">
        {Cards.map((card) => (
          <div key={card.id} className="col-lg-4">
            <img src={card.imgsrc} alt={`image ${card.id}`} />
            {console.log("image", card.imgsrc)}
          </div>
        ))}
      </div>



    </>



  );
}

export default Navbar;