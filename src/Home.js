import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'


class Home extends Component {


    render() {
        return (
            <Header className="App-header">
                <h1 align="center">Welcome to the FINA Internal Database WebPage!</h1>
                <h3 align="center">To utilize the FINA Database tool, select a function from the menu.</h3>
            </Header>
        )
    }
}
export default Home;