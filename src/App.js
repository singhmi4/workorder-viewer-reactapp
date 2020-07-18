import React from 'react';

import { fetchWorkOrders } from './api';

// Functional Components
import { Cards, SearchInput, SortToggle } from './components';

import styles from './App.module.css';

class App extends React.Component {
    
    state= {
        workOrders: {},
    }

    async componentDidMount() {
        const fetchedWorkOrders = await fetchWorkOrders();
        this.setState({ workOrders: fetchedWorkOrders });
    }

    render() {

        const { workOrders } = this.state;

        return (
            <div className={styles.container}>
                <SearchInput />
                <SortToggle />
                <Cards workOrder={workOrders} />
            </div>
        )
    }
}

export default App;