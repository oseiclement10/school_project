import './About.css';
import {Footer} from './Footer';
export const About = () => {
    return (
        <>
        <div className="aboutus">
            <div className="heading">
                <p id="abs">About Us</p>
                <p > <span id="wts"> Welcome To ShareLearn.org</span></p>
            </div>
            <div className="description">
                <p>
                ShareLearn is an online platform with a mission to help students and 
                authors share research freely and securely. Also authors of these articles
                can earn through our services.
    
                </p>
                <br />
                <p>
                 I believe that this platform can help connect students and teachers accross
                 the country and help them contribute to developing the nation as a whole through research development.
                 Sharelearn will make it very easy and convenient to share research as easily and
                 free as possible. However authors may indicate whether they wish to sell their
                 articles or not .
                </p>     
                <br />       
                <p>
                By Design my main goal is to make research on peculiar and difficult subjects 
                available to students and other intrested people. Also I hope sharelearn 
                can strengthen the ecosystem and margin around sharing research .
                </p>
                <br />
                <p>
                Also if you are an author or have a bookclub and wish to share books 
                you can be an affiliate and share your books with us. Contact us to
                via email in the specified contact us below.
                </p>
                <br />
                <br />


                <p>

                </p>
            </div>
            <div className="faqs">
                <div className="faqs_heading">
                    <h3>FAQ'S</h3>
                    <p>
                      &nbsp; &nbsp;   Do you have questions? Read the FAQ or please 
                        <a href="mailto:clemzymillz@gmail.com"> Contact Us</a>
                    </p>
                </div>
                <div className="faqs_content">
                <div className="faqss">
                <h4>
                     How To Share an article ?
                 </h4>
                 <p>
                     <li>Create an account if you don't have one already</li>
                     <li>Log into your account</li>
                     <li>Click on share button on the navbar if you are using a PC or 
                         click on the harmburger menu and click on share
                     </li>
                     <li>
                         Fill out the all required information and submit
                     </li>
                   
                        <i>Note that you have to have an account before you can share  </i> 
                     
                 </p>
                </div>
                </div>
                <div className="faqss">
                 <h4>
                 How do I get paid for the articles i wish to share at a price ?
                 </h4>
                 <p>
                     When creating an account we ask of a mobile money number
                     article purchase will be transfered to that mobile money number

                 </p>
                </div>

                <div className="faqss">
                    <h4>
                        How do i set up an account?
                    </h4>
                    <p>
                        Click on signup and fill out all required details
                    </p>
                </div>

                <div className="faqss">
                    <h4>
                        Does sharelearn allow for in-store pickup?
                    </h4>
                    <p>
                        Sharelearn does not feature in-store pickup.
                    </p>
                </div>
            </div>
            
            <div className="note">
               <p>Sharelearn's platform is currently in development and testing 
                ,many improvements will be done before its final release
                 </p> 
                 <br />
                <p>
                    Also most of the articles here are mockups . We are advertising and waiting
                    for authors to begin sharing their articles here , then we can use real products.
                    Thank You.
                    </p> 
            </div>
        </div>
        <Footer/>
        </>
    )
}
