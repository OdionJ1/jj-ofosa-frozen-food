import React from 'react'
import Header from './Header'
import Breadcrumbs from './Breadcrumbs'
import { Paper, Grid } from '@material-ui/core'

const StockPage = (props) => {
    // console.log(props)
    return (
        <Paper variant="outlined">
            <Header />
            <div style={{margin: '3em 0'}}>
                <Grid justify="center" container>
                    <Grid item sm={9}>
                        <Breadcrumbs />
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default StockPage
