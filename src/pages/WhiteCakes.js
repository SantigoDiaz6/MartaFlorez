import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
//import { postPhotoTypes } from '../components/fakeData';
import roses from '../assets/images/whiteroses.jpg'
import vanilla from '../assets/images/Vanilla.png'
import lemon from '../assets/images/lemon.jpeg'

class WhiteCakes extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handlePurchase = (event) => {

    }



    render() {
        return (
            <React.Fragment>
                <div className="mainContainer">
                    <h1>White Cakes</h1>
                </div>
                <CardDeck>
                    <Card style={{ width: 2 }}>
                        <Card.Header>
                            Light Vanilla
                        </Card.Header>
                        <Card.Img variant="top" src={roses} />
                        <Card.Body>
                            <Card.Text>
                                The softer of the flavours in your mout
                                and your stomach, with this light version of the vanilla cake
                                and enjoy the outside touch of roses cream made out of light whipped cream.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div className="text-center">
                                <Button variant="outline-dark" onClick={this.handlePurchase}> Buy it! </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: 2 }}>
                        <Card.Header>
                            Classic Vanilla
                        </Card.Header>
                        <Card.Img variant="top" src={vanilla} />
                        <Card.Body>
                            <Card.Text>
                                For the lovers of the classic, enjoy a classic vanilla
                                cake, made in the most traditional way for those who want to remember
                                those afternoons with the family enjoying a piece of cake.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div className="text-center">
                                <Button variant="outline-dark" onClick={this.handlePurchase}> Buy it! </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: 2 }}>
                        <Card.Header>
                            Vanilla Lemon Cake
                        </Card.Header>
                        <Card.Img variant="top" src={lemon} />
                        <Card.Body>
                            <Card.Text>
                                Tired of the usual, but not spontaneous enough
                                to jump in new flavours?  Try to sour a little your classic
                                vanilla with this lemon infused cake, that gives a different touch
                                without going too far.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div className="text-center">
                                <Button variant="outline-dark" onClick={this.handlePurchase}> Buy it! </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </React.Fragment>
        )
    }



    // handleSubmit = (event) => {
    //     this.props.history.push("/"+event.target.value)
    // } 

    // render(){
    //     let posts = postPhotoTypes;
    //     return (
    //         <React.Fragment>
    //             <section>
    //                 <h1>Choose the type of photography you'd like:</h1>
    //                 {posts && posts.length > 0 && posts.map(post => (
    //                     <div class="container">
    //                         <div class="photographer-img">
    //                             <img src={post.post_image} alt="" class="photographer-pic" />
    //                         </div>
    //                         <div class="photographer-details">
    //                             <header>
    //                                 <h1>{post.title} </h1>
    //                                 <p>{post.description} </p>
    //                             </header>
    //                         </div>
    //                         <button type="button" value={post.route} onClick={this.handleSubmit}  class="profile-btn">View Photographers</button> 
    //                     </div>
    //                 ))} 
    //             </section>
    //         </React.Fragment>
    //     )
    // }
}


export default WhiteCakes;