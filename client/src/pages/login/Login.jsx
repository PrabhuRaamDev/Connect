import './login.css';

export default function () {
  return (
    <div className="login">
      <div className="loginWrapper">
          <div className="loginCenter">
              <div className="loginForm">
                  <span className="connectLogin">Connect</span>
                  <input type="text" className="emailLogin" placeholder='Email' />
                  <input type="password" className="passwordLogin" placeholder='Password'/>
                  <span className="loginButton">Login</span>
                  <span className="forgotPassword">Forgot Password?</span>
                  <span className='signupLogin'>Don't have an account? <span className="signupSpan">Sign up</span></span>
              </div>
          </div>
      </div>
    </div>
  );
}
