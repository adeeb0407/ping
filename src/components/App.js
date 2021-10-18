import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../AuthContext"

import Chat from "./Chat"
import ChatMain from "./ChatMain"
import Login from "./Login"
import Structure from './Structure'

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={ChatMain} />
            <Route path="/" component={Login} />
            <Route path = '/dmchat' component =  {Structure} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
