import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
        } 
    } 

    handleSubmit = (event) => {
        event.preventDefault();

        const email = this.state.email;
        const password = this.state.password;
        const fakeData = [{email:"yance.zapata@gmail.com", password:"12345"},
                          {email:"santiago@test.com", password: "12345"},
                          {email:"susi.diaz.1602@gmail.com", password:"12345"}];   

        if (email.length > 0 && password.length > 0 ){
            let dato = fakeData.filter(data => data.email===email)[0] ;
            if ( dato && dato.password===password){
                console.log("Access granted");
                this.props.history.push("/home");
            } else{
                this.setState({
                    password: "",
                }) 
                console.log("Acceso denegado");
            } 
        }

    } 

    handleInput = (event) => {

        this.setState({
           [event.target.name]: event.target.value, 
        })
        
    } 

    render(){

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