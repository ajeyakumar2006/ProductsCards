import React, { useEffect, useState } from "react";
import CardHOC from "../Cards/CardHOC";
import "../Cards/CardHOC.css"

function CardCalling() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        var url = 'https://fakestoreapi.com/products';
        try {
            fetch(url)
                .then(res => res.json())
                .then(res => setProducts(res))
        } catch (error) {
            console.error("something went wrong", error.message)
        }
    }, [])

    return (
        <><h1 align="center">Creating Cards - Second Demo</h1>
            <div className="container">
                {
                    products.map(el => <div key={el.id}>
                        <CardHOC id={el.id} title={el.title} category={el.category} price={el.price} image={el.image} />
                    </div>
                    )}
            </div>
        </>
    )
}

export default CardCalling;