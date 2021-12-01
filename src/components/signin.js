import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './css/signin.css';

var gname=null,gage=null,gpass=null,gphone=null;
const Signname =(props) => 

 {
const[color, setColor] = useState('');
 

function handlechange(ev){
let value=ev.target.value;
const letter=/[A-Za-z]/;
if(value.match(letter)){
returned(true);
props.submit({index:'name',cvalue:value});
} 
else returned(false);
}
 function returned(v){
if(v){  setColor('leaf');}
else { setColor('rose');
document.getElementById('secret').className='hidded';
}
}

return(
<input type='text' onChange={handlechange} className={color}/>)

}




const Signno= (props) => {
const[color, setColor] = useState('');

function handlechange(ev){
let value=ev.target.value;
const letter=/[0-9]/;
if(value.match(letter) && value.length===10) {
returned(true);
props.submit({index:'phone',cvalue:value});} else returned(false);
}
function returned(v){
if(v){ setColor('leaf');}
else{setColor('rose');
document.getElementById('secret').className='hidded';
}
}


return(<input type='text' onChange={handlechange} className={color} />);
}




 const Password=(props) => {
const[color, setColor] = useState('');

function handlechange(ev){

let value=ev.target.value;
const letter=/[A-Za-z]/;const digit=/[0-9]/;
if(value.match(letter) && value.match(digit)){ returned(true);
props.submit({index:'pass',cvalue:value});} else returned(false);
}
function returned(v){
if(v){setColor('leaf');}
else{setColor('rose');
document.getElementById('secret').className='hidded';
}
}


return(<input type='password' className={color}  onChange={handlechange} style={{color:`{green}`}}/>)
}




 const Signage =(props) => {
const[color, setColor] = useState('');

function handlechange(ev){
let value=ev.target.value;
const letter=/[^A-Za-z]/;const digit=/[0-9]/;
if(value.match(letter) && value.match(digit) && value.length<3) 
{props.submit({index:'age',cvalue:value});returned(true);} else returned(false);
}
function returned(v){
if(v){setColor('leaf');}
else{setColor('rose');
document.getElementById('secret').className='hidded';
}
}


return(<input type='text' style={{marginLeft:'40px'}}  onChange={handlechange} className={color} />)
}

 class signin extends React.Component{


constructor(props)
{
super(props);
console.log('@cons');
this.submit=this.submit.bind(this);
  this.state=
{submitrelease:false,
hider:'hidded',cname:null,
cphohe:null,cage:null,cpass:null
};
}
 sethider(v){this.setState({hider:v});}
submit(value){

//console.log("value i",this.state);
switch(value.index){
case 'name':{gname=value.cvalue;
this.setState({cname:gname});
break;
};
 case 'phone':{gphone=value.cvalue;
this.setState({cphone:gphone});
break;};
case 'age':{gage=value.cvalue;
this.setState({cage:gage});
break;}; 
case 'pass':{gpass=value.cvalue;
this.setState({cpass:gpass});
break;};
 default:{console.log(' wrong');

break;}
}
if(gname!=null && gphone!=null && gage!=null && gpass!=null)
{
document.getElementById('secret').className='visibled';

}// this.sethider('visibled');
else{
document.getElementById('secret').className='hidded';}// this.sethider('hidded');
}


render(){
//let s=new signin();


console.log(gname);
   return(
<div className='ert'>
  <label className='inlab' >username</label>
<Signname submit={this.submit}/>
<br/>
<label className='inlab'>phoneno</label>
<Signno submit={this.submit}/>
<br/>
<label className='inlab'>age</label>
<Signage submit={this.submit}/>
<br/>
<label className='inlab'>password</label>
<Password submit={this.submit}/>
<small>has digits and letters</small>
<br/>

<Link id="secret" style={{margin:'35px',marginRight:'0px'}} state={{cname:this.state.cname,cphone:this.state.cphone,cage:this.state.cage,cpass:this.state.cpass}} className='visibled' to='/createnewuser' >
Create</Link>
<Link target="top" style={{margin:'35px'}} to='/topp' >
login</Link>

</div>
);

}

}
export default signin


