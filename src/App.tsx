import Home from 'pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
