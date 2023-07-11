import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";


const EditPost = ()=>{
    const {id} = useParams();
    const [userId,setuserId]=useState("");
    const [isWaiting,setisWating]=useState(true); 
    const [title,settitle]=useState("");
    const [body,setbody]=useState("");
    const [ServerError,setServerError]=useState(null);
    const navegator=useNavigate();
    const [waitingserver,setwaitingserver]=useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(Response=>{
            console.log(Response.ok);
            if(!Response.ok){
                throw Error("can't connect to Server ");
            }
            return Response.json();
        })
        .then(data=>{
            setuserId(data.userId);
            settitle(data.title);
            setbody(data.body);            
            setisWating(false);
        }).catch(e=>{
            setisWating(false);
            setServerError(e.message);
        });
        },2000);
    },[]);

    const onsubmit =(e)=>{
        e.preventDefault();
        setwaitingserver(true);
        const mypost ={
            id,
            title ,
            body,
            userId,
        }
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
        method: 'PUT',
        body: JSON.stringify(mypost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
            console.log('Updated success');
            setwaitingserver(false);
            navegator("/posts");
        });
        },5000);

    }
    



    return (
<div className="container-xl ">
            <br/>
            {ServerError &&   <h1>{ServerError}</h1>}
            {isWaiting &&   <h1>Please Wait we are Geting Data</h1>}
            {isWaiting &&    <img src={process.env.PUBLIC_URL + '/loader.svg'} alt="svg" />}
                {!isWaiting && <div className="card">
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
                                {!waitingserver && <button type="submit" className="btn btn-success mb-3">Update</button>}
                                {waitingserver && <button type="submit" disabled className="btn btn-info mb-3">Please wait</button>}
                            </div>
                        </form>
                    </div>
                </div> }
        </div>
    );
}
export default EditPost;