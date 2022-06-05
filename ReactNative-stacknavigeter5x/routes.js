import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import login from './pages/login'
import forget from './pages/Forget'
import register from './pages/Register'

const Routes = () => (
 <Router>
 {/* <Scene key = "root"> */}
 <Scene key = "login" component = {login} title = "Home" initial = {true} />
 <Scene key = "forget" component = {forget} title = "About" />
 <Scene key = "register" component = {register} title = "About" />
 {/* </Scene> */}
 </Router>
)
export default Routes