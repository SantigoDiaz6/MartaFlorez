import React from 'react';
import axios from 'axios';
//import './Login.css'

class Login extends React.Component {
    constructor() {
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
            url: process.env.REACT_APP_SERVER_URL + "/users/signin", //Check if working
            method: "POST",
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
            .then(response => {
                localStorage.setItem("token", response.data);
                this.props.history.push("/home");
            })
            .catch(error => {
                this.setState({
                    error: error,
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

    render() {
        if (this.state.loading) { return <h1>Loading...</h1> }

        return (
            // <main>
            <form onSubmit={this.handleSubmit} >
                {/* <h2>Welcome to Marta Florez</h2>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleInput} name="email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleInput} name="password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onSubmit={this.handleSubmit} value="Submit">Submit</button> */}




                <div className="login">
                    <div className="box">
                        <h1>Welcome to Marta Florez!</h1>
                        {/* <h2>Sign in and choose your favourite cake...</h2> */}
                        <input type="text" className="inputBox" placeholder="E-mail address" value={this.state.email} onChange={this.handleInput} name="email" />
                        <input type="password" className="inputBox" placeholder="Password" value={this.state.password} onChange={this.handleInput} name="password" />
                        <input type="submit" onSubmit={this.handleSubmit} className="btn btn-light" placeholder="Sign in" value="Submit" />
                    </div>
                </div>




            </form>
            // </main>


        )

    }

    // render() {
    //     return (
    //         <form>
    //             <h3>Sign In</h3>

    //             <div className="form-group">
    //                 <label>Email address</label>
    //                 <input type="email" className="form-control" placeholder="Enter email" />
    //             </div>

    //             <div className="form-group">
    //                 <label>Password</label>
    //                 <input type="password" className="form-control" placeholder="Enter password" />
    //             </div>

    //             <div className="form-group">
    //                 <div className="custom-control custom-checkbox">
    //                     <input type="checkbox" className="custom-control-input" id="customCheck1" />
    //                     <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
    //                 </div>
    //             </div>

    //             <button type="submit" className="btn btn-primary btn-block">Submit</button>
    //             <p className="forgot-password text-right">
    //                 Forgot <a href="#">password?</a>
    //             </p>
    //         </form>
    //     );
    // }




}


export default Login;