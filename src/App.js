import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import StockPage from './components/StockpageComponents/StockPage'
import { withRouter } from 'react-router-dom'
import './App.css'

import { auth, createAdminProfileDocument} from './firebase/firebaseUtils'
import { connect } from 'react-redux';
import { setCurrentAdmin } from './redux/admin/admin.actions'


class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount () {
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
        if(userAuth){
          // console.log(userAuth)
          const adminRef= await createAdminProfileDocument(userAuth);

          adminRef.onSnapshot(snapShot => {
            this.props.setCurrentAdmin({
                id: snapShot.id,
                ...snapShot.data()
            })
          })
          if(this.props.location.pathname === '/' || this.props.location.pathname === '/stockpage')
          this.props.history.push('/administrator')
        } else {
          this.props.setCurrentAdmin(userAuth)
          // console.log(this.props)
          if(this.props.location.pathname === '/administrator' || this.props.location.pathname === '/stockpage/administrator' ){
            this.props.history.push('/')
          }
        }
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth()
    }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/stockpage" component={StockPage} />
          {this.props.currentAdmin?
            <>
              <Route path="/stockpage/administrator" component={StockPage}/>
              <Route exact path="/administrator" component={LandingPage}/>
            </>
            :
            ''
          }
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({admin: {currentAdmin}}) => ({
  currentAdmin
})

const mapDispatchToProps = dispatch => ({
  setCurrentAdmin: admin => dispatch(setCurrentAdmin(admin))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); 
