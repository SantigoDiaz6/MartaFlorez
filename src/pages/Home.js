import React from 'react';
import '../assets/styles/Home.css'
//import photography from './Photography'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handlePhoto = (event) => {

        this.props.history.push("/photographers");
    }

    render() {
        return (

            <React.Fragment>
                <div class="mainContainer">
                    <h1>Which Kind of cake are you looking for?</h1>

                    <div class="services">
                        <div  onClick={ this.handlePhoto } class="service1">
                            <h3>Dark Cakes</h3>
                        </div>
                        <div class="service2">
                            <h3>White Cakes</h3>
                        </div>
                        <div class="service3">
                            <h3>Fruit Cakes</h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;