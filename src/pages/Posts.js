import React from 'react';

class Posts extends React.Component{
    constructor(){
        super();
        this.state = {

        } 
    } 

    render(){

        return (
            <section>
             <h1>Post Description {this.props.match.params.id} </h1>
            </section>
            
        )
    }
} 


export default Posts;