import './login.css';

import {VscAccount} from 'react-icons/vsc';

 const login = () => {
    return (
        <div className="container">
            <form action="/users/login" method="POST">
         <div className="caption">
             <VscAccount className="userr"/>
             <p></p>
             <br />
         </div>
         <div className="details">
             <label htmlFor="username">
                 Username <br />
             </label> 
             <input type="text" name="username" id="un" placeholder="  ... username" required/> 
            <label htmlFor="password">
                Password <br />
            </label>
            <input type="password" name="password" id="pw" placeholder="  ... password" required/>
            <button type="submit">Login</button> 

            </div>

       </form>
        </div>
       
    )
}
export default login;