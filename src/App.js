import Home from "./Home";
import './App.css';
import Navbar from "./Navbar";
import About from "./About";
import Post from "./Post";

function App() {
  const name='Mohamed Essam';
  const age=23;
  const salary=10000;
  const currency='EGP';
  return (
    <div className="App">
      <Navbar />
        <h1>POSTS</h1>
        <Post />``
    </div>
    
    );
  }
  
  export default App;
  