import './Footer.css';
import {FaTwitter,FaFacebook,FaInstagram} from 'react-icons/fa';
export const Footer = () => {
    return (
        <div className="footer">     
                
                
                <div className="reachus">
                <a className="twitter"  href ="https://www.twitter.com"  rel="noreferrer" target="_blank"><FaTwitter/></a>
                <a className="facebook" href = "https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
                <a className="instagram" href = "https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                </div>
                <p><i> &copy; clemzy.org , August 2021 </i></p> 
        </div>
    )
}
