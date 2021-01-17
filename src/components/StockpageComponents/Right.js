import React from 'react'
import AllProducts from './AllProducts'
import { Paper } from '@material-ui/core'
import { Route } from 'react-router-dom'
import './css/right.scss'


const Right = () => {
    return (
        <Paper variant='outlined'>
            <Route exact path='/stockpage' component={AllProducts} />
            <Route exact path='/stockpage/administrator' component={AllProducts} />
        </Paper>
    )
}

export default Right
