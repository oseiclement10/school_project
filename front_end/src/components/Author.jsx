import './Author.css';
import Article from './Article';
import { useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getAuthor} from '../redux/actions/authorActions';
import {IoMdMail} from 'react-icons/io';
 
export const Author = ({match}) => {
    const dispatch = useDispatch();
    const authorDetails = useSelector(state=>state.author);
    const articleDetails = useSelector(state=>state.getArticleDetail);
    const allArticles = useSelector(state=>state.articles);
    const {article} = articleDetails;
    const {author,error} = authorDetails;
    const {articles} = allArticles;

    useEffect(()=>{
        if(article&&article.authorId===match.params.id){
            dispatch(getAuthor(match.params.id));
        }
        
    },[dispatch,match,article]);
    let author_articles= articles.filter((elem)=>elem.authorId===match.params.id);
    return (
        <div className="author_container">
            <div className="author_heading">
                <p>Author's Profile</p>
            </div>
            <div className="author_avi">
            
            </div>

      { (error||author.name === undefined) ? <div className="authorloadfail"> <p> loading Author Details failed try some time later .. </p> <p> Thank you</p>  </div> :
      
           <div className="author_combo">

           <div className="author_description">

                <p id="authorname">{author.name}</p>


                <p>  
                {author.profession.job?`I work as a ${author.profession.job}`:
                `I am a student at ${author.profession.school} offering 
                ${author.profession.courses.join(" , ")}`}</p> 
                <p>I'm interested in {author.intrests.join(" , ")}</p> 
                <div className="reachauthor">
                <p id="mailme">You can reach me via 
                <a href={`mailto:${author.email}`} > <IoMdMail/>  {author.email} </a>    
                </p>
                </div>

            </div>
            
            <div className="author_publications">
                <p id="intro">
                    My Publications
                </p>
                <div className="author_publications_container">
                {
                    author_articles.map((elem,index)=><Article 
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
            </div>
           </div>
}
        </div>
      
    
    )
}
