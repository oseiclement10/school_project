import './sharePage.css';

import {useSelector} from 'react-redux';
import { Link} from 'react-router-dom';
import {FiShare} from 'react-icons/fi';
import { toast } from 'react-toastify';



 const SharePage = ({classname}) => {
     const isUserr = useSelector(state=>state.currentUser);
     let {islogged} = isUserr;
     const alertUser = () =>{
         toast.error("You have to log in first",{
             position:toast.POSITION.TOP_CENTER,
             autoClose:1000
         })
     }

    return (
        <>  
       {islogged ? <Link to="/articles/upload" ><div className={classname} >share<FiShare/> </div></Link> : <Link to="/login"  onClick={()=>alertUser()}><div className={classname} >share<FiShare/> </div></Link>}  
        </>
    )
}

export default SharePage;
