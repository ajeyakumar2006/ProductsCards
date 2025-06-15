import React from "react";
import  "../Cards/CardHOC.css";


function CardHOC ({ id,title, category, price, image}) {

    return(
            <div className="card">
                <div>{title}</div>
                <div>{category}</div>
                <div>Price: ${price}</div>
                <div><img src={image} alt={id} /></div>
            </div>
    )
}

export default CardHOC;

    