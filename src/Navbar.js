import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
import CreatePost from "./CreatePost";
import Postinfo from "./Postinfo";
import EditPost from "./EditPost";


const Navbar = ()=>{
    return(
      <div>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/posts" className="nav-link" >Posts</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/posts/create" className="nav-link" >Create Post</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<Post />}></Route>
          <Route path="/posts/create" element={<CreatePost />}></Route>
          <Route path="/posts/:id" element={<Postinfo />}></Route>
          <Route path="/posts/edit/:id" element={<EditPost />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

        </BrowserRouter>
      </div>
    );
}
export default Navbar;