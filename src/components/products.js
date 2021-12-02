import React from 'react';
import {Link} from 'react-router-dom';
import Product from './product.js';
//import Addorder from './addorder.js';
import className from 'classnames';
import './css/products.css';

class products extends React.Component{
   constructor(props)
{
   super(props);
this.props=props;
this.state={msg:"",val:''};
this.state={msg:"",val:'',v:this.getproducts()};
this.getproducts=this.getproducts.bind(this);
this.valset=this.valset.bind(this);this.setval=this.setval.bind(this);
}
valset(ev){ this.setState({val:ev.target.value});}
getproducts(){
if(document.getElementById('searchid')!=null)
document.getElementById('searchid').value='';
let search=this.state.val;
console.log("searching",search);
let r=[{src:"ddd",rate:"23",description:"er",pid:"3e"},{src:"ddd",rate:"23",description:"er",pid:"3e"}];
 fetch('/api/products?search='+search)
.then(response=>{
 return response.json();
})
.then(responsedata=>{
return responsedata;})
.then(data=>{
console.log(data);
if(data.length==0)
this.setState({msg:"no items matching your query",val:'',v:[]});
else if(search=='')
this.setState({msg:data.length+' items',val:'',v:data});
else
this.setState({msg:data.length+' items matching query',val:'',v:data});

})
.catch(e=>{console.log('caught error',e);

});
//document.getElementById('searchid').value='';
return r;
}

 

setval(){this.setState({val:"",msg:''});

this.getproducts();}
render(){




return(
<div>
<div className='ser' align="center">
<input type='text' id='searchid' onChange=
{this.valset} className='qinput'/>
{this.state.val}<button className='search' 
onClick={
this.getproducts
}
>search</button>
<button className='allprods' 
onClick={
this.setval
}
>All products</button>
</div>
{this.state.msg}
<div style={{display:'flex',flexWrap:'wrap', paddingTop:'4px',
   marginTop:'0px',float:'left'}}>
{(this.state.v.length!=0)?
this.state.v.map(
(query,i) => {
return(<div key={i} className='singleproduct'>
<Product  src={query.src} rate={query.rate} description={query.description} pid={query.pid} uid={this.props.uid}/>
<Link to='/addorder' state={{src:query.src,rate:query.rate,description:query.description,uid:this.props.uid,pid:query.pid}}>order</Link>
</div>)
}
):<div>no products</div>
}

</div>
</div>);

}}

export default products;