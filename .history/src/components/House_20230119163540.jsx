// in Houses.js
import React from 'react'
import { Link, useParams} from 'react-router-dom'





const House = (props) => {
    //create a list of members use .find() to find the house
    const { houseId } = useParams()
    const house = .find(house => house.id === houseId)
    const housesMembers = house.members.map(member => {
        return (
            <li key={member.id}>
                <Link to={`/members/${member.id}`}>{member.name}</Link>
            </li>
        )
    })
     console.log(house)
     console.log(house.members)

    
    // then use .map() to create a list of members
    // use <Link> to link to the member's page
    // use the member's id as the key
    // use the member's name as the text to be displayed


    

    

    // in House.js
return (
    <div className="page">
        <div className="header">
            <h2>Members of a GoT House</h2>
        </div>
        <ul className="list">
            A list of members
            

          
            

        </ul>
    </div>
)
  
}

export default House