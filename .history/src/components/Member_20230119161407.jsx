import gameOfThrones from "../gameOfThrones"
const Member = () => {
    const member = gameOfThrones.map((member, index) => {
        return (
            <li key={index}>

return (
    <div className="page">
        <div className="header">
            <h2>Specific Member Name</h2>
        </div>
        <div className="desc">
            A description
            <ol>{member}</ol>

            
        </div>
    </div>
)

  
}

export default Member