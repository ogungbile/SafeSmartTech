
import "./index.css"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Footer from "./components/common/footer/Footer"

const App = () => {
  return (
<>
<Router>
<Header/>
  <Switch>
  <Route exact path='/' component={Home} />
  </Switch>
  <Footer />
</Router>
</>
  )
}

export default App
