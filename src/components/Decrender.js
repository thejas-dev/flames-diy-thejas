import React from 'react'
import Friends from './flames/Friends'
import Lovers from './flames/Lovers'
import Affection from './flames/Affection'
import Marriage from './flames/Marriage'
import Enemy from './flames/Enemy'
import Siblings from './flames/Siblings'

const Decrender = (props) =>{
	let n = props.value
	if(n[0] === 'f' || n[0] === 'F'){
		return(<Friends name1={props.name1} name2= {props.name2} />)
	}
	if(n[0] === 'L' || n[0] === 'l'){
		return(<Lovers name1={props.name1} name2= {props.name2} />)
	}
	if(n[0] === 'A' || n[0] === 'a'){
		return(<Affection name1={props.name1} name2= {props.name2} />)
	}
	if(n[0] === 'M' || n[0] === 'm'){
		return(<Marriage name1={props.name1} name2= {props.name2} />)
	}
	if(n[0] === 'e' || n[0] === 'E'){
		return(<Enemy name1={props.name1} name2= {props.name2} />)
	}
	if(n[0] === 's' || n[0] === 'S'){
		return(<Siblings name1={props.name1} name2= {props.name2} />)
	}


}

export default Decrender;