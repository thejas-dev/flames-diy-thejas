import React from 'react'
import Marriages from './flameimages/marriage.jpeg'

function Marriage(props){
	const mystyle = {
		backgroundImage: `url(${Marriages}) ` ,
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
	<center><span className='ui huge header' style={{color:'white',fontFamily: 'Libre Baskerville' ,textShadow:'2px 2px 4px #000000'}} >M-Marriage</span> </center> <br/>
	<p className='Marriagetext' style={{padding:'15px' ,color:'white' ,textAlign:'center',fontFamily: 'Gentium Book Plus' ,fontWeight:'bold',textShadow:'2px 2px 4px #000000'}} >The Relationship Between {props.name1} And {props.name2} Will End In Marriage</p>
	</div>
	</div>
	</div>

	)

}

export default Marriage;