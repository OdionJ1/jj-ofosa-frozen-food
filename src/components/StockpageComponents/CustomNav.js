import React from 'react'
import { Button, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { useSelector } from 'react-redux'

// import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    button: {
        justifyContent: 'space-between',
        textTransform: 'none',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        '&:focus':{
            outline: 'none'
        }
    },
    buttonText: {
        textAlign: 'left'
    }
}))

const CustomNav = ({ children, isallProduct, ...otherProps }) => {
    const classes = useStyles()
    const currentAdmin = useSelector(({ admin: { currentAdmin }}) => currentAdmin)
    const darkTheme = useSelector(({ theme: { darkTheme}}) => darkTheme )

    const iconStyles = { 
        display: currentAdmin && !isallProduct? 'block': 'none',
        color: '#f06a6a'
    }

    return (
        <Paper variant='outlined' style={{background: darkTheme? '' : '#ddd'}} square>
            <Button fullWidth className={classes.button} size='medium' {...otherProps}>
                {children}
                    <DeleteIcon style={iconStyles} onClick={isallProduct? () => {console.log('IsAllProduct')} : null} fontSize='small' />
            </Button>
        </Paper>
    )
}

export default CustomNav
