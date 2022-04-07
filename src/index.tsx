import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './views/Home'
import About from './views/About/About'
import NotFound from './views/NotFound/NotFound'
import Menu from './components/Menu/Menu'
import News from './views/News/News'
import store from './store'
import 'regenerator-runtime/runtime'
import 'core-js/stable'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Menu />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/" component={NotFound} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)
