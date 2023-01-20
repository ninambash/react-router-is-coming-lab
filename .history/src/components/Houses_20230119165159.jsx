// in House.js
import React from 'react'
import gameOfThrones from '../gameOfThrones'

const Houses = (props) => {
    
    const houses = props.gameOfThrone.map((house, index) => {
        return (
            <li key={index}>
                
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
            <ol>{houses}</ol>
        </ul>
    </div>
)
}

export default Houses