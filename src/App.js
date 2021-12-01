import{BrowserRouter as  Router,Routes,Route,Redirect} from 'react-router-dom';
import React from 'react';
import Createnewuser from './components/createnewuser.js';
import Dashboard from './components/dashboard.js';
import Signin from './components/signin.js';
//import Upnavigation from 'components/upnavigation.js';


function App()
{
return (
<>
<Router>
<div>
<Route  path="/createnewuser" component={Createnewuser}/>
<Route  path="/signin" component={Signin}/>
<Route  path="/dashboard" component={Dashboard}/>
</div>
</Router>

</>

);}
export default App;