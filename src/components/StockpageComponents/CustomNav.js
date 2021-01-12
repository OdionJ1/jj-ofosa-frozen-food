import React from 'react'
import { Button, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { useSelector } from 'react-redux'

// import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    button: {
        justifyContent: 'space-between',
        textTransform: 'none',
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
    let theme = useTheme()
    let dark = theme.palette.type === 'dark'? true : false
    const currentAdmin = useSelector(({ admin: { currentAdmin }}) => currentAdmin)

    const iconStyles = { 
        display: currentAdmin? 'block': 'none',
        color: '#f06a6a'
    }

    return (
        <Paper variant='outlined' style={{background: dark? '' : '#ddd'}} square>
            <Button fullWidth className={classes.button} size='medium' {...otherProps}>
                {children}
                    <DeleteIcon style={iconStyles} onClick={isallProduct? () => {console.log('IsAllProduct')} : null} fontSize='small' />
            </Button>
        </Paper>
    )
}

export default CustomNav
