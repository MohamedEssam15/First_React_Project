
// import { useEffect, useState } from "react";
import PostsList from "./PostsList";
// import { data } from "jquery";
import PostModel from "./PostModel";


const Post=()=>{
    
    const {isWaiting,ServerError,posts,deletefun,waitingserver} =PostModel('https://jsonplaceholder.typicode.com/posts');
//     const [posts1, setposts1]=useState([
//         {
//         userId: 1,
//         id: 1,
//         title: "delectus aut autem",
//         completed: false
//         },
//         {
//         userId: 1,
//         id: 2,
//         title: "quis ut nam facilis et officia qui",
//         completed: false
//         },
//         {
//         userId: 1,
//         id: 3,
//         title: "fugiat veniam minus",
//         completed: false
//         },
//         {
//         userId: 1,
//         id: 4,
//         title: "et porro tempora",
//         completed: true
//         },
//         {
//         userId: 1,
//         id: 5,
//         title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         completed: false
//         },
//         {
//         userId: 1,
//         id: 6,
//         title: "qui ullam ratione quibusdam voluptatem quia omnis",
//         completed: false
//         },
// ]);
  
    return(
        <div className="continer">
            <h1>POSTS</h1>
            {ServerError &&   <h1>{ServerError}</h1>}
            {isWaiting &&   <h1>Please Wait we are Geting Data</h1>}
            {isWaiting &&    <img src={process.env.PUBLIC_URL + '/loader.svg'} alt="svg" />}
            {posts &&  <PostsList posts={posts} deletefun={deletefun} waiting={waitingserver}/>}
        </div>
    );
}
export default Post;