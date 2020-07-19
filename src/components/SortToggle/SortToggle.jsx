import React from 'react';
import { Typography, Grid, Switch } from '@material-ui/core';


import styles from './SortToggle.module.css';

const SortToggle = ( {handleSortByChange} ) => {

    return (
        <div className={styles.container} >
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Earliest</Grid>
                <Grid item>
                    <Switch onChange={(event) => handleSortByChange(event.target.checked)} name="sortByEarliest" color="primary" />
                </Grid>
                <Grid item>Latest</Grid>
                </Grid>
            </Typography>
        </div>
    )
}

export default SortToggle;