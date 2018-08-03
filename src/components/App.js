import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            filters: [],
            fruit: [],
            currentFilter: null
        }

    }
    componentWillMount() {
        this.fetchFilters();
    }

    componentDidMount() {
        this.fetchFruit();
    }

    fetchFruit = () => {
        fetch('/api/fruit')
          .then(response => response.json())
          .then(fruit => this.setState({ fruit }));
    }    
    fetchFilters = () => {
        fetch('/api/fruit_types')
            .then(response => response.json())
            .then(filters => this.setState({ filters }));
    }

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }

    render(){
        return <FruitBasket handleFilterChange={this.handleFilterChange} filters={this.state.filters} currentFilter={this.state.currentFilter} fruit={this.state.fruit}/>
    }
}
