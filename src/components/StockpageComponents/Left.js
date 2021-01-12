import React from 'react'
import { Typography } from '@material-ui/core'
import CustomNav from './CustomNav'
import { makeStyles } from '@material-ui/styles'
import { categories } from './shopdata'
import ad from '../../images/ad.jpg'
import './css/left.scss'

let useStyles = makeStyles(() => ({
    productsHeader: {
        background: '#4b7dda'
    },
    imgContainer: {
        width: '90%',
        margin: 'auto'
    }
}))

let makeUpperCase = (string) => string.split(' ').map(s => s[0].toUpperCase() + s.slice(1)).join(' ')

const Left = () => {
    let classes = useStyles()
    return (
        <>
            <div className="productsContainer" style={{background: '#ddd'}}>
                <div className={classes.productsHeader}>
                    <Typography style={{fontWeight: 'bold'}} variant='subtitle2' color='secondary'>*ALL PRODUCTS</Typography>
                </div>
                <CustomNav isallProduct>All Products</CustomNav>
            </div>
            <div className="productsContainer" style={{background: '#ddd'}}>
                <div className={classes.productsHeader}>
                    <Typography style={{fontWeight: 'bold', marginLeft: '4px'}} variant='subtitle2' color='secondary'>CATEGORIES</Typography>
                </div>
                    {categories.map(cat => <CustomNav key = {cat.categoryname}>{makeUpperCase(cat.categoryname)}</CustomNav>)}
            </div>
            <div style={{background: '#ddd'}}>
                <div className={classes.imgContainer}>
                    <img style={{margin: '3em 0'}} width='100%' src={ad} alt="ad"/>
                </div>
            </div>
        </>
    )
}

export default Left
