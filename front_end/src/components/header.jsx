import './header.css';
import login from './login';
import signUp from './signUp';
import {Link} from 'react-router-dom';
import {FaTwitter,FaInstagram,FaFacebook,FaCartPlus,FaPiedPiperHat} from 'react-icons/fa';
import {VscAccount} from 'react-icons/vsc';



 const header = () => {
     let account = "";
    return (
        <div className="header"> 
            <div className="header_logo">
                <h2>
                 <Link to ="/"><span><FaPiedPiperHat/></span>  shareLearn.org</Link> 
                </h2>   
            </div>
        <div className="header_links">
                <a className="twitter"  href ="https://www.twitter.com"  rel="noreferrer" target="_blank"><FaTwitter/></a>
                <a className="facebook" href = "https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
                <a className="instagram" href = "https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                
                <Link to ="/">Browse</Link>
                <Link to="/"><FaCartPlus/></Link>
           </div>

        <div className="header_account">
            {account?<div><VscAccount/></div> : <div className="setup">
                 <Link to="/login"><span>Login </span>  </Link> |  <Link to="/signup"><span>SignUp </span></Link>
               </div>}    
        </div>
        </div>

    )
}
export default header;