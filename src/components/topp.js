import {Link} from 'react-router-dom';
import React from 'react';
import className from 'classnames';
import './css/index.css';
class topp extends React.Component{
render(){
return(
<div className="hess">
     <Link to="/login" target="top" className='log02'>Login</Link>   
       <Link to="/signin" target="top" className='log02'>signin</Link>   
       <Link to="/admin" className='log02'>Admin</Link>
<hr/><Link className='log02' to='/dashboard' state={{uid:'test',selector:"products"}} >
GO to testdashboard</Link>
</div>
);
}}
export default topp;
 