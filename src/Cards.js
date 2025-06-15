import React, { useEffect, useState } from "react";
import CardsHOC from './CardsHOC'
import "./Cards.css";

const Cards = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(res => setData(res))
        } catch (error) {
            console.error("Something went wrong", error.message)
        }

    }, [])

    return (
        <><h1 align="center"> Products Cards</h1>
        <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px'
    }}>
            
            {data.map((el) => <div key={el.id} >
                    <CardsHOC
                        id={el.id}
                        title={el.title}
                        category={el.category}
                        price={el.price}
                        image={el.image}
                    />
                </div>
            )}
        </div>
        </>
    )
}

export default Cards;