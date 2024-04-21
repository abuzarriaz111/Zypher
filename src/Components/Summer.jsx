import React from "react";
import { Newcards } from "./Cards";
const Summer = () => {
    return (
        <>
          <div className="container-fluid">
                <div className="text-center mt-5">
                    <h3>SUMMER COLLECTIONS</h3>
                </div>
                <div className="row">
                    {Newcards.map((Newcards) => (
                        <div key={Newcards.id} className="col-lg-3">
                            <img src={Newcards.img} alt={`image ${Newcards.id}`} className="img-fluid" />
                            <div className="text-center">
                                <h5>{Newcards.name}</h5>
                                <h6>{Newcards.Price}</h6>

                            </div>

                            {console.log("image", Newcards.imgsrc)}
                        </div>
                    ))}
                </div>

            </div>

        </>
      );
}
 
export default Summer;