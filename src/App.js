import React from 'react';

import { fetchWorkOrders } from './api';

// Functional Components
import { Cards, SearchInput, SortToggle } from './components';

import styles from './App.module.css';

class App extends React.Component {
    state = {
        orders: [],
        query: '',
        sortByEarliest: true,
    }

    async componentDidMount() {
        const fetchedOrders = await fetchWorkOrders();
        this.setState({ orders: fetchedOrders });
    }
   
    handleInputChange = (query) => {
        
        this.setState({ query: query })
    }

    handleSortByChange = (checked) => {
        this.setState({ sortByEarliest: checked })
    } 

    render() {

        const { orders, query, sortByEarliest } = this.state;

        return (
            <div className={styles.container}>
                <SearchInput handleInputChange={this.handleInputChange} />
                <SortToggle handleSortByChange={this.handleSortByChange} />
                <Cards orders={orders} query={query} sortByEarliest={sortByEarliest} />
            </div>
        )
    }
}

export default App;