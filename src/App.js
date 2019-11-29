import React, { Component } from 'react';
import './App.css';
import Beer from './Beer';

import Menu from './Menu'
import {MDBContainer} from "mdbreact";

class App extends Component {
    state={
        beers:[]
    };

    componentDidMount() {
        fetch("https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=d109fd6837f5fc48f5065544b1729545")
            .then(res=>res.json())
            .then((results)=>{
                console.log(results.data);
                results.data.forEach((beer)=>{
                    if(beer.labels === undefined)
                        beer.labels = {"icon": "/default"};
                });
                this.setState({beers:results.data});
            }).catch(console.log);
    }

    render() {
        return (
            <React.Fragment>
                <Menu/>
                    <MDBContainer className={"my-4"}>
                        <Beer beers={this.state.beers}/>
                    </MDBContainer>
            </React.Fragment>
        );
    }
}

export default App;
