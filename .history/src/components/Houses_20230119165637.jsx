// in House.js
import React from 'react'
import gameOfThrones from '../gameOfThrones'

const Houses = (props) => {
    //create a list of houses use .map() to create a list of houses
    const housesArray = props.gameOfThrones.map((house,) => {

        return (
            <li key={house.id}>
                <Link to={`/houses/${house.id}`}>{house.name}</Link>
            </li>
        )
    })

    // use <Link> to link to the house's page
    // use the house's id as the key
    // use the house's name as the text to be displayed



  // in Houses.js
return (
    <div>
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
        <ul className="list">
            A list of houses
            {housesArray}
            
        </ul>
    </div>
)
}

export default Houses