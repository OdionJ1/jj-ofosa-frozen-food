import React from 'react'
import { IconButton } from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../redux/theme/theme.actions'


const ThemeType = () => {
    const dispatch = useDispatch()
    let darkTheme = useSelector(({ theme : { darkTheme }}) => darkTheme)
    
    return (
        <div>
            <IconButton title='Toggle light/dark theme' onClick={() => dispatch(setTheme())} style={{outline: 'none'}} size='small'>
                {darkTheme? <Brightness7Icon /> : <Brightness4Icon /> }
            </IconButton>
        </div>
    )
}

export default ThemeType
