import React from 'react';

import { fetchWorkOrders } from './api';

// Functional Components
import { Cards, SearchInput, SortToggle } from './components';

import styles from './App.module.css';

class App extends React.Component {
    state = {
        orders: [],
        query: '',
    }

    async componentDidMount() {
        const fetchedOrders = await fetchWorkOrders();
        this.setState({ orders: fetchedOrders });
    }
   
    handleInputChange = (query) => {
        
        this.setState({ query: query })
    }

    render() {

        const { orders, query } = this.state;

        return (
            <div className={styles.container}>
                <SearchInput handleInputChange={this.handleInputChange} />
                <SortToggle />
                <Cards orders={orders} query={query} />
            </div>
        )
    }
}

export default App;