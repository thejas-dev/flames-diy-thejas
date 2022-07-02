import React from 'react'


class Basicbox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name1:'',
            name2:''
        }
    }
    flamecal = (event) =>{
        
        this.props.flamescalci(this.state.name1,this.state.name2)
    

    }
    


    render(){
        return(
            <div className='box' style={{height:'250px' , textAlign:'center' , borderRadius:'0px 0px 20px 20px'}}>
            <br/>
                 <p className="item">NAME-1</p>
                 <div className='ui icon input'>
                  <br></br>
                    <input type="text" id='name1'
                    onChange={(event)=>
                        this.setState({name1:event.target.value})}
                        value={this.state.name1}
                    placeholder='Enter Name...'/>
                    <i className='circular search link icon'></i>
                </div>
                <p className="item">NAME-2</p> 
                <div className='ui icon input'>
                <br></br>
                    <input type="text" id="name2" 
                    onChange={(event)=>
                        this.setState({name2:event.target.value})}
                        value={this.state.name2}
                    placeholder='Enter Name...'/>
                    <i className='circular search link icon'></i>
                </div>
                <br></br> <br></br> <br/> 
                <p className="ui button primary" onClick={this.flamecal} >Submit</p>


            </div>
        )
    }
}
export default Basicbox