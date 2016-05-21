import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanBoard  from './KanbanBoard';
import 'whatwg-fetch';
import 'babel-polyfill';
import update from 'react-addons-update';

class App extends Component {
    constructor(){
        super();
        this.state={
            cards: []
        };
    }

    componentDidMount(){
        var me = this;
        fetch('./cards.json')
        .then((response) => response.json())
        .then((responseData) => {
            me.setState({cards: responseData});
        })
        .catch((error) => {
            console.log("Error fetching and parsing data", error);
        })
    }

    render() {
        return (
            <KanbanBoard cards={this.state.cards} />
        )
    }

}

render(<App />, document.getElementById('root'));
