import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = ( props ) => {
    
    // if(!orders) {
    //     return 'Loading...';
    // }

    const workOrders = props.orders;
    console.log(typeof workOrders);

    
   
        
    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify="center">
            {workOrders.map((order, i) => (
                    <Grid key={i} item component={Card} xs={12} md={3} className={styles.card} >
                        <CardContent className={styles.cardContent} >
                            <div classname={styles.workOrder} >
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