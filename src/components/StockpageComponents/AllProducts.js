import React, { useEffect } from 'react'
import { Typography, Divider, Grid } from '@material-ui/core'
import Product from './Product'
import { stock } from './shopdata'
// import { useSelector } from 'react-redux'

const AllProducts = () => {
    // const currentAdmin = useSelector(({ admin: { currentAdmin }}) => currentAdmin)
    // useEffect(() => {
    //     if(!currentAdmin){
    //         setTimeout(() => {
    //             alert('Prices displayed are subject to change due to availablity or demand. Please contact us to get current prices by filling the Get Quote form or via our phone number')
    //         }, 1000)
    //     }
    // }, [])
    return (
        <div>
            <div style={{padding: '0.5em', fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>
                <Typography variant='h6'>All Products</Typography>
            </div>
            <Divider />
            <div style={{margin: '0.3em 0'}}>
                <Grid spacing={1} container>
                    {stock.map(({id, ...productDetails}) => 
                        <Grid key={id} item xs={12} md={3}>
                            <Product {...productDetails} /> 
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default AllProducts
