import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const PostModel = (url)=>{
    const [isWaiting,setisWating]=useState(true);
    const [ServerError,setServerError]=useState(null);
    const [posts, setposts]= useState(null);
    const [waitingserver,setwaitingserver]=useState(false);
    const navegator=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then(Response=>{
            console.log(Response.ok);
            if(!Response.ok){
                throw Error("can't connect to Server ");
            }
            return Response.json();
        })
        .then(data=>{
             
            setposts(data);
            setisWating(false);
        }).catch(e=>{
            
            setisWating(false);
            setServerError(e.message);
        });
        },2000);
    },[url]);
    const deletefun = (id)=>{
        setwaitingserver(true);
        fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
        method: 'DELETE',
        }).then(()=>{
            setwaitingserver(false);
            navegator("/posts");
        });
        const updatedPosts = posts.filter(post=> post.id !== id);
        setposts(updatedPosts);
    }
    return {isWaiting,ServerError,posts,deletefun,waitingserver};
}
export default PostModel;