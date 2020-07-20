import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            result: "",  //RESULT? Where'd we use it?
        } 
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        axios({
            url: "http://127.0.0.1:8000/users/signin", //Organize Route
            method: "POST",
            data: {
                email: this.state.email,
                password: this.state.password
            }
            })
            .then(response => {
                localStorage.setItem("token",response.data);
                this.props.history.push("/home");
            })
            .catch(error =>{
                 this.setState({ error: error,
                    password: "",
                })
             })
            .finally(() => this.setState({ loading: false })); 
    
    }  

    handleInput = (event) => {

        this.setState({
           [event.target.name]: event.target.value, 
        })
        
    } 

    render(){
        if (this.state.loading){return <h1>Loading...</h1>}

        return (
            <main>
            <form onSubmit={this.handleSubmit} >
            <div class="login">
            <div class="box">
                <h1>Welcome to Marta Florez!</h1>
                <h2>Sign in and choose your favourite cake...</h2>
                <input type="text" class="inputBox" placeholder="E-mail address" value={this.state.email} onChange={this.handleInput} name="email" />
                <input type="password" class="inputBox" placeholder="Password" value={this.state.password} onChange={this.handleInput} name="password"/>
                <input type="submit" onSubmit={this.handleSubmit }  class="submit-btn" placeholder="Sign in" value="Submit" />
            </div>
            </div>
            </form>
            </main>


        )

    }
} 


export default Login;