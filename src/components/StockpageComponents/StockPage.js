import React from 'react'
import Header from './Header'
import Left from './Left'
import Right from './Right'
import Breadcrumbs from './Breadcrumbs'
import ThemeType from './ThemeType'
import { Paper, Grid, Divider } from '@material-ui/core'


const StockPage = (props) => {
    // console.log(props)
    return (
        <Paper variant="outlined">
            <Header />
            <div style={{margin: '3em 0'}}>
                <Grid justify="center" container>
                    <Grid item xs={10}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Breadcrumbs />
                            <ThemeType />
                        </div>
                        <Grid item>
                            <Divider />
                        </Grid>
                        <div style={{marginTop: '2em'}}>
                            <Grid container>
                                <Grid item xs={12} md={3}>
                                    <Left />
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Right />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default StockPage
