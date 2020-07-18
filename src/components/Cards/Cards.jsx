import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = ( {orders: { orders }} ) => {
    
    console.log(orders);
    if(!orders) {
        return 'Loading...';
    }
        
    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify="center">
            {orders.map(({ deadline, description, name, workerId }, i) => (
                    <Grid key={i} item component={Card} xs={12} md={3} className={styles.card} >
                        <CardContent>
                            <Typography variant="h5" gutterBottom>{name}</Typography>
                            <Typography variant="body2" color="textSecondary">{description}</Typography>
                            <Typography variant="h6">{workerId}</Typography>
                            <Typography variant="overline" color="textSecondary">{new Date(deadline).toLocaleString()}</Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cards;