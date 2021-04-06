import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SaveToken from "./pages/SaveToken"
import jwtDecode from "jwt-decode"
import NoMatch from "./pages/NoMatch"
import Profile from "./pages/Profile"


const App = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if(token) {
            const user = jwtDecode(token)
            console.log(user)
            setUser(user)
        }
    }, [])

    const handleLogout = () => {
        if(localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt')
            setUser(null)
        }
    }

    return (
        <Router>
            <Navbar user={user} handleLogout={handleLogout} />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login user={user} />
                    </Route>
                    <Route path="/saveToken">
                        <SaveToken setUser={setUser} />
                    </Route>
                    <Route>
                        <Profile />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App