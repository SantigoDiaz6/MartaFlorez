import React from 'react';
import '../assets/styles/Home.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import darkcake from '../assets/images/darkcake.jpg'
import whitecake from '../assets/images/whitecake.jpg'
import fruitcake from '../assets/images/fruitcake.jpg'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handlePhoto = (event) => {

        this.props.history.push("/DarkCakes");
    }

    render() {
        return (

            <React.Fragment>
                <div className="mainContainer">
                    <h1>Which Kind of cake are you looking for?</h1>

                    {/* <div className="services">
                        <div onClick={this.handlePhoto} className="service1">
                            <h3>Dark Cakes</h3>
                        </div>
                        <div className="service2">
                            <h3>White Cakes</h3>
                        </div>
                        <div className="service3">
                            <h3>Fruit Cakes</h3>
                        </div> 

                    </div> */}


                    <Row>
                        <Col xs={1} md={{ span: 3, offset: 1 }}>
                            <Image onClick={this.handlePhoto} width="100%" height="50%" src={darkcake} roundedCircle />
                            <div className="text-center">
                                <h3>Dark Cakes</h3>
                            </div>
                        </Col>
                        <Col xs={1} md={{ span: 3, offset: 1 }}>
                            <Image src={whitecake} width="100%" height="50%" roundedCircle />
                            <div className="text-center">
                                <h3>White Cakes</h3>
                            </div>
                        </Col>
                        <Col xs={1} md={{ span: 2, offset: 1 }}>
                            <Image src={fruitcake} width="130%"  roundedCircle />
                            <div className="text-center">
                                <h3><Link to="/WhiteCakes" className="text-link"> Fruit Cakes </Link></h3>
                            </div>
                        </Col>
                    </Row>

                </div>
            </React.Fragment>
        )
    }
}

export default Home;