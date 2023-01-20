import gameOfThrones from "../gameOfThrones"
const Member = () => {
    const memberArray = gameOfThrones.map((member, index) => {
        return (
            <li key={index}>
                <a href={`/members/${member.id}`}>{member.name}</a>
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