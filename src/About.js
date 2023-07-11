import { useState } from "react";

const About = ()=>{
    const [name ,setname]= useState('Mohamed');
    const changename=()=>{
        if(name == 'Essam'){
            setname('Mohamed');
        }else{
            setname('Essam');
        }
    }
    return(
        <div className="continer">
            <h1>{name}</h1>
            <button type="button" onClick={changename} className="btn btn-primary">Change Name</button>
        </div>
    );
}
export default About;