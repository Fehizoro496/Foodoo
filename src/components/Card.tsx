import React from 'react';
import './Card.css'

function Card(){
    return(
        <div className="card">
            <div className="cardAvatar cardContent">C</div>
            <div className='recipesName cardContent'>Noodle chicken soup</div>
            <div className="recipesLevel cardContent">Beginner</div>
            <div className="recipesDetail cardContent">
                <div className="Detail">
                    <div className="val">25</div>
                    <div className="unit">Min</div>
                </div>
                <div className="Detail">
                    <div className="val">95</div>
                    <div className="unit">Kcal</div>
                </div>
                <div className="Detail">
                    <div className="val">XX</div>
                    <div className="unit">Meat</div>
                </div>
            </div>
            <div className="recipesRate cardContent">rate</div>
            <div className="cardAction">Start cooking</div>
        </div>
    )
}

export default Card;