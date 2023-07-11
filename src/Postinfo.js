import { useParams } from "react-router-dom";
import PostModel from "./PostModel";
import PostInfoDetails from "./PostInfoDetails";


const Postinfo=()=>{
 const {id} = useParams();
 const {isWaiting,ServerError,posts} =PostModel("https://jsonplaceholder.typicode.com/posts/"+id);
 console.log(posts);
    return(
        <div className="continer">
            <h1> Post Info id :{id}</h1>
            {ServerError &&   <h1>{ServerError}</h1>}
            {isWaiting &&   <h1>Please Wait we are Geting Data</h1>}
            {isWaiting &&    <img src={process.env.PUBLIC_URL + '/loader.svg'} alt="svg" />}
            {posts && <PostInfoDetails posts={posts} />}
        </div>
    );
}
export default Postinfo;