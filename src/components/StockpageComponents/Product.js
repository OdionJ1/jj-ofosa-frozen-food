import React from 'react'
import { Card, CardContent, Typography, CardMedia, IconButton, CardActions } from '@material-ui/core'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(()=> ({
    imgStyles: {
        height: '10em',
        borderRadius: '3px'
    },
}))

const Product = ({ img, name, description, price }) => {
    const classes = useStyles()
    const darkTheme = useSelector(({ theme: { darkTheme }}) => darkTheme)
    const currentAdmin = useSelector(({ admin: { currentAdmin }}) => currentAdmin) 

    const priceStyles = {
        color: darkTheme? '' : 'red'
    }
    return (
        <Card style={{backgroundColor: darkTheme? '' : '#f5f5f5', padding: '0.5em'}} elevation={0}>
            <div>
                <CardMedia className={classes.imgStyles} image={img} />
            </div>
            <CardContent style={{padding: '0.5em 0'}}>
                <Typography variant='caption'>{name}</Typography>
                {description? 
                    <Typography style={{fontStyle: 'italic', overflowWrap: 'break-word'}} variant='caption' component='p'>{description}</Typography> 
                :
                ''}
                <div>
                    <Typography variant='caption'>Price:</Typography>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant='caption'>Wholesale: <span style={priceStyles}>&#8358;{price.carton}</span></Typography>
                        <Typography variant='caption'>Kilo: <span style={priceStyles}>&#8358;{price.kilo}</span></Typography>
                    </div>
                </div>
            </CardContent>
            <div style={{display: currentAdmin? 'block': 'none'}}>
                <CardActions style={{justifyContent: 'space-between'}}>
                        <IconButton title='Edit' style={{outline: 'none'}} size='small'>
                            <EditOutlinedIcon fontSize='small' />
                        </IconButton>
                        <IconButton title='delete' style={{outline: 'none', color: '#f06a6a'}} size='small'>
                            <DeleteForeverOutlinedIcon fontSize='small' />
                        </IconButton>
                </CardActions>
            </div>
        </Card>
    )
}

export default Product
