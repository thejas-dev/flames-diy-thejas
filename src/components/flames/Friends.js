import React from 'react'
import Friendss from './flameimages/friends.jpg'

function Friends(props){
	const mystyle = {
		backgroundImage: `url(${Friendss}) ` ,
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
	<center><span className='ui huge header' style={{color:'white',fontFamily: 'Libre Baskerville' ,textShadow:'2px 2px 4px #000000'}} >F-Friends</span> </center> <br/>
	<p className='Marriagetext' style={{padding:'15px' ,color:'white' ,textAlign:'center',fontFamily: 'Gentium Book Plus' ,fontWeight:'bold',textShadow:'2px 2px 4px #000000'}} >The Relationship Between {props.name1} And {props.name2} Will Be a Good Friendship</p>
	</div>
	</div>
	</div>

	)

}

export default Friends;