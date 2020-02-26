import React from 'react'
import axios from 'axios'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
   

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        axios.post(`localhost:3050/users/login`,formData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert((response.data.message))
          
            }
            else{//before this check localStorage
                const token=response.data.token
                localStorage.setItem('authToken',token)
                //
                this.props.history.push('/')
            }
        })
        .catch((err)=>{
            alert(err)
        })
    }
    
    render(){
        return(
            <div>
                <h2>Login Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} name="email" id="email" /><br></br>
                    <label htmlFor="password">password</label>
                    <input type='text' value={this.state.password} onChange={this.handleChange} name="password" id="password" />
               <input type="submit"/>
               
                </form>
            </div>
        )
    }
}
export default Login