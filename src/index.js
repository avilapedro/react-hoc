import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/App'

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>
  ,document.getElementById('root')
)
