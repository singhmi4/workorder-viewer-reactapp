import React from 'react';

import { fetchWorkOrders } from './api';

// Functional Components
import { Cards, SearchInput, SortToggle } from './components';

import styles from './App.module.css';

class App extends React.Component {
    state = {
        orders: [],
    }

    async componentDidMount() {
        const fetchedOrders = await fetchWorkOrders();
        // console.log(fetchedOrders);
        this.setState({ orders: fetchedOrders });
    }

    render() {

        const { orders } = this.state;

        return (
            <div className={styles.container}>
                <SearchInput />
                <SortToggle />
                <Cards orders={orders} />
            </div>
        )
    }
}

export default App;