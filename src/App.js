import React from 'react';

// Functional Components
import { Cards, SearchInput, SortToggle } from './components';

import styles from './App.module.css';

class App extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <SearchInput />
                <SortToggle />
                <Cards />
            </div>
        )
    }
}

export default App;