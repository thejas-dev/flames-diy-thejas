import React from "react";

function Navi(){
    return(
        <nav className="box" style={{height:'100px', padding:'5px', borderRadius : '20px 20px 0px 0px'}} >
            <center>
        <h2 className="ui header" style={{padding:'15px' }}>Flames Calculator</h2></center>
        <div className='ui three buttons'>
            <button className='ui button'><a href='/'>Flames</a></button>
            <button className='ui button'><a href='/about'>About Us</a></button>
            <button className='ui button'><a href='/contact'>Contact Us</a></button>
        </div>
    </nav>
    )


}

export default Navi;