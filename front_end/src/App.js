import './App.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'; 
import { useState,useEffect} from 'react';
import {  useDispatch, useSelector} from 'react-redux';
import {getUserr} from './redux/actions/userActions';
import HomeScreen from './components/homescreen';
import Header from './components/header';
import Login from './components/login';
import SignUp from './components/signUp';
import BackDrop from './components/backDrop';
import SideDrawer from './components/sideDrawer';
import Upload from './components/upload';
import { ProductScreen } from './components/ArticleScreen';
import CartScreen from './components/CartScreen';
import { About } from './components/About';
import { Search } from './components/Search';
toast.configure();
function App() {

    const logToast=()=>{
       toast(' logg out sucess ',{
         position:toast.POSITION.TOP_LEFT,
         autoClose:1000
       });
    }
    const hideHamburger = ()=>{
      let harm=document.getElementById("harmburger1");
      harm.style.display="none";
    }

    const showHamburger = ()=>{
      let harm=document.getElementById("harmburger1");
      harm.style.display="flex";
    }
    
    const dispatch = useDispatch();
    const [toggleSides,setToggleSides] = useState(false);
    const getUser = useSelector(state=>state.currentUser);
    
    useEffect(()=>{
      dispatch(getUserr())
    },[dispatch]);
    let {user,islogged} = getUser;

  return (

    <Router>
      <Header show = {()=>{setToggleSides(true);hideHamburger()}} toggle ={toggleSides} userlogged = {user} islogged={islogged} notifyLogOut={logToast}/>
      <SideDrawer display = {toggleSides} close={()=>{setToggleSides(false);showHamburger()}} />
      <BackDrop down={()=>setToggleSides(false)} show={toggleSides}  harmburger={showHamburger}/>
      

      <main>
       <Switch>
       <Route exact path = "/" component={HomeScreen}></Route>
       <Route exact path = "/search/" component={HomeScreen}></Route>
       <Route exact path = "/search/:id" component={Search}></Route>
       <Route exact path ="/article/:id" component ={ProductScreen}></Route>
       <Route exact path = "/login" component={Login} ></Route>
       <Route exact path = "/signup" component={SignUp}></Route>
       <Route exact path="/cart" component={CartScreen}></Route>
       <Route exact path="/articles/upload" component={Upload}></Route>
       <Route exact path ="/about" component={About}></Route>
       </Switch> 
      </main>
      

    </Router>

    
  );
}

export default App;
