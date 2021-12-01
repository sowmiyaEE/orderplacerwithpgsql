import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import './css/create.css';
var r;var ms0='still';

function createnewuser(){
 const location=useLocation();
console.log(location.state);
const[color, setms0] = useState('');
 r=location.state;
var already=false;
if(ms0=='still')
fetch('/validate?username='+r.cname+'&password='+r.cpass).then(response=>{return response.json();}).then(responsedata=>{return responsedata})
.then(data=>{
if(!(data.length>0))
{
ms0='creating...';
setms0("creating...");
}
else{
ms0="already existing user-failed";
setms0("already existing user-failed");
}
})
.catch(e=>{ms0='something  went wrong failed';setms0('something  went wrong failed');});


if(ms0=="creating..."){
var ur='/createnewuser?uid='+r.cname+r.cage+'&name='+r.cname+'&phone='+r.cphone+'&age='+r.cage+'&password='+r.cpass;
fetch(ur).then(response =>{return response.json();}).then(responsedata=>{return responsedata;})
.then(data=>{

ms0=data.msg;
setms0(data.msg);
}

)
.catch(err =>{ms0="error parsing response-failed";
setms0("error parsing response-failed");
});

}


 
if(ms0.match('failed'))
{
return(<div className='tyu'>
<label >{ms0 }</label><br/>
<Link to='/topp' target="top" className='gothr'>Back</Link></div>);
}
else if(ms0.match('still'))return(<div>(ms0} waiting</div>);
else if(ms0.match('created'))
{return (<div className='tyu'>
<label className='uuid'>{ms0}</label>
<Link className='gothr' to='/dashboard' state={{uid:ms0,selector:"products"}} states={{uid:ms0},{selector:'products'}}>
GO to dashboard</Link>
</div>);
}
else return "what?";
}


export default createnewuser;