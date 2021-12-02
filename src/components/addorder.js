import React,{useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import className from 'classnames';
import Dashboard from './dashboard.js';
import './css/productorder.css';

var vars;

function addorder(){
function pluspress(ev){
console.log(ev.target.previousSibling);
ev.target.previousSibling.innerHTML=parseInt(ev.target.previousSibling.innerHTML)+1;ev.target.parentNode.nextSibling.innerHTML=parseInt(ev.target.previousSibling.innerHTML)*parseInt(ev.target.parentNode.previousSibling.innerHTML)
changeqty(parseInt(ev.target.previousSibling.innerHTML)+1);
}
function minuspress(ev){
console.log(ev.target.previousSibling);
if(parseInt(ev.target.nextSibling.innerHTML)>0){
ev.target.nextSibling.innerHTML=parseInt(ev.target.nextSibling.innerHTML)-1;ev.target.parentNode.nextSibling.innerHTML=parseInt(ev.target.nextSibling.innerHTML)*parseInt(ev.target.parentNode.previousSibling.innerHTML);
changeqty(parseInt(ev.target.nextSibling.innerHTML)-1);
}
}
const [qty,changeqty]=useState('');
 const location=useLocation();
vars=location.state;
console.log(vars);
return <div className="alldow" >
<Link style={{color:'black',fontSize:'30px',padding:'5%',textDecoration:'none'}}target="top" to='/dashboard' state={{uid:vars.uid}}>
Dashboard</Link>
<div className="srcr">
<img src={vars.src} className="psrc" alt="img"></img>
<div className="dsrcr">{vars.description}</div>
<div className="dsrcr">{vars.rate}</div>
<div className="dsrcr" style={{display:'flex',marginLeft:'32%'}}>
<button style={{height:'25px',width:'30px'}} value='-' 
onClick={minuspress} >-</button>
<p style={{width:'20px',height:'25px',margin:'0 0 0 0'}}>1</p>
<button value='+' onClick={pluspress} style={{width:'30px',height:'25px'}} >+</button>
</div>
<p className="dsrcr">{vars.rate}</p>
<button className="bsrcr" onClick={()=>
{console.log(vars.uid,vars.pid,qty);
 fetch(`/api/addorder?uid=${vars.uid}&pid=${vars.pid}&qty=${qty}`)
.then(response=>{
return response.json();}).then(responses=>{return responses})
.then(responsedata=>{
  alert(responsedata.msg+'!');  
 
}
)
.catch(err=>
{
console.log(err);
alert('some error try again');
}
)
}
}>OK</button>
<label id='msehe'></label>
</div></div>;
}

export default addorder;