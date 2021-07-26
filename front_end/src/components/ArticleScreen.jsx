import './articlescreen.css';
import { useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getArticleDetail } from '../redux/actions/articleActions';

export const ProductScreen = ({match}) => {

    const dispatch = useDispatch();
    const getArtDetail = useSelector(state=>state.getArticleDetail);

    const {article,error,loading} = getArtDetail;
    
    useEffect(()=>{
            if(article&& match.params.id !== article._id){
                dispatch(getArticleDetail(match.params.id));
            }
    },[dispatch,article,match]);

    return (
        <div className="articlescreen">
            {
                loading? <h2>getting product information ...</h2> : error? <h2> product unavailable please go back </h2> : (
                 <>
                    <div className="articlescreen_top">
                    <div className="articlescreen_img">
                        <p className="title">
                            {article.title}
                        </p>
                        <img src={article.imageUrl}/>
                    </div>
                    </div>
                    
                    <div className="articlescreen_bottom">
                        <p className="authorname">
                        {article.authorName + "( Author )"}    
                        </p>
                        
                        <div className="description">
                            <p>Description</p>
                            {article.description}    
                        </div> 
                        {
                            article.price === 0 ?<button className="download btn"> <a href={article.contentUrl} download>  Download </a>  </button> :   <button className="buy btn">
                            Add to Cart
                           </button>
                        }
                        
    
                        
                    </div>                    

                 </>       
                )}
                
           
           </div>
    )
}
