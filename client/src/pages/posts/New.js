import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";

function New({ user }) {

    let subjectRef = useRef()
    let bodyRef = useRef()
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let post = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value,
            user
        }
        await createPost(post)
        navigate('/posts')
    }

    return ( 
        <div>
        <h1>New Entry</h1>
        <img src="https://s3-us-east-2.amazonaws.com/static.showingtime.com/wp-content/uploads/2018/06/TaskList-795x675.jpg" alt="todolist" width="200" height="200" />
        <form onSubmit={handleSubmit}>
            <label htmlFor="nme">Task:</label><br />
            <input type="text" id="nme" ref={subjectRef} /><br /><br />

            <label htmlFor="clr">Things to do:</label><br />
            <textarea id="clr" cols="50" rows="100" ref={bodyRef} /><br /><br />

            <button class="btn btn-success">Add</button>
            
        </form>
        
    </div>
     );
}

export default New;