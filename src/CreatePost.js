import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const CreatePost = ()=>{

    const [userId,setuserId]=useState(""); 
    const [title,settitle]=useState("");
    const [body,setbody]=useState("");
    const navegator=useNavigate();
    const [waitingserver,setwaitingserver]=useState(false);
    const onsubmit =(e)=>{
        e.preventDefault();
        setwaitingserver(true);
        const mypost ={
            title ,
            body,
            userId,
        }
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(mypost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
            console.log('New post added');
            setwaitingserver(false);
            navegator("/posts");
        });
        },5000);

    }
    



    return (
        <div className="container-xl ">
            <br/>
                <div className="card">
                    <div className="card-body text-start" >
                        <form onSubmit={onsubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name="title" placeholder="pla pla pla" required value={title} onChange={(e)=>settitle(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userId" className="form-label">user_id</label>
                                <input type="text" className="form-control" id="userId" name="userId" placeholder="" required value={userId} onChange={(e)=>setuserId(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="body" className="form-label">Body</label>
                                <textarea className="form-control" id="body" name="body" placeholder="pla pla pla" rows="3" required value={body} onChange={(e)=>setbody(e.target.value)} ></textarea>
                            </div>
                            <div className="col-auto">
                                {!waitingserver && <button type="submit" className="btn btn-success mb-3">Create</button>}
                                {waitingserver && <button type="submit" disabled className="btn btn-info mb-3">Please wait</button>}
                            </div>
                        </form>
                    </div>
                </div>
                
        </div>
    );
}
export default CreatePost;