import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import StockPage from './components/StockpageComponents/StockPage'
import { withRouter } from 'react-router-dom'
import './App.css'

import { auth, createAdminProfileDocument} from './firebase/firebaseUtils'
import { connect } from 'react-redux';
import { setCurrentAdmin } from './redux/admin/admin.actions'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const App = ({ setCurrentAdmin, currentAdmin, history, location, darkTheme }) => {
    let unsubscribeFromAuth = null;
    
    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
            if(userAuth){
                const adminRef = await createAdminProfileDocument(userAuth);

                adminRef.onSnapshot(snapShot => {
                    setCurrentAdmin({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
                if(location.pathname === '/' || location.pathname === '/stockpage')
                history.push('/administrator')
            } else {
                setCurrentAdmin(userAuth)
                if(location.pathname === '/administrator' || location.pathname === '/stockpage/administrator')
                history.push('/')
            }
        })

        return function unsubscribe() {
            unsubscribeFromAuth()
        }
    }, [])

    const theme = React.useMemo(() => createMuiTheme({
        typography: {
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            caption: {
                fontSize: '0.80rem'
            }
        },
        palette: {
            primary: {
                main: '#2462d4',
                dark: '#ffffff',
            },
            type: darkTheme? 'dark' : 'light',
            secondary: {
                main: '#28282c',
            },
        },
    }), [darkTheme])

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/stockpage" component={StockPage} />
                    {currentAdmin?
                        <>
                            <Route path="/stockpage/administrator" component={StockPage}/>
                            <Route exact path="/administrator" component={LandingPage}/>
                        </>
                        :
                        ''
                    }
                </Switch>
        </div>
        </ThemeProvider>
    )
}


const mapStateToProps = ({admin: {currentAdmin}, theme: { darkTheme }}) => ({
    currentAdmin,
    darkTheme
})
  
const mapDispatchToProps = dispatch => ({
    setCurrentAdmin: admin => dispatch(setCurrentAdmin(admin))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); 
