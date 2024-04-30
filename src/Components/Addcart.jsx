import React from "react";
import Button from '@mui/material/Button';
import aragon from "../Assets/aragoon.webp"

const Cart = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={aragon}
                            alt="Product"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Product Name</h2>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Price:10,000 </p>
                        <div className="mb-3">
                            <label htmlFor="quantityInput" className="form-label">Quantity:</label>
                            <input type="number" id="quantityInput" className="form-control" min="1" defaultValue="1" />
                        </div>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'black',
                                padding: '15px 15px',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'grey',
                                }
                            }}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;