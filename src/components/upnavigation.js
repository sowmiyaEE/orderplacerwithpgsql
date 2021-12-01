import React from 'react';
import className from 'classnames';
import './css/upnavigation.css';
import {Link} from 'react-router-dom';
class upnavigation extends React.Component{


c(){

}
co(){

}

   render(){
  return(<div className="liop">
<div className="pop">
     <div className="container">
      <span className='log0'>{this.props.uid}</span>
<div className="twobutto">
     <span className="cutto" onClick={()=> this.props.chagestate('orders')}>Orders</span>
<Link to='/topp' className="cutto">Logout</Link>
    </div>  </div>
<div style={{width:'100%'}}> 
  <img width="50px" alt="home" height="50px" src="public/home.png" className="iutto" onClick={()=> this.props.chagestate('products')}></img></div>
</div>
</div>);
      }
}
export default  upnavigation;