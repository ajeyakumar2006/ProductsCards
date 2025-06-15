import React from "react";
import "./Cards.css";

const CardsHOC = ({id,title,category, price, image} ) => {

 

    return(
        <div className="container">
           <div className="card">
               <div className="card_header"> {title} </div>
               <div className="product"> {category} </div>
               <div> Price: ${price}  </div>
               <div> <img src={image} alt={id} className="img_frame" /></div>
            </div>
        </div>
    )
}

export default CardsHOC;