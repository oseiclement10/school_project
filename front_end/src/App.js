import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'; 

import './App.css';
import HomeScreen from './components/homescreen';
import Header from './components/header';
import Login from './components/login';
import SignUp from './components/signUp'
function App() {
  return (
    <Router>
      <div className="app">
      <Header/>

      {/* header */}
        {/* login */}
        {/* signup */}
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
      
    </div>
    </Router>

    
  );
}

export default App;
