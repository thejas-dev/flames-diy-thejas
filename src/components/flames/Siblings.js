import React from 'react'
import Siblingss from './flameimages/siblings.jpg'

function Siblings(props){
	const mystyle = {
		backgroundImage: `url(${Siblingss}) ` ,
		backgroundSize:'cover',
		backgroundRepeat:'no-repeat',
		backgroundPosition :'center',
		height:'200px'


	};
return(
	<div  >
	<div className='ui raised very padded text container segment' style={{marginBottom:'20px' , 
	padding:'3px' }}>
	<div style={mystyle}>
	<br/>
	<center><span className='ui huge header' style={{color:'white',fontFamily: 'Libre Baskerville' ,textShadow:'2px 2px 4px #000000'}} >S-Siblings</span> </center> <br/>
	<p className='Marriagetext' style={{padding:'15px' ,color:'white' ,textAlign:'center',fontFamily: 'Gentium Book Plus' ,fontSize:'25px',textShadow:'1px 0px 4px #000000'}} > {props.name1} And {props.name2} Are Good Siblings</p>
	</div>
	</div>
	</div>

	)

}

export default Siblings;