import './articlescreen.css';
import { useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getArticleDetail } from '../redux/actions/articleActions';
import {addToCart} from '../redux/actions/cartActions'; 

import {GiCheckMark} from 'react-icons/gi';
import { Link } from 'react-router-dom';
export const ProductScreen = ({match,history}) => {

    const dispatch = useDispatch();
    const getArtDetail = useSelector(state=>state.getArticleDetail);
    const getUser = useSelector(state=>state.currentUser);
    const {islogged} =getUser;
    const {article,error,loading} = getArtDetail;
    
    useEffect(()=>{
            if(article&& match.params.id !== article._id){
                dispatch(getArticleDetail(match.params.id));
            }
    },[dispatch,article,match]);

    const addToCartHandler = () =>{
        dispatch(addToCart(article._id));
        history.push("/cart");
    }

    return (
        <div className="articlescreen">
            {
                loading? <h2>getting article information ...</h2> : error? <h2> article unavailable please go back </h2> : (
                 <>
                    <div className="articlescreen_top">
                    <div className="articlescreen_img">
                        <p className="title">
                            {article.title}
                        </p>
                        <img src={article.imageUrl} alt={article.title}/>
                    </div>
                    </div>
                    
                    <div className="articlescreen_bottom">
                       <Link to={`/author/${article.authorId}`} id="authorIdentifier">

                        <p className="authorname">
                        {article.authorName + "( Author )"}    
                        </p>   
                        
                        </Link> 
                        
                        {article.price===0? <div className="description_free"> <p>Free <GiCheckMark/></p></div> :<div className="description_free"><p>${article.price}</p></div> } 
                        
                        <div className="description">
                           <p>Description</p>
                           {article.description}    
                        </div> 
                        {
                            (islogged&&article.price ===0)? <a className="download btn" href={article.contentUrl}> Download </a>
                           : (islogged && article.price !==0)?<a className="download btn" href="#2" onClick={()=>addToCartHandler()}>Add to Cart</a> : 
                            (!islogged && article.price===0)?<Link to="/login" className="download btn">Login to Download</Link> :
                             <Link to="/login" className="download btn">Login to Purchase </Link> 
                       }
                        
    
                        
                    </div>                    

                 </>       
                )}
                
           
           </div>
    )
}
