import { Redirect, useLocation } from "react-router"
import jwtDecode from 'jwt-decode'
import { useEffect } from "react"

const SaveToken = props => {
    const query = new URLSearchParams(useLocation().search)
    const token = query.get('token')
    
    useEffect(() => {
        localStorage.setItem('jwt', token)
        const user = jwtDecode(token)
        props.setUser(user)
    }, [props, token])

    console.log(token)
    if(token) {
        return <Redirect to="/" />
    } else {
        return <Redirect to="/login" />
    }
}

export default SaveToken