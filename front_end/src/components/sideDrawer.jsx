import './sideDrawer.css';
import { FaPiedPiperHat,FaTwitter,FaFacebook,FaInstagram,FaCartPlus } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
 const sideDrawer = ({display}) => {
     let account ="";
    let classlist = ["sidedrawer"];
    if(display){
        classlist.push('show');
    }
    return (
     <div className={classlist.join(" ")}>
         <div className="sidedrawer_logo">
         <h2>
                 <Link to ="/"><span><FaPiedPiperHat/></span>Home</Link> 
                </h2>   
         </div>

         <div className="sidedrawer_main">
               <Link to ="/">Browse</Link>
            <Link to="/">Cart <FaCartPlus/></Link>
        </div> 

         <div className="sidedrawer_accounts">
         {account?<div><VscAccount/></div> : <div className="setup">
              <Link to="/signup"><span>SignUp </span></Link>   <Link to="/login"><span>&nbsp; Login </span>  </Link> 
               </div>}
         </div>

         <div className="sidedrawer_reachus">
             <p className="about">Reach Us Here</p>
             <div className="links">
             <a className="twitter"  href ="https://www.twitter.com"  rel="noreferrer" target="_blank"><FaTwitter/></a>
                <a className="facebook" href = "https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
                <a className="instagram" href = "https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
             </div>
         

          </div>
              
                
         </div>
     
    )
}

export default sideDrawer;