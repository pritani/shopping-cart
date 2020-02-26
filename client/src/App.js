import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Users/register'
import Login from './components/Users/login'
function App(props){
    // const handleLogout=()=>{
    //     localStorage.removeItem('authToken')
   // props.history.push('/users/login')//not access to push//props is empty..so use href
    //     window.location.reload()
    //window.location.href="/users/login"
    //     window.location.reload()
    // }
    return(
        <BrowserRouter>
        <div>
            <h1>E-commerce</h1>
            <Link to="/">Home |</Link>
            {/* {
                localStorage.getItem('authToken')?(
                    <div>
                        <Link to="/users/logout" onClick={handleLogout}>Logout</Link>
               </div>
                ):(
                    <div>
             <Link to="/users/login">Login |</Link>
            <Link to="/users/register">Register |</Link>
                        </div>
                )
                } */}
                   <Link to="/users/login">Login |</Link>
            <Link to="/users/register">Register |</Link>
            <select>Category
                
            </select>
                </div>
           <Switch>
 <Route path="/" component={Home} exact={true}/>
<Route path="/users/register" component={Register}/>
<Route path="/users/login" component={Login}/>
   
        </Switch>
        </BrowserRouter>
    )
}
export default App