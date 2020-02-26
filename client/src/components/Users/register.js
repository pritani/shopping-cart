import React from 'react'
import axios from 'axios'
class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
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
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        axios.post('localhost:3050/users/register',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert((response.data.message))
          
            }
            else{
                this.props.history.push('/users/login')
            }
        })
        .catch((err)=>{
            alert(err)
        })
    }

    render(){
        return(
            <div>
                <h2>Register with Us</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">username</label>
                    <input type='text' value={this.state.username} onChange={this.handleChange} name="username" id="username" /><br></br>
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
export default Register