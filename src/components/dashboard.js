import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Upnavigation from './upnavigation.js';
import {useLocation} from 'react-router-dom';
import Display from './display.js';
import './css/dashboard.css';
import className from 'classnames';
var v=true;
class dashboard extends Component{

constructor(props)
{
   super(props);
   this.state={selector:'products'};
this.chagestate=this.chagestate.bind(this);
if(this.props.uid!=null)
this.state={uid:this.props.uid,selector:'products'};
this.setst=this.setst.bind(this);
}

chagestate(choose)
{
   this.setState({selector:choose});
console.log('state of display',this.state.selector);
}
setst(u){this.setState({uid:u,selector:'products'});}

render(){
 return(<div>
<Getuid setst={this.setst}/>
<Upnavigation className='navigator' chagestate={this.chagestate} uid={this.state.uid} />

<br/>
<div>{this.state.selector}</div>
<Display uid={this.state.uid} className='display' selector={this.state.selector} /></div>);
}

}

function Getuid(props){
if(v==true){
const location=useLocation();
console.log(location.state);//props.setuid
var vars=location.state;v=false;
props.setst(vars.uid);}
return <div></div>;
}
export default dashboard;