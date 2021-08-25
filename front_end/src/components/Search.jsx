import './search.css';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import Article from './Article';

export const Search = ({match}) => {
     const allArticles = useSelector(state=>state.articles);
     const {articles} = allArticles;
     let [found,setFound]=useState([]);
     useEffect(()=>{
     setFound(articles.filter(elem=>elem.title.toLowerCase().includes(match.params.id.toLowerCase().substring(0,(match.params.id.length/2))))     
     )},[match,articles]);

    return (
        <div className="searchpage">
            
           <div className="searchtitle">
               <p id="title">
                   search results for "{match.params.id}"
               </p>
           </div>

                {
                    found.length===0? <p id="noarticles">No articles found</p> :
                    <div className="searchresults">
                    {
                        found.map((elem,index)=><Article
                        key={index}
                        articleId= {elem._id}
                       name = {elem.title}
                       price = {elem.price}
                       description = {elem.description}
                       imgUrl = {elem.imageUrl}
                       author = {elem.authorName}
                       contentUrl = {elem.authorName}
                       date = {elem.date}
                        />)
                    }
               </div>

                }

                              
           
        </div>
    )
}
