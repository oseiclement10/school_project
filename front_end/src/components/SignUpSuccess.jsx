import './signupsuccess.css';
import {FaCheck} from 'react-icons/fa';
import {Link} from 'react-router-dom';
export const SignUpSuccess = () => {
    return (
        <div className="signupsuccesscontainer">
            <div className = "signupsuccess">
            <p>Congratulations </p>
            <p>You have successfully signed Up </p>
            <p><FaCheck/></p> 
            <p></p>
           <div className="loginhere">
           <Link to="/login">Log In here</Link>
             </div>
             
        </div>
        </div>
        
    )
}
