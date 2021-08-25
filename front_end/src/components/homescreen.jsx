import React from 'react'
import { useEffect } from 'react';
import Article from './Article';
import {Link} from 'react-router-dom'; 
import { Footer } from './Footer';
import {useSelector,useDispatch} from 'react-redux';
import {getAllArticles} from '../redux/actions/articleActions';
import {FaSearch} from 'react-icons/fa';
import { useState } from 'react';
import './homescreen.css';

 const Homescreen = () => {
     const dispatch = useDispatch();
     const  getArticles = useSelector(state=>state.articles);
     const {articles,loading,error} = getArticles;
     const [searchArticle,setSearchArticle] = useState("");

     useEffect(()=>{
            dispatch(getAllArticles())
        },[dispatch]);

    return (
        <>
        <div className="homesearch">
           <p>
               Share Your Articles Freely
           </p>
          
           <div className="homesearch_search">
               <input type="text" name="" id="" placeholder="search article ... " value={searchArticle} onChange={(e)=>setSearchArticle(e.target.value)}/>
               <Link to={`/search/${searchArticle}`}><div className="divsearch"><FaSearch id="search"/></div></Link>  
           </div>

      </div>
        <div className="homescreen">
         { error? "" : <h2 className="homescreen_title">
                Trending Articles      
         </h2>          } 
        
         <div className="homescreen_articles">
         {loading ? <h2>Loading ... </h2>:error?<h2>We will be right back .....</h2>:
         articles.map((article,index)=><Article
         key={index}
         articleId= {article._id}
         name = {article.title}
         price = {article.price}
         description = {article.description}
         imgUrl = {article.imageUrl}
         author = {article.authorName}
         contentUrl = {article.authorName}
         date = {article.date}
         />)
         }
         </div>
         
         
        </div>
        {loading ? "": error?"":<Footer/>}
       
        </>
        
    )
}
export default Homescreen;
