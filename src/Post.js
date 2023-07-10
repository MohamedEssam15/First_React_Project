import { useEffect, useState } from "react";
import PostsList from "./PostsList";
import { data } from "jquery";

const Post=()=>{
    const [isWaiting,setisWating]=useState(true);
    const [ServerError,setServerError]=useState(null);
const [posts1, setposts1]=useState([
        {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
        },
        {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
        },
        {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
        },
        {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
        },
        {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
        },
        {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
        },
]);
const deletefun = (id)=>{
    const updatedPosts = posts.filter(post=> post.id !=id);
    setposts(updatedPosts);
}  
const [posts, setposts]= useState(null);

useEffect(()=>{
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts232')
    .then(Response=>{
        console.log(Response.ok);
        if(!Response.ok){
            throw Error("cann't connect to Server ");
        }
        return Response.json();
    })
    .then(data=>{
        console.log(data); 
        setposts(data);
        setisWating(false);
    }).catch(e=>{
        console.log(e.message);
        setisWating(false);
        setServerError(e.message);
    });
    },10000);
},[])


    return(
        <div className="continer">
            {ServerError &&   <h1>{ServerError}</h1>}
            {isWaiting &&   <h1>Please Wait we are Geting Data</h1>}
            {isWaiting &&    <img src={process.env.PUBLIC_URL + '/loader.svg'} alt="svg" />}
            {posts &&  <PostsList posts={posts} deletefun={deletefun}/>}
        </div>
    );
}
export default Post;