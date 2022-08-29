import { Link } from "react-router-dom";
import "../components/css/homepage.css"


function AddHotels(){

    
    
    return(
        <div className="MainDiv">
            <div className="Header">
                <h1>WELCOME TO LAXURIOUS HOTELS ZA</h1>
            </div>
            <div className="subDiv">
                <span className="link1">
                    <Link style={{ color: 'white' }} to="/bookings">Book Apointment</Link>
                </span>
                <span className="link2">
                    <Link style={{ color: 'white' }} to="/explore">Explore</Link>
                </span>
                <span className="link3">
                    <Link style={{ color: 'white' }} to="/services">About Us</Link>
                </span>

            </div>

            <div className="content">
                <div className="first">
                    <img className="picture1" src="/images/dining.jpg" alt="dining room"/>
                    <img className="picture2" src="/images/hall.jpg" alt="second picture"/>
                    <img className="picture3" src="/images/reception.jpg" alt="third picture"/>
                    <img className="picture4" src="/images/Room 1.jpg" alt="fourth picture"/>
                    <img className="picture5" src="/images/Room2.jpg" alt="fifth picture"/>
                    <img className="picture6" src="/images/sample.jpg" alt="sixth picture"/>  
                </div>

                <div className="footer">
                    <h3 className="contact">CONTACT US</h3>
                    <img className="whatsapp" src="/images/whatsapp.png" alt="whatsapp"/>
                    <img className="facebook" src="/images/facebook.png" alt="facebook"/>
                    <img className="twitter" src="/images/twitter.png" alt="twitter"/>
                    <img className="instagram" src="/images/instagram.png" alt="instagram"/>
                    <h5 className="h5Whatsapp">WHATSAPP -068 504 2824</h5>
                    <h5 className="h5Facebook">LAXARIOUS HOTELS ZA</h5>
                    <h5 className="h5Twitter">LAXARIOUS_HOTELS_ZA</h5>
                    <h5 className="h5Instagram">LAXARIOUS HOTELS@ZA</h5>
                
                </div>

            </div>
            

        </div>
    )
}

export default AddHotels;