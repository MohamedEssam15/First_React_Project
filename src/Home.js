import { useState } from "react";

const Home = ()=>{
    const [name ,setname]= useState('Hello from Home');
    const clickme =(name)=>{
        setname("Hello "+ name +" From Home Page")
    }
    const clickpar =(name)=>{
        setname("Hello "+ name +" From Home Page")
    }

    return (
    <div className="continer">
        <h1> {name}</h1><br/>
        <button type="button" onClick={()=>clickme('Mohamed')} className="btn btn-primary">Mohamed</button>
        <button type="button" onClick={()=>clickpar('Essam')} className="btn btn-info ">Essam</button>
    </div>
    );
}
export default Home;