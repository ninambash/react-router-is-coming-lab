// in House.js
import React from 'react'
import gameOfThrones from '../gameOfThrones'

const Houses = () => {
    const housesArray = gameOfThrones.map((house, index) => {
        return (
            <li key={index}>
                <a href={`/houses/${house.id}`}>{house.name}</a>
            </li>
        )
    })

  // in Houses.js
return (
    <div>
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
        <ul className="list">
            A list of houses
            <ol>{}</ol>
        </ul>
    </div>
)
}

export default Houses