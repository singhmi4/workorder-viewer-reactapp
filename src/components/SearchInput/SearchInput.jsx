import React from 'react';
import { TextField } from '@material-ui/core';

import styles from './SearchInput.module.css';

const SearchInput = ({ handleInputChange })  => {

       
    return (
        <div className={styles.container} >
            <TextField
                className={styles.textField}
                id="worker-search"
                placeholder="Filter by worker name..."
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={(event) => handleInputChange(event.target.value)}
            />
        </div>
    )
}

export default SearchInput;