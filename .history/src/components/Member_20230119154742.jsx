import gameOfThrones from "../gameOfThrones"
const Member = () => {
    const memberArray = gameOfThrones.map((member, index) => {
        return (
            <li key={index}>
                <a href={`/members/${member.id}`}>{member.name}</a>
            </li>
        )
    })

return (
    <div className="page">
        <div className="header">
            <h2>Specific Member Name</h2>
        </div>
        <div className="desc">
            A description
            <ol>{hoiArray}</ol>
        </div>
    </div>
)

  
}

export default Member