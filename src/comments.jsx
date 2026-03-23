import { use } from "react"
import Comment from "./Comment";

export default function Comments({ commentPromise }) {
    const comments = use(commentPromise);
    console.log(comments);

    return (
        <div className="card"> 
            <h3>Comments : {comments.length}</h3>
            {
                comments.map(comment => <Comment></Comment>)
            }
        </div>
    )

}