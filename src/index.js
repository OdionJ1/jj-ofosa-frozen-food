import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ThemeProvider>,
document.getElementById('root'));


