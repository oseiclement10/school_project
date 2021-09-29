import './LoginFail.css';
import Login from './login';
import {toast} from 'react-toastify';

export const LoginFail = () => {
  const logFail =()=>{
      console.log("checking something");
      toast.error('incorrect login credentials',{
          position:toast.POSITION.TOP_CENTER,
          autoClose:2000,
      });
  }

    return (
        <div className="loginfail">
          <Login err={true} errFunc={logFail}/>
        </div>
    )
}
