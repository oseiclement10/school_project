import './sharePage.css';
import { Link } from 'react-router-dom';
import {FaShare} from 'react-icons/fa';

 const sharePage = ({show}) => {
    return (
       show && <Link to="/products/upload"><div className="sharepage" >
     
       <FaShare/>
   </div></Link>
    )
}

export default sharePage;
