import React from "react";

import { Cards } from "./Cards";
const NewArrivals = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="text-center mt-5">
                    <h3>NEW ARRIVALS</h3>
                </div>
                <div className="row">
                    {Cards.map((card) => (
                        <div key={card.id} className="col-lg-3">
                            <img src={card.img} alt={`image ${card.id}`} className="img-fluid" />
                            <div className="text-center">
                                <h5>{card.name}</h5>
                                <h6>{card.Price}</h6>

                            </div>

                            {console.log("image", card.imgsrc)}
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
}

export default NewArrivals;