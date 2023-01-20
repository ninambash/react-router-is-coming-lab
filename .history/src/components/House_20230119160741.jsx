// in Houses.js
import React from 'react'
import { Link us} from 'react-router-dom'

const House = (props) => {
    // create a list of members use .find() to find the house
    const  gameOfThrones  = props
    const house = gameOfThrones.find((house, idx) => {
        return house.id === parseInt(props.match.params.id)
    })
    
    // then use .map() to create a list of members

    const membersArray = gameOfThrones.map((member, index) => {
        return (
            <li key={index}>
                <a href={`/members/${member.id}`}>{member.name}</a>
            </li>
        )
    })

    

    // in House.js
return (
    <div className="page">
        <div className="header">
            <h2>Members of a GoT House</h2>
        </div>
        <ul className="list">
            A list of members
            <ol>{membersArray}</ol>
            

        </ul>
    </div>
)
  
}

export default House