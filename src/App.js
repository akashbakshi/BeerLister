import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beer from './beer'

class App extends Component {
    state={
        beers:[]
    };

    componentDidMount() {
        fetch("https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=d109fd6837f5fc48f5065544b1729545")
            .then(res=>res.json())
            .then((data)=>{
                console.log(data.data);

                console.log(data.data[0].labels.large)
                this.setState({beers:data.data});
            }).catch(console.log);
    }

    render() {
    return (
        <Beer beers={this.state.beers}/>
    );
  }
}

export default App;
