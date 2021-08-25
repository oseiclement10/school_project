import './login.css';
import { Link } from 'react-router-dom';
import {VscAccount} from 'react-icons/vsc';

 const Login = () => {
        
        
    return (
        <div className="container">
            <form action="/users/login" method="POST" >
         <div className="caption">
             <VscAccount className="userr"/>
             <p></p>
             <br />
         </div>
         <div className="details">
             <label htmlFor="username">
                 Username <br />
             </label> 
             <input type="text" name="username" id="un" placeholder="  ... username" required /> 
            <label htmlFor="password">
                Password <br />
            </label>
            <input type="password" name="password" id="pw" placeholder="  ... password" required />
            <button type="submit">Login</button> 
            </div>
       </form>
       <div className="signupfirst">
         <p>Don't have an account ? <Link to="/signup">Sign Up</Link></p>
       </div>
       
        </div>
       
    )
}
export default Login;