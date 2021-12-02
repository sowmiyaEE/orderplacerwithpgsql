import React from 'react';
import Validateuser from './validateuser.js';
import {Link} from 'react-router-dom';
import className from 'classnames';
import './css/login.css';


class login extends React.Component
{
constructor(){super();
this.state={un:'',ps:''};
this.val=this.val.bind(this);
}


val(){
console.log("here");
console.log(document.getElementById('loginame').value,document.getElementById('password').value);
if(document.getElementById('loginame').length!=0 && document.getElementById('password').value.length!=0)
{

this.setState({un:document.getElementById('loginame').value});
this.setState({ps:document.getElementById('password').value});

}

}
render(){
return(
    
<div className='cont'>
 username<input className='useri'
 onChange={this.val}  id='loginame' type='text'/>

           password 
<input className='useri'  onChange={this.val} id='password' type='text' />
<small>Use 'ok','ok' as user,password </small>
<Link to="/validateuser"  className='log02' 
state={{username:this.state.un,password:this.state.ps}}>Login</Link>
</div>);}
}
export default login;