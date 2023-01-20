// in Houses.js
import React from 'react'
import { Link, useParams} from 'react-router-dom'
import { gameOfThrones } from '../data/gameOfThrones'



const House = (props) => {
    // create a list of members use .find() to find the house
    const  {id}  = props
    const houseMembers = gameOfThrones.find((house, idx) => {
        return house.id === parseInt(props.match.params.id)
    })
    
    // then use .map() to create a list of members

    

    

    // in House.js
return (
    <div className="page">
        <div className="header">
            <h2>Members of a GoT House</h2>
        </div>
        <ul className="list">
            A list of members
            {houseMembers.members.map((member, idx) => {
          
            

        </ul>
    </div>
)
  
}

export default House