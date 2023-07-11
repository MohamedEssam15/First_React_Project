import {Link } from "react-router-dom";

const PostsList = ({posts, deletefun})=>{

    return(
        <div className="continer">
        <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">userId</th>
                    <th scope="col">body</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { posts.map((post)=>(
                        <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.title}</td>
                            <td>{post.userId}</td>
                            <td>{post.body}</td>
                            <td><button type="button" onClick={()=>deletefun(post.id)} className="btn btn-danger">Delete</button></td>
                            <td><Link to={"/posts/"+post.id} className="btn btn-info">Info</Link></td>
                            <td><Link to={"/posts/edit/"+post.id} className="btn btn-primary">Edit</Link></td>
                        </tr>
                    ))}
            
                </tbody>
            </table>
        </div>
    );
}
export default PostsList;