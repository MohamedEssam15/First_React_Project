const PostInfoDetails= ({posts})=>{





    return (
        <div className="card">
                <div className="card-header">
                    { posts.title}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>{ posts.body}</p>
                    <footer className="blockquote-footer">Made By User No: <cite title="Source Title">{posts.userId}</cite></footer>
                    </blockquote>
                </div>
            </div>
    );
}

export default PostInfoDetails;