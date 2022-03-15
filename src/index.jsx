import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './views/Home'
import About from './views/About/About.jsx'
import NotFound from './views/NotFound/NotFound.jsx'
import Menu from './components/Menu/Menu.jsx'
import News from './views/News/News.jsx'
import store from './store'

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
