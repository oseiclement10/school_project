import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'; 
import { useState } from 'react';
import './App.css';
import HomeScreen from './components/homescreen';
import Header from './components/header';
import Login from './components/login';
import SignUp from './components/signUp';
import BackDrop from './components/backDrop';
import SideDrawer from './components/sideDrawer';
import SharePage from './components/sharePage';
import Upload from './components/upload';
function App() {

  const [toggleSides,setToggleSides] = useState(false);
  const [userExist,setUserExist] = useState(true);

  return (
    <Router>
      
      <Header show = {()=>setToggleSides(true)} toggle ={toggleSides} />
      <SideDrawer display = {toggleSides} close={()=>setToggleSides(false)}/>
      <BackDrop down={()=>setToggleSides(false)} show={toggleSides}/>
      <SharePage show={userExist} />
      
      {/*  */}
      
      {/* Navigations */}
        {/* Backdrop */}
        {/* sidedrawer */}
        {/* Navbar */}
      {/*  */}

      <main>
       <Switch>
       <Route exact path = "/" component={HomeScreen}></Route>
       <Route exact path = "/login" component={Login}></Route>
       <Route exact path = "/signup" component={SignUp}></Route>
       <Route exact path="/products/upload" component={Upload}></Route>
       <Route exact path = "/" component={HomeScreen}></Route>
       </Switch> 
    {/* homescreeen */}
         {/* various cartegories*/}
         {/* slideshow */}
      {/*  */}
      {/* other screens */}
      {/* upload page */}
      {/* individual product page */}
      {/* charts */}

      </main>
      

    </Router>

    
  );
}

export default App;
