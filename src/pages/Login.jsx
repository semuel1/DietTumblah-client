import { Redirect } from 'react-router'
// handy style-only buttons from a 3rd party module
import { 
    GithubLoginButton, 
    GoogleLoginButton 
} from 'react-social-login-buttons'

const SERVER_URL = process.env.REACT_APP_SERVER_URL

const handleGoogleClick = e => {
    // console.log('Google Clicked!')
    // Manually redirect the page to the server's google oauth endpoint
    window.location.href = `${SERVER_URL}/auth/google`
}

const handleGithubClick = e => {
    // console.log('Github Clicked!')
    window.location.href=`${SERVER_URL}/auth/github`
}

const Login = ({ user }) => {
    if(user) {
        return <Redirect to={{ pathname: '/' }}/>
    } else {
        return <div id="login">
            <h1>Login</h1>
            <GoogleLoginButton onClick={handleGoogleClick} />
            <GithubLoginButton onClick={handleGithubClick} />
        </div>
    }
}

export default Login