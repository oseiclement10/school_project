import './Author.css';
import Product from './Article';
import {IoMdMail} from 'react-icons/io';
 
export const Author = ({match}) => {
    return (
        <div className="author_container">
           
            <div className="author_heading">
                <p>Author's Profile</p>
            </div>
            <div className="author_avi">
            
            </div>
            <div className="author_description">
                <p>I am Osei Asante Clement</p>
                <p> I'm a student of KNUST offering computer science </p>
                <p>I'm interested in computersciences , artificial intelligence and technology</p>
                <p id="mailme">You can reach me via <a href="mailto:clemzymillz@gmail.com"> <IoMdMail/></a></p>
            </div>

        </div>
    )
}
