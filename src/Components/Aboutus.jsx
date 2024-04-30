import React from "react";
import about from "../Assets/about.webp"
const Aboutus = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className=" col-12 img-fluid backimg" />
                    {/* <img src={about} style={{ height: "50vh" }} /> */}
                </div>
                <div>
                    
                    <div className="text-center mt-5">
                        <h3>About us</h3>

                    </div>
                    <div className="container">
                    <p>Established in 1999, Zephyr Textiles Ltd. believes in creating an experience for you with style and comfort woven into the warp and weft. At Zephyr, it starts from a detailed research in product development, choice of  the finest yarn, cutting edge weaves, the optimum production processes, highest levels of quality assurance, innovative concept designs, colour selection and most importantly the comfort and durability of each fabric developed for you. We believe in matching your lifestyle with evolving trends of global fashion.</p>
                    <p>Our fabrics are offered in a range of colours and textures, with the promise of lasting elegance and durability. Zephyr provides a variety of options suitable for a casual day at home, a special occasion, exclusive gifts or the start of the new season especially when looking good is the only option!</p>
                    <p>Zephyr has the latest technology and technical expertise to bring you the highest quality products. Our fabrics are woven on state-of-the-art Picanol Air Jet looms while ensuring responsibility towards the environment in all aspects. We are OekoTex and GOTs Certified textile mill.</p>
                    <p>Our products assure quality, finesse, comfort and durability all year through. The perfect choice for all occasions - Zephyr Textiles is the selection for those who want elegance, comfort and style.</p>
                    </div>
                </div>

            </div>
            

        </>
    );
}

export default Aboutus;