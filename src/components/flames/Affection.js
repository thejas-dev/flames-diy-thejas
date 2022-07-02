import React from 'react'
import Affections from './flameimages/affection.jpg'

function Affection(props){
	const mystyle = {
		backgroundImage: `url(${Affections}) ` ,
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
	<center><span className='ui huge header' style={{color:'white',fontFamily: 'Libre Baskerville' ,textShadow:'2px 2px 4px #000000'}} >A-Affection</span> </center> <br/>
	<p className='Marriagetext' style={{padding:'15px' ,color:'white' ,textAlign:'center',fontFamily: 'Gentium Book Plus' ,fontWeight:'bold',textShadow:'2px 2px 4px #000000'}} >The Relationship Between {props.name1} And {props.name2} Will Have a Good Affection</p>
	</div>
	</div>
	</div>

	)

}

export default Affection;