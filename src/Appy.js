import React from "react";
import App from "./App";
import Decrender from './components/Decrender'



class Appy extends React.Component{

    constructor(props){
        super(props)
        this.state={value2:[],nam1:'',nam2:''}
        this.decision=this.decision.bind(this)
    }

    decision=(value)=>{
       const val = value;
       this.setState({value2:val})  
    }
    nam1=(name1)=>{
        const n1 = name1;
        this.setState({nam1:n1})
    }
    nam2=(name2)=>{
        const n2= name2;
        this.setState({nam2:n2})
    }


    render(){
        
        return(
            <div>
            <App decision={this.decision} name1 ={this.nam1} name2 ={this.nam2} />,
            <Decrender value={this.state.value2} name1={this.state.nam1} name2={this.state.nam2} />
            </div>
        )
    }

}

export default Appy;