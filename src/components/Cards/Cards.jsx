import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Fuse from 'fuse.js';

import styles from './Cards.module.css';

const Cards = ( props ) => {
    
    if(!props.orders) {
        return 'Loading...';
    }

    // Order by Earliest or Latest
    const sortByEarliest = props.sortByEarliest;
    const workOrders = sortByEarliest ? props.orders.sort((a, b) => b.deadline - a.deadline) : props.orders.sort((a, b) => a.deadline - b.deadline);
    
    // Search
    const query = props.query;
    const fuse = new Fuse (workOrders, { keys: ['name'] });
    const results = fuse.search(query);
    const workOrderResults = query ? results.map(workOrder => workOrder.item) : workOrders;
        
    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify="center">
            {workOrderResults.map((order, i) => (
                    <Grid key={i} item component={Card} md={12} lg={4} className={styles.card} >
                        <CardContent >
                            <div className={styles.workOrder} >
                                <Typography variant="h5" gutterBottom>{order.workOrderName}</Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>{order.description}</Typography>
                            </div>    
                            <div className={styles.worker}>
                                <img className={styles.image} src={order.image} alt="worker_image" />
                                <div className={styles.workerDetails}>
                                    <Typography variant="h6">{order.name}</Typography>
                                    <Typography variant="subtitle1">{order.companyName}</Typography>
                                    <Typography variant="subtitle2">{order.email}</Typography>
                                    <Typography variant="overline" color="textSecondary">{new Date(order.deadline * 1000).toLocaleString()}</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cards;