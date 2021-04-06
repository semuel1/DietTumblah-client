import { Redirect } from 'react-router'
import { 
    GithubLoginButton, 
    GoogleLoginButton 
} from 'react-social-login-buttons'

const SERVER_URL = process.env.REACT_APP_SERVER_URL

const handleGoogleClick = async e => {
    console.log('Google Clicked!')
    window.location.href = `${SERVER_URL}/auth/google`
}

const handleGithubClick = e => {
    console.log('Github Clicked!')
}

const Login = ({ user }) => {
    console.log(user)
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