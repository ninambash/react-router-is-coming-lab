import gameOfThrones from "../gameOfThrones"
const Member = () => {
    // create a list of members use .find() to find the house
    const  {id}  = props
    const member = gameOfThrones.find((member, idx) => {
        return member.id === parseInt(props.match.params.id)
    })

return (
    <div className="page">
        <div className="header">
            <h2>Specific Member Name</h2>
        </div>
        <div className="desc">
            A description

            
        </div>
    </div>
)

  
}

export default Member