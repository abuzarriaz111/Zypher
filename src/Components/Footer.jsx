import React from "react";
const Foter = () => {
    return (<>
        <div className="container-fluid footer-section">
            <div className="footer-section">
                <div class="row footer-row justify-content-between">
                    <div class="col-sm-12 col-lg-4">
                        <h3>Head Office</h3>
                        <hr className="custom-hr"></hr>
                        <h5>ZEPHYR Textiles Ltd.</h5>
                        <p>3rd Floor, IEP Building, 97-B/D-1,<br></br>Gulberg-III, Lahore, Pakistan.<br></br>Ph. +92 423 578 2905-9</p>
                    </div>
                    <div class="col-sm-12 col-lg-7">
                        <div class="row second-row">
                            <div class="col-6 col-md-4 mt-5 mt-md-0">
                                <h5> Links</h5>
                                <hr className="custom-hr"></hr>
                                <ul className="ps-0">
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">NEW ARRIVALS</a></li>
                                    <li><a href="#">SUMMER COLLECTION</a></li>
                                    <li><a href="#">ABOUT</a></li>
                                    <li><a href="#">CONTACT</a></li>
                                </ul>
                            </div>
                            <div class="col-6 col-md-4 mt-5 mt-md-0">
                                <h5>Information</h5>
                                <hr className="custom-hr"></hr>
                                <ul className="ps-0">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Press</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-4">
                                <h5>Contact  us</h5>
                                <hr className="custom-hr"></hr>
                                <ul className="ps-0">
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
    </>);
}

export default Foter;