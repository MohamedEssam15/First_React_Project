import { useState } from "react";

const About = ()=>{
    const [name ,setname]= useState('Mohamed');
    const changename=()=>{
        setname('Jaber');
    }
    return(
        <div className="continer">
            <h1>{name}</h1>
            <button type="button" onClick={changename} className="btn btn-primary">Primary</button>
        </div>
    );
}
export default About;