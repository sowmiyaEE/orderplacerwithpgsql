import React from 'react';
import Orders from './orders.js';
import className from 'classnames';
import './css/admin.css';
class admin extends React.Component{
constructor(){super();
this.state={rtext:'add product'};
this.addproduct=this.addproduct.bind(this);}
addproduct()
{
let pid=1,src='',rate='',des='';
let element=document.getElementById('racediv');
console.log(element.children[2].value.length!==0, element.children[5].value.length!==0 ,element.children[8].value.length!==0);
if(element.children[2].value.length!==0 && element.children[5].value.length!==0 && element.children[8].value.length!==0)
{
src=element.children[2].value;
rate=element.children[5].value;
des=element.children[8].value;
pid=src+rate;

fetch(`/addproduct?id=${pid}&src=${src}&rate=${rate}&description=${des}`)
.then(response=> {return response.json();})
.then(responsedata=>{console.log(responsedata,"=responsedata");return responsedata;})
.then(data=>{
  if (data.msg.match("Error"))
 {
   this.setState({rtext:'something went wrong,check internet connection'});
 }
 else{
element.children[2].value='';
element.children[5].value='';
element.children[8].value='';
this.setState({rtext:'ok'});
alert('added '+src+'to products!'); 
}
}).catch(err=>{alert("caught error");});

}
else{
this.setState({rtext:'something went wrong,try giving all values'});
}


console.log(element.children[2].value,
element.children[5].value,
element.children[8].value,
);
/*   */


}

render(){
return(
<div className='tyuu'>
<div className='hers'>ORDERS</div>
<Orders uid={'nbnpd'}/>

<br/><br/>
     <div id='racediv' className='elem' >
<div className='hers'>ADD PRODUCT</div>

<div className='err'>src</div>
<input className='iou' type='text'/><br/>
<div className='err'>rate</div>
<input className='iou' type='text'/><br/>
<div className='err'> description</div>
<input className='iou' type='text'/><br/>

<br/><br/>
<button className='oiu' onClick={this.addproduct}>ok</button>

<br/><br/>
<label id='msg'>{this.state.rtext}</label>
</div>
  </div>
   
);
}

}
export default admin;