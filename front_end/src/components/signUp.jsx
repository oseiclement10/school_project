import './signup.css';
import { useState } from 'react';

 const SignUp = () => {
   
    const validator = (e) =>{
      console.log("function call works")
      
      console.log(e);
      let name = document.getElementById('name');
      let username = document.getElementById('username');
      let email = document.getElementById('email');
      let password = document.getElementById('password');
      let password2 = document.getElementById('password2');

      if(name.value === ""){
        name.focus();
        name.style.boxShadow='0px 4px 8px 0px rgba(0,0,0,0.2)';
        e.preventDefault();
        return;
      }else if(username.value === ""){
        username.focus();
        e.preventDefault();
        return;
      }else if(email.value===""){
        email.focus();
        e.preventDefault();
        return;
      }else if(password.value===""){
        
        password.focus();
        e.preventDefault();
        return;
      }else if(password2.value === ""){
        
        password2.focus();
        e.preventDefault();
        return;
      }else if(password.value !== password2.value){
        alert("passwords do not match");
        password.focus();
        password2.focus();
        e.preventDefault();
        return;
      }
      console.log("sent !!!!");
     
      

    }


    const [isStudent,setStudent] = useState(false);

    return (
        <div className="signup_container">
          <div className="signup_header">
            <h2>Create Account</h2> 
          </div>
            <form action="/users/signup" method="POST" onSubmit={(e)=>validator(e)}>
              <div className="personal_details">
                <label htmlFor="name">name :</label>
                <input type="text" name="name" id="name" placeholder="enter your name" required/>

                <label htmlFor="contact">contact :</label>
                <input type="tel" name="contact" id="contact" placeholder="enter your contact"/>

                <label htmlFor="socials">socials :</label>
                <input type="text" name="socials" id="socials" placeholder="enter socials egs: twitter @yourusername"/>

                <div className="genderr">
                 <label htmlFor="gender" >gender :</label>
                 <select name="gender" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non binary</option>  
                 </select> 
               </div>
              </div>
              
              <div className="account_details">
                <label htmlFor="username">username :</label>
                <input type="text" name="username" id="username" placeholder="enter username" required/>
               
                <label htmlFor="name">email :</label>
                <input type="email" name="email" id="email" placeholder="enter email"/>
               
                <label htmlFor="password">password :</label>
                <input type="password" name="password" id="password" placeholder="enter password" required/>
               
                <label htmlFor="password2">re-enter password</label>
                <input type="password" name="password2" id="password2" placeholder="re-enter password"required/>

                <label htmlFor="momo">mobile money account  :</label>
                <input type="tel" name="momo" id="momo" placeholder="enter momo number"/>

              </div>
              <p className="caption">Fill Profession Details</p>
  
              <div className="account_extras">
               
              
              <div className="job">
                
              <input type="text" name="job" id="job" placeholder="enter current job you can skip if you're a student .." />
                </div>
                <div className="checker">  
              
                
                <label htmlFor="student"><p className="green">check this if you are a student &nbsp; &nbsp; &nbsp;</p></label>
                 <input type="checkbox" name="isStudent" id="student" value={isStudent} onChange={()=>setStudent(!isStudent)}/>

                </div>
               

               { isStudent && <div className="student_details">
                   <label htmlFor="school"> School </label> 
                    <input type="text" name="school_name" id="school" placeholder="enter your schoolname"/> 
                    <label htmlFor="courses">Courses :</label> 
                    <input type="text" name="school_courses" id="courses" placeholder="enter your program    .."/>
               </div>
              }
               <p className="caption">Select Intrests ...</p>
              <div className="intrests">
                
              <div className="sci intrest">
                 <label htmlFor="science">science</label>&nbsp;&nbsp;
                 <input type="checkbox" name="science" id="science"  />
              </div>
            <div className="tech intrest">
              <label htmlFor="technology">technology</label>&nbsp;&nbsp;
              <input type="checkbox" name="technology" id="technology" />
            </div>
            <div className="lit intrest">
              <label htmlFor="literature">literature</label>&nbsp;&nbsp;
              <input type="checkbox" name="literature" id="literature" />
            </div>
            <div className="bio intrest">
              <label htmlFor="biology">biology</label>&nbsp;&nbsp;
              <input type="checkbox" name="biology" id="biology" />
            </div>
            <div className="infas intrest">
              <label htmlFor="infastructure">Infastructure</label>&nbsp;&nbsp;
              <input type="checkbox" name="infastructure" id="infastructure" />
            </div>
            <div className="engin intrest">
              <label htmlFor="engineering">engineering</label>&nbsp;&nbsp;
              <input type="checkbox" name="engineering" id="engineering" />
            </div>
            <div className="cryp intrest">
             <label htmlFor="cryptography">Cryptography</label>&nbsp;&nbsp;
             <input type="checkbox" name="cryptography" id="cryptography" />
            </div>
            <div className="sports intrest"> 
              <label htmlFor="sports">Sports</label>&nbsp;&nbsp;
              <input type="checkbox" name="sports" id="sports" />
            </div>
            <div className="comsci intrest">
              <label htmlFor="computersciences">Computer Science</label>&nbsp;&nbsp;
              <input type="checkbox" name="computersciences" id="computersciences" />
            </div>
            <div className="ai intrest">
            <label htmlFor="aritificialintelligence">Artificial Intelligence</label>
            &nbsp;&nbsp; 
            <input type="checkbox" name="artificialintelligence" id="artificialintelligence" />
            </div>
            <div className="busi intrest">
              <label htmlFor="business">Business</label>&nbsp;&nbsp;
              <input type="checkbox" name="business" id="business" />
            </div>
            <div className="fashi intrest">
              <label htmlFor="fashion">fashion</label>&nbsp;&nbsp;
              <input type="checkbox" name="fashion" id="fashion" />
            </div>
            </div>

              </div>
               
               <input type="submit"  value= "create account  "/>
            </form>
           
        </div>
    )
}
export default SignUp;
