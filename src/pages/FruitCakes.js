import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
//import { postPhotoTypes } from '../components/fakeData';
import grapes from '../assets/images/grapes.jpg'
import berries from '../assets/images/berries.jpg'
import tropical from '../assets/images/tropical.jpg'

class FruitCakes extends React.Component {
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
                    <h1>Fruit Cakes</h1>
                </div>
                <CardDeck>
                    <Card style={{ width: 2 }}>
                        <Card.Header>
                            Berry Nice
                        </Card.Header>
                        <Card.Img variant="top" src={berries} />
                        <Card.Body>
                            <Card.Text>
                                Enjoy the touch of the berries, all mixed in this cake.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-dark" onClick={this.handlePurchase}> Buy it! </Button>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: 2 }}>
                        <Card.Header>
                            Grapes Cake
                        </Card.Header>
                        <Card.Img variant="top" src={grapes} />
                        <Card.Body>
                            <Card.Text>
                                Want to have a nice mixer for the wine? What would be better than
                                a grapes-made cake, try this out!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-dark" onClick={this.handlePurchase}> Buy it! </Button>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: 2 }}>
                        <Card.Header>
                            Tropical
                        </Card.Header>
                        <Card.Img variant="top" src={tropical} />
                        <Card.Body>
                            <Card.Text>
                                Feel all the caribean breeze with a bite of the tropical
                                cake, fresh and refreshing.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-dark" onClick={this.handlePurchase}> Buy it! </Button>
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


export default FruitCakes;