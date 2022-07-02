import React from 'react'
import Enemys from './flameimages/enemy2.jpg'

function Enemy(props){
	const mystyle = {
		backgroundImage: `url(${Enemys}) ` ,
		backgroundSize:'cover',
		backgroundRepeat:'no-repeat',
		backgroundPosition :'center',
		height:'200px'
		


	};
return(
	<div  >
	<div className='ui raised very padded text container segment' style={{ 
	padding:'3px' }}>
	<div style={mystyle}>
	<br/> 
	<center><span className='ui huge header' style={{color:'white',fontFamily: 'Libre Baskerville' ,textShadow:'2px 2px 4px #000000'}} >E-Enemy</span> </center> <br/>
	<p className='Marriagetext' style={{padding:'15px' ,color:'white' ,textAlign:'center',fontFamily: 'Gentium Book Plus' ,fontWeight:'bold',textShadow:'2px 2px 4px #000000'}} >The Relationship Between {props.name1} And {props.name2} Will End In Enemies!</p>
	</div>
	</div>
	</div>

	)

}

export default Enemy;