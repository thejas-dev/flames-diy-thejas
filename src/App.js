import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Basicbox from './components/Basicbox';
import Navi from './components/Navi';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

class App extends React.Component{
    constructor(props){
      super(props)
    this.state={value:0,name1:0,name2:0}

    this.flamescalci= this.flamescalci.bind(this)
    }

   
  flamescalci(name1,name2){
    // eslint-disable-next-line
   this.state={
     nam1:name1,
     nam2:name2
   }
    this.flamescalci2();
  }
  
  flamescalci2=()=>{
    let n1 = this.state.nam1;
    let n2 = this.state.nam2;

    // eslint-disable-next-line 
    this.state.name1 = n1;
    // eslint-disable-next-line
    this.state.name2 = n2;

    n1 = n1.toLowerCase();
n2 = n2.toLowerCase();

let n1arr = n1.split('')
let n2arr = n2.split('')

for (let h=0; h<n1arr.length ; h++){
if (n1arr[h].includes(" ")){
let k = n1arr.indexOf(" ")
n1arr[k]=''
}
}

for (let j=0; j<n2arr.length ; j++){
if (n2arr.includes(" ")){
let l = n2arr.indexOf(" ")
n2arr[l]=''
}
}

//console.log(n1arr)
//console.log(n2arr)

for(let i = 0; i<n2arr.length ;i++){
   if (n1arr.includes(n2arr[i])){
     
    let j = n1arr.indexOf(n2arr[i])
     n1arr[j]=''
    n2arr[i]=''
  }

}
let n1arrlen= 0
for (let g=0;g<n1arr.length;g++){
  if(n1arr[g] !== ''){
    n1arrlen ++;
  }
}


let n2arrlen= 0
for (let g=0;g<n2arr.length;g++){
  if(n2arr[g] !== ''){
    n2arrlen ++;
  }
}
 
  // console.log(n1arrlen)
  // console.log(n2arrlen)
  let totlen = n1arrlen+n2arrlen;
  console.log(totlen)

  let flame = ['F','L','A','M','E','S']
  console.log(flame.length)
  let index = 0;
  while(flame.length!==1){
      for (let i =0 ; i<totlen;i++){
        index++;
        if(index > flame.length){
          index=1;
        }
  console.log("im executed " ,{i}, "times ",{index})

      }
      
  console.log({index})
  flame.splice(index-1,1)
  console.log(flame)
  index--;    
}
console.log(flame)   
    const val =flame;
    
    // eslint-disable-next-line
    this.state.value = val;

    this.props.name1(this.state.name1)
    this.props.name2(this.state.name2)
    this.props.decision(this.state.value);
    
  }
 
  
  
  render(){
   
   return(

    <BrowserRouter>
    <div className='App'>
      <div className='ui raised very padded text container segment' style={{padding:'10px' , borderRadius:'20px'}} >
      <Navi />
      <Routes>
        <Route path= '/' element={<Basicbox flamescalci={this.flamescalci} />}/>
        <Route path= '/about' element={<About/>}/>
        <Route path= '/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>


   )

}
}

export default App;
