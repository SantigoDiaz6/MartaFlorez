import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
//import { postPhotoTypes } from '../components/fakeData';
import classicdark from '../assets/images/classicdark.jpeg'
import chocovolcano from '../assets/images/chocovolcano.jpg'
import doublechoc from '../assets/images/doublechoc.png'

class DarkCakes extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handlePurchaseClassic = () => {
        const handler = window.ePayco.checkout.configure ({
            key: process.env.REACT_APP_API_KEY_PAYMENT,
            test: true,
        });
        handler.open ({
            external: 'false',
            amount: '15',
            tax: '0',
            tax_base: '0',
            name: 'Classic Dark Cake',
            description: 'Classic Dark Cake MF',
            currency: 'usd',
            country: 'CO',
            lang: 'en',
            invoice: '12345',
            //response: process.env.REACT_APP_RESPONSE_URL,
            methodsDisable: ["DP", "CASH"],
        })
    }

    handlePurchaseVolcano = () => {
        const handler = window.ePayco.checkout.configure ({
            key: process.env.REACT_APP_API_KEY_PAYMENT,
            test: true,
        });
        handler.open ({
            external: 'false',
            amount: '20',
            tax: '0',
            tax_base: '0',
            name: 'Chocolate Volcano',
            description: 'Chocolate Volcano MF',
            currency: 'usd',
            country: 'CO',
            lang: 'en',
            invoice: '12345',
            //response: process.env.REACT_APP_RESPONSE_URL,
            methodsDisable: ["DP", "CASH"],
        })
    }

    handlePurchaseVolcano = () => {
        const handler = window.ePayco.checkout.configure ({
            key: process.env.REACT_APP_API_KEY_PAYMENT,
            test: true,
        });
        handler.open ({
            external: 'false',
            amount: '20',
            tax: '0',
            tax_base: '0',
            name: 'Double Chocolate',
            description: 'Double Chocolate MF',
            currency: 'usd',
            country: 'CO',
            lang: 'en',
            invoice: '12345',
            //response: process.env.REACT_APP_RESPONSE_URL,
            methodsDisable: ["DP", "CASH"],
        })
    }



    render() {
        return (
            <React.Fragment>
                <div className="mainContainer">
                    <h1>Dark Cakes</h1>
                </div>
                <CardDeck>
                    <Card style={{ width: 2 }}>
                        <Card.Header>
                            Classic Dark
                        </Card.Header>
                        <Card.Img variant="top" src={classicdark} />
                        <Card.Body>
                            <Card.Text>
                                Enjoy the best quality and the health
                                benefits of a classic dark chocolate, summed up in the perfect comination,
                                baked and ready to enjoy at your table or celebration.
                            </Card.Text>
                                <small className="text-muted">Price: US$15</small>
                        </Card.Body>
                        <Card.Footer>
                            <div className="text-center">
                                <Button variant="outline-dark" onClick={this.handlePurchaseClassic}> Buy it! </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: 2 }}>
                        <Card.Header>
                            Chocolate Volcano
                        </Card.Header>
                        <Card.Img variant="top" src={chocovolcano} />
                        <Card.Body>
                            <Card.Text>
                                Hard on the outside, but creamy and juicy in the inside,
                                the best Chocolate Volcano in town with the best recipes from
                                Switzerland.
                            </Card.Text>
                            <small className="text-muted">Price: US$20</small>
                        </Card.Body>
                        <Card.Footer>
                            <div className="text-center">
                                <Button className="ml-2" variant="outline-dark" onClick={this.handlePurchaseVolcano}> Buy it! </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: 2 }}>
                        <Card.Header>
                            Double Chocolate
                        </Card.Header>
                        <Card.Img variant="top" src={doublechoc} />
                        <Card.Body>
                            <Card.Text>
                                Not enough with being a fan of chocolate? Try this
                                reinforced double chocolate cake, with 2 different kind
                                of chocolate.
                            </Card.Text>
                            <small className="text-muted">Price: US$20</small>
                        </Card.Body>
                        <Card.Footer>
                            <div className="text-center">
                                <Button variant="outline-dark" className="ml-2" onClick={this.handlePurchaseVolcano}> Buy it! </Button>
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


export default DarkCakes;