import './sharePage.css';
import { Link } from 'react-router-dom';
import {FiShare} from 'react-icons/fi';

 const sharePage = ({show}) => {
    return (
       show && <Link to="/products/upload"><div className="sharepage" >
       <FiShare/>
   </div></Link>
    )
}

export default sharePage;
