
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
// import Posts from './pages/Posts'; 
import DarkCakes from './pages/DarkCakes';
import WhiteCakes from './pages/WhiteCakes'; 
import FruitCakes from './pages/FruitCakes'; 
//import Aerial from './pages/Aerial'; 
// import Food from './pages/Food';
//import Wedding from './pages/Wedding';
//import Models from './pages/Models';
import SignOut from './pages/SignOut';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import Home from './pages/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: ""
    }
  }

  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      this.setState({
        token: localStorage.getItem("token"),
      })
    }
  }
  updateTokenStatus = (token) => {

    this.setState({
      token
    });

  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar token={this.state.token}/>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
            <PrivateRoute exact path="/darkcakes" component={DarkCakes}></PrivateRoute>
            <PrivateRoute exact path="/whitecakes" component={WhiteCakes}></PrivateRoute>
            <PrivateRoute exact path="/fruitcakes" component={FruitCakes}></PrivateRoute>
            {/* <Route exact path="/posts"  component={Posts}></Route>
            <Route exact path="/photographers"  component={Photographers}></Route>
            <Route exact path="/food"  component={Food}></Route>
            <Route exact path="/models"  component={Models}></Route>
            <Route exact path="/aerial"  component={Aerial}></Route>
            <Route exact path="/wedding"  component={Wedding}></Route>
            <Route exact path="/posts/:id"  component={Posts}></Route> */}
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/signout" render={(props) => <SignOut {...props} onUpdate={this.updateTokenStatus} />} />
            <Route exact path="*" component={Login}></Route>
          </Switch>
        </Router>

      </div>
    );
  }
}



function PrivateRoute(props) {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Redirect to="/login"></Redirect>
  }

  return (<Route {...props} ></Route>);


}


export default App;
