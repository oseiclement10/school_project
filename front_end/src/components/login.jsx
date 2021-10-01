import './login.css';
import { Link } from 'react-router-dom';
import {VscAccount} from 'react-icons/vsc';
import { useEffect,useRef} from 'react';

 const Login = ({err,errFunc}) => {
     const inputRef = useRef();
     useEffect(()=>{
         if(err){

             errFunc();
             inputRef.current.focus();
         }
     },[err,errFunc]);
    return (
        <>
        <div className="incorrect">
        <p>
        </p>
        </div>
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
             <input type="text" name="username" id="un" placeholder="  ... username" required ref={inputRef} /> 
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
       </>
    )
}
export default Login;