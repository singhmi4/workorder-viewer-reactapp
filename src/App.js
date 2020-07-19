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

    // Fetch modified JSON from API and set it to the App component state
    async componentDidMount() {
        const fetchedOrders = await fetchWorkOrders();
        this.setState({ orders: fetchedOrders });
    }
   
    // Sets the query state for searching in Cards component
    handleInputChange = (query) => {
        this.setState({ query: query })
    }

    // Sets the boolean value of the toggle switcher which will determine how the Cards should be sorted
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