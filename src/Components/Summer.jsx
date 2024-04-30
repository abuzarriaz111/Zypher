import React, { useState, useEffect } from "react";
import { Newcards } from "./Cards";
import Button from '@mui/material/Button';
import SideDrawer from "./SideDrawer"; 

const Summer = () => {
    const [loading, setLoading] = useState(true); // Add loading state

    // Simulate data loading delay
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Clean up timeout on component unmount
        return () => clearTimeout(timeout);
    }, []);

   
  

    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="container-fluid flex-grow-1">
                <div className="text-center mt-5">
                    <h3>SUMMER COLLECTIONS</h3>
                </div>
                <hr className="custom-hr"></hr>
                <div className="row">
                    {loading ? ( // Display loader if loading state is true
                        <div className="col-12 text-center mt-5">
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        Newcards.map((card) => (
                            <div key={card.id} className="col-lg-3">
                                <div className="card mt-3">
                                    <div className="image-zoom">
                                        <img src={card.img} alt={`image ${card.id}`} className="img-fluid" />
                                    </div>
                                    <div className="text-center">
                                        <h5>{card.name}</h5>
                                        <h6>{card.Price}</h6>
                                        <Button variant="text"  sx={{ fontSize: '1rem', textTransform: 'capitalize' }}>Add to cart</Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Summer;
