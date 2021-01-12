import React from 'react'
import Header from './Header'
import Left from './Left'
import Breadcrumbs from './Breadcrumbs'
import { Paper, Grid, Divider } from '@material-ui/core'


const StockPage = (props) => {
    // console.log(props)
    return (
        <Paper variant="outlined">
            <Header />
            <div style={{margin: '3em 0'}}>
                <Grid justify="center" container>
                    <Grid item  xs={10}>
                        <Breadcrumbs />
                        <Grid item>
                            <Divider />
                        </Grid>
                        <div style={{marginTop: '2em'}}>
                            <Grid item md={3} xs={12}>
                                <Left />
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default StockPage
