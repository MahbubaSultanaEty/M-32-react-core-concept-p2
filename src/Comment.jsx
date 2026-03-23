export default function Comment({ comment }) {
    const personalInfo = {
        backgroundColor: 'white',
        borderRadius: "5px",
        padding: "4px"
    }

    console.log(comment)
    return (
        <div className="card">
            <h3>Comment : {comment.id}</h3>
            <p>{comment.body}</p>
            <div style={personalInfo}>
            <p>{comment.name}</p>
                <p>{comment.email}</p>
            </div>
        </div>
    )
}