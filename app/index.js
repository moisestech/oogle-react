import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Component
// State
// Lifecycle
// UI

export default function App () {

  return (
    <div className='app'>
    <Router>
      <Switch>
        <Route path='/search'>
          <h1>Welcome to Oogle Search</h1>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)