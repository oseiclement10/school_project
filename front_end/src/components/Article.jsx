import './Article.css'
import {Link} from 'react-router-dom';

 const Product = ({name,price,description,imgUrl,articleId,date,author}) => {
    return (
        <div className="article">
          <img src={imgUrl} alt={name} />

          <div className="article_info">
           <p className="article_name">
               {name} 
           </p>
           <p className="description">
               {description.substring(0,100)} ...
           </p>

            <div className="author">
                <p className="author_name"> by {author} </p>
               
            </div>
           <Link to = {`/article/${articleId}`} className="view_button">View</Link>
           </div>

        </div>
    )
}

export default Product;