import React from 'react';
import {Link} from 'react-router-dom';
import './css/product.css';
import className from 'classnames';
class product extends React.Component{
 constructor(props){
   super(props);
this.props=props;

this.src=this.props.src;
this.rate=this.props.rate;
this.description=this.props.description;
this.uid=this.props.uid;
  }  
 render(){
return(
   <div className='fulldo'>
<div className='imgdiv'>
 <img src={this.src} width="130px" height="165px" alt='image'/>
 <small style={{width:'120px',font:'20px bold sans-serif UI'}}>{this.description}</small>
 <small>{ "$"}</small> 
<label className='rerate'>{this.rate}</label>

</div>
</div>

);          
  }
}export default  product;