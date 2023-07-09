const Home = ()=>{
    const clickme =()=>{
        console.log('Hello World!');
    }
    const clickpar =(name)=>{
        console.log('fuck! U '+name);
    }

    return (
    <div className="continer">
        <h1> Hello from Home</h1><br/>
        <button type="button" onClick={clickme} className="btn btn-primary">Primary</button>
        <button type="button" onClick={()=>clickpar('Jaber')} className="btn btn-danger ">Danger</button>
    </div>
    );
}
export default Home;