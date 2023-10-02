import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('items_data.json')
        .then(result => result.json())
        .then(data => setCards(data))
    },[])
    
    return (
        <div className="grid grid-cols-3 mx-20 gap-2 mt-3">
            {
                cards.map(card =>(
                    <Card key={card.id} card={card}></Card>
                ))
            }
        </div>
    );
};

export default Cards;