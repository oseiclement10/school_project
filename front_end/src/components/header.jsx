import './header.css';
import SharePage from './sharePage';
import {Link,NavLink} from 'react-router-dom';
import {FaTwitter,FaInstagram,FaFacebook,FaCartPlus} from 'react-icons/fa';
import {VscAccount} from 'react-icons/vsc';
import {useDispatch} from 'react-redux';
import {logOutUser} from '../redux/actions/userActions';
 const Header = ({show,islogged,notifyLogOut}) => {

      let dispatch = useDispatch();
      let logout = () => {
        dispatch(logOutUser());
        notifyLogOut();
    }
      

    return (
        <div className="header"> 
            <div className="header_logo">
                <h2>
                <NavLink to="/" exact activeClassName="active" className="home page">Home</NavLink> 
                &nbsp; &nbsp; &nbsp; &nbsp;
                 <Link to ="/"  className="homelogo" id="logo1">  shareLearn.org</Link> 
                </h2>   
            </div>
            
        <div className="header_links">
                <a className="twitter"  href ="https://www.twitter.com"  rel="noreferrer" target="_blank"><FaTwitter/></a>
                <a className="facebook" href = "https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
                <a className="instagram" href = "https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                
               
                <NavLink to="/cart" className="page" activeClassName="active"><div className="cart"><FaCartPlus/>Cart</div></NavLink>
                
                <SharePage classname="sharepage"/>
           
           </div>

        <div className="header_account">
            
            { islogged ? <div className="logger" onClick={()=>logout()}><VscAccount/> <span> Logout </span></div> : <div className="setup">
              <NavLink to="/signup" activeClassName="active"><span>SignUp </span></NavLink> | <NavLink to="/login" activeClassName="active"><span >Login </span>  </NavLink> 
              
               </div>}  

             <NavLink to="/about" className="about" activeClassName="active">| About</NavLink>  
        </div>
        <div className="harmburger_menu" id="harmburger1" onClick={()=>show()}>
            <div></div>
            <div></div>
            <div></div>
        </div>

           </div>
        
    )
}
export default Header;