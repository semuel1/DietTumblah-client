import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons'

const handleGoogleClick = e => {
    console.log('Google Clicked!')
}

const handleGithubClick = e => {
    console.log('Github Clicked!')
}

const Login = props => {
    return (
        <div id="login">
            <h1>Login</h1>
            <GoogleLoginButton onClick={handleGoogleClick} />
            <GithubLoginButton onClick={handleGithubClick} />
        </div>
    )
}

export default Login