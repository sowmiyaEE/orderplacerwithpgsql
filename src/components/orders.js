import React from 'react';
import className from 'classnames';
import './css/orders.css';
class orders extends React.Component{
constructor(props){super(props);
this.state={queries:[]};
this.getorders(this.props.uid);
}
getorders(uid)   {
//data
let d=[{'uid':23,pid:'w3',qty:'2'},{uid:'h45',pid:'pkp',qty:'3'}];

var url=`/api/orders?uid=${uid}`;
if(uid=="nbnpd")url=`/api/allorders`;
fetch(url)
.then(response=>{
 return response.json();
})
.then(responsedata=>{ 
console.log(responsedata,"=response.json");
return responsedata;})
.then(data=>{d= data;
this.setState({queries:data});})
.catch(e=>{//d="no internet or no data";
this.setState({queries:{msg:"something wrong"}});
});
return d;
}

render(){

console.log("orders:",this.state.queries);

if(this.state.queries.msg!=null)
return <div>{this.state.queries.msg}</div>;
else if(this.state.queries.length==0)
return <div>no orders</div>;
else
    return (
<div className='ta'>
<table >
<thead>
<td >User</td>
<td >Product id</td>
<td >Quantity</td>
</thead>
<tbody>
{this.state.queries.map((query,i) =>{
return(<tr key={i}>
 <td className='te'>{query.uid}</td>
<td className='te'>{query.pid}</td>
<td className='te'>{query.qty}</td>
</tr>)})}</tbody></table></div>
);
}
}export default  orders;