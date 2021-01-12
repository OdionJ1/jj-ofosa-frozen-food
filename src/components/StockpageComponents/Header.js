import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, InputBase, IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import './css/header.scss'

const useStyles = makeStyles((theme) => ({
    headerTitle: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif;",
        [theme.breakpoints.down('sm')]:{
            width: "70%",
            fontSize: 'medium'
        },
        fontSize: "large",
        fontWeight: "bold",
        cursor: "pointer",
        marginLeft: "2em",
    },
    inputInput: {
        // padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
    },
    inputRoot:{
        fontFamily: "Georgia, 'Times New Roman', Times, serif;",
        fontSize: '1em',
        fontStyle: 'italic',
        color: '#28282c'
    },
    form:{
        marginRight: '10em',
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            marginRight: '0'
        }
    },
    iconButton:{
        outline: 'none',
        borderBottom: '1px solid white',
        position: 'absolute'
    }
}))

const Header = () => {
    const classes = useStyles()

    let [inputValue, setInputValue] = useState('')

    let handleChange = (e) => {
        setInputValue(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
    }

    let currentAdmin = useSelector(({ admin: {currentAdmin} }) => currentAdmin)
    return (
        <AppBar position="static">
            <Toolbar disableGutters style={{display: 'flex', justifyContent:'space-between'}}>
                <Typography color="primary" className={classes.headerTitle}>
                    <Link to={currentAdmin? '/administrator' : '/'}>J.J OFOSA FROZEN FOOD</Link>
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div type='submit'>
                        <IconButton size="small" className={classes.iconButton}>
                            <SearchIcon color="secondary" />
                        </IconButton>
                    </div>
                    <InputBase
                        onChange={handleChange}
                        value={inputValue}
                        placeholder="Search..."
                        style={{borderBottom: '2px solid white', marginBottom: '0.5em'}}
                        classes={{
                            input: classes.inputInput,
                            root: classes.inputRoot
                        }}
                    />
                </form>
            </Toolbar>
        </AppBar>
    )
}

export default Header
