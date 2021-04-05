import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App