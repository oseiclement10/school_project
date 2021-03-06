import './upload.css';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import {AiOutlineRead} from 'react-icons/ai'
 const Upload = () => {
     const currentUser = useSelector(state=>state.currentUser);
     const {islogged} = currentUser;

     
     console.log(currentUser.user.username);
     const __user = islogged? currentUser.user.username : "";
     const [showPrice,setShowPrice] = useState(true);
    
     return (
        <div className="upload_container">
            <div className="upload_header">
                <h2>Share Articles or Research </h2>
                <AiOutlineRead id="read"/>
            </div>
            <form action="/products" method="POST"  encType="multipart/form-data">
                <div className="form_container">
                    <label htmlFor="title">
                        Title of Article :
                    </label>
                    <input type="text" name="title" id="title" placeholder="enter name or title of article here ..." required/>
                    <label htmlFor="authorName">
                        Author name :
                    </label>
                    <input type="text" name="authorName" id="authorname" value={__user} readOnly/>
                   
                    <div className="pricing">
                    <label htmlFor="pricing" className="ignore" id="exception">Is it free ?  </label>
                      <span> &nbsp; yes</span>  <input type="checkbox" name="pricing_yes" id="pricing" onChange={()=>setShowPrice(!showPrice)} checked={showPrice}/>
                      &nbsp;<span>&nbsp;no</span> <input type="checkbox" name="pricing_no" id="pricing" checked={!showPrice} onChange={()=>setShowPrice(!showPrice)}/>
                    </div>

                   {!showPrice && <div className="price">
                    <label htmlFor="price">Enter price here</label>
                    <input type="number" name="price" id="price" placeholder="enter price in GHS .00 "/>
                    </div>}
                    <label htmlFor="description">Write a description of the article</label>
                    <textarea name="description" placeholder="not more than 100 words .." id="description" required ></textarea>
                   
                    <div className="content_cont">
                    <label htmlFor="content">Upload content of article here in the form of a file</label>
                    <input type="file" name="contentUrl" id="contentUrl" required accept=".txt,.doc,.pdf,.rtf,.docx"/>
                    </div>

                     <div className="img_upload">
                         
                     <label htmlFor="image">Upload image here in form of Jpeg or Png Only</label>
                    <input type="file" name="imageUrl" id="imageUrl" required accept="image/*"/> <br />
                    <strong >this image will be used to style your article so it should at least describe the article</strong>
                     </div>

                     <div className="relatedfields_cont">
                         <label htmlFor="relateFields">Tick the fields the article relates to</label>
                         <div className="relatedfields">
                         <div className="sci intrest">
                                    <label htmlFor="science" className="ignore">science</label>&nbsp;
                                    <input type="checkbox" name="science" id="science" />&nbsp;&nbsp;
                            </div>
                         <div className="tech intrest">
                                    <label htmlFor="technology" className="ignore">technology</label>&nbsp;
                                    <input type="checkbox" name="technology" id="technology" />&nbsp;&nbsp;
                            </div>
                            <div className="lit intrest">
                                <label htmlFor="literature" className="ignore">literature</label>&nbsp;
                                <input type="checkbox" name="literature" id="literature" /> &nbsp;&nbsp;
                            </div>
                            <div className="bio intrest">
                                <label htmlFor="biology " className="ignore">biology</label>&nbsp;
                                <input type="checkbox" name="biology" id="biology" />&nbsp;&nbsp;
                            </div>
                            <div className="infas intrest">
                                <label htmlFor="infastructure " className="ignore">Infastructure</label>&nbsp;
                                <input type="checkbox" name="infastructure" id="infastructure" />&nbsp;&nbsp;
                            </div>
                            <div className="engin intrest">
                                <label htmlFor="engineering "className="ignore">engineering</label>&nbsp;
                                <input type="checkbox" name="engineering" id="engineering" />&nbsp;&nbsp;
                            </div>
                            <div className="cryp intrest">
                                <label htmlFor="cryptography "className="ignore">Cryptography</label>&nbsp;
                                <input type="checkbox" name="cryptography" id="cryptography" />&nbsp;&nbsp;
                            </div>
                            <div className="sports intrest"> 
                                <label htmlFor="sports"className="ignore">Sports</label>&nbsp;
                                <input type="checkbox" name="sports" id="sports" />&nbsp;&nbsp;
                            </div>
                            <div className="comsci intrest">
                                <label htmlFor="computersciences " className="ignore">Computer Science</label>&nbsp;
                                <input type="checkbox" name="computersciences" id="computersciences" />&nbsp; &nbsp;
                            </div>
                            <div className="ai intrest">
                            <label htmlFor="aritificialintelligence" className="ignore">Artificial Intelligence</label>
                            &nbsp; 
                            <input type="checkbox" name="artificialintelligence" id="artificialintelligence" />&nbsp;&nbsp;
                            </div>
                            <div className="busi intrest">
                                <label htmlFor="business " className="ignore">Business</label>&nbsp;
                                <input type="checkbox" name="business" id="business" />&nbsp;&nbsp;
                            </div>
                            <div className="fashi intrest">
                                <label htmlFor="fashion "className="ignore">fashion</label>&nbsp;
                                <input type="checkbox" name="fashion" id="fashion" />&nbsp;&nbsp;
                            </div>
                                            </div>
                     </div>
                     <div className="submitcontroller">
                     <input type="submit" name="submit" id="submit" value ="submit article" />     
                     </div>  
                </div>
            </form>
            
        </div>
    )
}

export default Upload;
