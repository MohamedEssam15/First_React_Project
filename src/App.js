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
      <Home />
        <h1>My Name is { name}</h1>
        <h2>My age is { age}</h2>
        <h3> My salary is {salary} {currency}</h3><br/>


        <Post />
        <About />
    </div>
    
    );
  }
  
  export default App;
  