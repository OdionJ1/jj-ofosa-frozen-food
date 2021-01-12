import React from 'react'
import { Typography, Paper } from '@material-ui/core'
import CustomNav from './CustomNav'
import { makeStyles } from '@material-ui/styles'
import { categories } from './shopdata'
import ad from '../../images/ad.jpg'
import './css/left.scss'

import { useSelector } from 'react-redux'

let useStyles = makeStyles(() => ({
    productsHeader: {
        background: '#4b7dda',
    },
    productsText: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        fontWeight: 'bold',
    },
    imgContainer: {
        width: '90%',
        margin: 'auto'
    }
}))

let makeUpperCase = (string) => string.split(' ').map(s => s[0].toUpperCase() + s.slice(1)).join(' ')

const Left = () => {
    let classes = useStyles()
    let darkTheme = useSelector(({ theme: { darkTheme }}) => darkTheme)

    return (
        <>
            <div className="productsContainer" style={{background: '#ddd'}}>
                <div className={classes.productsHeader}>
                    <Typography variant='subtitle2' className={classes.productsText} color='secondary'>*ALL PRODUCTS</Typography>
                </div>
                <CustomNav isallProduct>All Products</CustomNav>
            </div>
            <div className="productsContainer" style={{background: '#ddd'}}>
                <div className={classes.productsHeader}>
                    <Typography style={{marginLeft: '4px'}} className={classes.productsText} variant='subtitle2' color='secondary'>CATEGORIES</Typography>
                </div>
                    {categories.map(cat => <CustomNav key = {cat.categoryname}>{makeUpperCase(cat.categoryname)}</CustomNav>)}
            </div>
            <Paper variant='outlined' style={{background: darkTheme? '' : '#ddd'}} square>
                <div className={classes.imgContainer}>
                    <img style={{margin: '3em 0'}} width='100%' src={ad} alt="ad"/>
                </div>
            </Paper>
        </>
    )
}

export default Left
