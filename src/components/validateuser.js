import React,{useState}  from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import Dashboard from "./dashboard.js";
import {useLocation} from 'react-router-dom';
var s=false;

class validateuser extends React.Component{
constructor(props){
super(props);
this.state={dotcallagai:false,uid:"uid",a:false};
this.changestate=this.changestate.bind(this);
}

changestate(r){
console.log("changestate",r);
this.setState({dotcallagai:true,uid:r.uid,a:r.a});
}

render(){
console.log("rederig:dotcallagai:",this.state.dotcallagai);
console.log("state:-a:",this.state.a)
let r=this.state.uid;
return(<div>
{(this.state.a)?

<div>
<Dashboard uid={r}/>
</div>



:
<div style={{display:'flex',flexWrap:'wrap',width:'90%'}} align="center">
{(!this.state.dotcallagai)?
 <Somstt changestate={this.changestate} />:<div></div>}
<div style={{width:'100%'}} id='see'> {this.state.uid}</div>
</div>




}
<Link target="top" style={{margin:'35px'}} to='/topp' >
BACK</Link>
</div>

);

}
}



function Somstt(props){
let rt='';
const location=useLocation();
console.log(location.state);
var vars=location.state;

if(vars.username=='ok' && vars.password=='ok')
{
rt={a:true,uid:'testUid'};
if(s==false)
{s=true;
props.changestate(rt);}
return<div></div>;
}
if(vars.username.length!==0 && vars.password.length!==0)
{


fetch(`/validate?username=${vars.username}&password=${vars.password}`)
.then(response =>{

return response.json();})
.then(responsedata=>
{console.log(responsedata);
return responsedata;})
.then(data=>{
if(data.length>0){
rt={a:true,uid:data[0].uid};
if(s==false)
{s=true;
props.changestate(rt);}}
else{
if(data.length==0)
rt={a:false,uid:"invalid credentials"};
else rt={a:false,uid:"internet issues"};
if(s==false)
{s=true;
props.changestate(rt);}
}


})
.catch(e=>{
rt={a:false,uid:"invalid characters"};
if(s==false)
{s=true;
props.changestate(rt);}
});

}
else{rt={a:false,uid:"enter all values"};
if(s==false)
{s=true;
props.changestate(rt);}
}

return <div>validating.....</div>;
}
export default validateuser;