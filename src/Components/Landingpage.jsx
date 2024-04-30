import React from "react";

import { useState } from "react";
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
import { Cards } from "./Cards"



const Landingpage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    try {
      navigate("/addcart");
    } catch (error) {
      // Handle navigation error (if any)
      console.error("Navigation error:", error);
    }
  }



  return (
    <>
 

      <div className="container-fluid">
      <div className="row">
          <div className="col-sm-12 col-lg-12 banner-img ">
            {/* <img src={banner} className="img-fluid"></img> */}
          </div>
        </div>
        
        <div className="Aragon-section">
          <div className="row align-items-center ">
            <div className="col-sm-12 col-lg-6 pe-lg-0">
              <img src={Aragon} className="img-fluid aragon-pic"></img>

            </div>
            <div className="col-sm-12 col-lg-6 mt-5 mt-lg-0 text-center text-lg-start ">
              <div className="text-lg-start">
                <h2 > 100% PURE EGYPTIAN COTTON</h2>
                <p >For the finest moments of your life, a fabric made with total loving care. Woven with 100/s yarns using extra-long staple cotton of Egyptian origin. When looking your best is the only option. You are thinking of somebody. Send a gift, we assure you of a lot of smiles in return</p>
                <Button variant="contained" onClick={handleClick} sx={{
                  backgroundColor: 'black',
                  padding: '15px 15px',
                  color: 'white',
                  borderRadius: 0,
                  mb: 3,
                  '&:hover': {
                    backgroundColor: 'grey',
                  }
                }}>Shop Now</Button>

              </div>


            </div>
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col-sm-12  col-lg-6 ps-lg-0 order-lg-last">
            <img src={boski} className="img-fluid boski-pic"></img>
          </div>
          <div className="col-sm-12 order-lg-first col-lg-6 text-center text-lg-start ">
            <div className="text-lg-start">
              <h2> 100% PURE EGYPTIAN COTTON</h2>
              <p>For the finest moments of your life, a fabric made with total loving care. Woven with 100/s yarns using extra-long staple cotton of Egyptian origin. When looking your best is the only option. You are thinking of somebody. Send a gift, we assure you of a lot of smiles in return</p>
              <Button variant="contained" sx={{
                backgroundColor: 'black',
                padding: '15px 15px',
                color: 'white',
                borderRadius: 0,
                mb: 3,
                '&:hover': {
                  backgroundColor: 'grey',
                }
              }}>Shop Now</Button>

            </div>

          </div>

        </div>
        <div className="row align-items-center">
          <div className="col-sm-12 col-lg-6 pe-lg-0">
            <img src={Iconic} className="img-fluid boski-pic"></img>

          </div>
          <div className="col-sm-12 col-lg-6 text-center text-lg-start">
            <div className="text-lg-start">
              <h2> 100% PURE EGYPTIAN COTTON</h2>
              <p>For the finest moments of your life, a fabric made with total loving care. Woven with 100/s yarns using extra-long staple cotton of Egyptian origin. When looking your best is the only option. You are thinking of somebody. Send a gift, we assure you of a lot of smiles in return</p>
              <Button variant="contained" sx={{
                backgroundColor: 'black',
                padding: '15px 15px',
                color: 'white',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'grey',
                }
              }}>Shop Now</Button>

            </div>

          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="d-flex justify-content-center">
          <h2>NEW ARRIVALS</h2>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 col-lg-3 mt-5 mt-lg-0 ">
            <div className="card">
              <div className="image-zoom">
                <img src={aragoon} className="img-fluid"></img>

              </div>
              <div className=" d-flex align-items-center justify-content-center">
                <div>
                  <h5>Aragon</h5>
                  <h6>RS.10,500</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-5 mt-lg-0 ">
            <div className="card">
              <div className="image-zoom">
                <img src={mustang} className="img-fluid"></img>

              </div>
              <div className=" d-flex align-items-center justify-content-center">
                <div>
                  <h5>Mustang</h5>
                  <h6>RS.10,500</h6>
                </div>
              </div>
            </div>


          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-5 mt-lg-0 ">
            <div className="card">
              <div className="image-zoom">
                <img src={boskii} className="img-fluid"></img>

              </div>
              <div className=" d-flex align-items-center justify-content-center">
                <div>
                  <h5>Boski</h5>
                  <h6>RS.10,500</h6>
                </div>
              </div>
            </div>


          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-5 mt-lg-0 ">
            <div className="card">
              <div className="image-zoom">
                <img src={andazz} className="img-fluid"></img>
              </div>
              <div className=" d-flex align-items-center justify-content-center">
                <div>
                  <h5>Andaz</h5>
                  <h6>RS.10,500</h6>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="container-fluid mt-4">
        <div className="row subscription">
          <div className="col-sm-12 col-lg-12  d-flex align-items-center justify-content-center">
            <div className="align-items-center subscription" >
              <h2>Subscribe to our newsletter</h2>
              <h5>Join our mailing list for the latest product info & more</h5>
              <TextField
                fullWidth
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Email"
                variant="filled"
              />
              <div>
                <Button variant="contained" sx={{
                  backgroundColor: 'black',
                  padding: '15px 80px',
                  color: 'white',
                  marginTop: '20px',
                  marginEnd: '20px',
                  borderRadius: 0,
                  fontSize: '1rem', textTransform: 'capitalize',
                  '&:hover': {
                    backgroundColor: 'grey',
                  }

                }}>Join</Button>
              </div>

            </div>

          </div>
        </div>

      </div>


    </>



  );
}

export default Landingpage;