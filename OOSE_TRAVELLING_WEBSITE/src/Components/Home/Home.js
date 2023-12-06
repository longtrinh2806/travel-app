import React from "react";
import "./Home.css";
import { BiSearch } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { PiPlayCircleLight } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import DiscountImage from "../../Assets/Images/home-discount-image.jpg";
import HightLight from "../../Assets/Images/home-hightlight-image.jpg";
import CustomerReview1 from "../../Assets/Images/customer-review-1.jpg";
import CustomerReview2 from "../../Assets/Images/customer-review-2.jpg";
import CustomerReview3 from "../../Assets/Images/customer-review-3.jpg";
import Forbes from "../../Assets/Images/forbes.jpg";
import Cnbc from "../../Assets/Images/cnbc.jpg";
import Wsj from "../../Assets/Images/wsj.jpg";
import UsaToday from "../../Assets/Images/usa-today.jpg";
import NewYorkTimes from "../../Assets/Images/new-york-times.jpg";
const Home = () => {

  return (
    <div>
      <div className="home-container">

        <div className="home-introduce">
          {/* <img src="../../../Images/home.jpg" /> */}
          <div className="introduce-content">
            <div className="title-1">Find Next Place To Visit</div>
            <div className="title-2">Discover amzaing places at exclusive deals</div>
            {/* <div className="search-form">
              <div className="search">
                <input type="text" placeholder="Keywords" />
                <BiSearch className="search-icon" />
              </div>
              <select className="destination" id="cars">
                <option value="destination">Destination</option>
                <option value="africa-adventure">Africa Adventure</option>
                <option value="africa-wild">Africa Wild</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="scandinavia">Scandinavia</option>
                <option value="western-europe">Western Europe</option>
              </select>
              <select className="duration" id="cars">
                <option value="volvo">1 Day Tour</option>
                <option value="saab">2-4 Days Tour</option>
                <option value="mercedes">5-7 Days Tour</option>
                <option value="audi">7+ Days Tour</option>
              </select>
              <input className="search-submit" type="submit" value="Search" />
            </div> */}
          </div>
        </div>
        <div className="home-wrapper">
          <div className="destination">
            <div><BiWorld className="world-icon" /></div>
            <div className="destination-content">
              <h4><span>700+ DESTINATIONS</span></h4>
              <span>Our expert team handpicked all destinations in this site</span>
            </div>

          </div>
          <div className="price">
            <div><TbDiscount2 className="discount-icon" /></div>
            <div className="price-content">
              <h4><span>BEST PRICE GUARANTEE</span></h4>
              <span>Price match within 48 hours of order confirmation</span>
            </div>
          </div>
          <div className="support">
            <div><BsPeople className="people-icon" /></div>
            <div className="support-content">
              <h4><span>TOP NOTCH SUPPORT</span></h4>
              <span>We are here to help, before, during, and even after your trip.</span>
            </div>
          </div>
        </div>
        <div className="home-popular-destination">
          {/* component popular destination */}
          <div className="popular-destination-title">Popular Destinations</div>
          <div className="view-all-destination">
            <span>View All Destinations</span>
            <span><FaLongArrowAltRight className="arrow-icon" /></span>
          </div>
        </div>
        <div className="home-popular-tours">{/* component  tour*/}
          <div className="home-popular-tours-title">Popular Tours</div>
          <div className="view-all-popular-tours">
            <span>View All Popular Tour</span>
            <span><FaLongArrowAltRight className="arrow-icon" /></span>
          </div>
        </div>
        <div className="home-discount">
          <div className="home-discount-content">
            <div className="content-1">Enjoy Summer Deals</div>
            <div className="content-2">Up to 40% Discount!</div>
            <div className="content-3"><button>LEARN MORE</button></div>
            <div className="content-4"><strong>TRAVEL</strong>TOUR</div>
            <div className="content-5">*Terms applied</div>
          </div>
          <div className="home-discount-image">
            <img src={DiscountImage} />
          </div>
        </div>
        <div className="home-recommend">
          <div className="home-recommend-title">Our Recommended</div>
          <div className="view-all-recommended">
            <span>View All Recommended</span>
            <span><FaLongArrowAltRight className="arrow-icon" /></span>
          </div>
        </div>
        <div className="home-hightligth">
          <img src={HightLight} />
          <div className="hightligth-content">
            <div className="title-1">Traveling Highlights</div>
            <div className="title-2">Your New Traveling Idea</div>
            <a><PiPlayCircleLight className="play-icon" /></a>
          </div>
        </div>
        <div className="home-customer-reviews">
          <div className="home-customer-reviews-title">Customer Reviews</div>
          <div className="slideshow-container">
            <div className="slide">
              <div className="quote-icon"><BiSolidQuoteAltLeft /></div>
              <div className="review-content"><i>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.</i></div>
              <div className="avatar-nameauthor-rate-role">
                <div className="avatar"><img src={CustomerReview1} /></div>
                <div className="nameauthor-rate-role">
                  <span className="nameauthor">JOHN SMITH</span>
                  <span className="rate">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </span>
                  <span className="role"><i>Solo Traveler</i></span>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="quote-icon"><BiSolidQuoteAltLeft /></div>
              <div className="review-content"><i>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.</i></div>
              <div className="avatar-nameauthor-rate-role">
                <div className="avatar"><img src={CustomerReview2} /></div>
                <div className="nameauthor-rate-role">
                  <span className="nameauthor">JOHN SMITH</span>
                  <span className="rate">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </span>
                  <span className="role"><i>Solo Traveler</i></span>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="quote-icon"><BiSolidQuoteAltLeft /></div>
              <div className="review-content"><i>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.</i></div>
              <div className="avatar-nameauthor-rate-role">
                <div className="avatar"><img src={CustomerReview3} /></div>
                <div className="nameauthor-rate-role">
                  <span className="nameauthor">JOHN SMITH</span>
                  <span className="rate">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span className="role"><i>Solo Traveler</i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-newsletter">
          <div className="browse-tour">
            <div className="browse-tour-title">Browse Tour By Category</div>
            <div className="browse-tour-content">
              <div className="browse-tour-content-left">
                <span>Outdoor Activites</span>
                <span>Cultural & Thematic Tours</span>
                <span>Family Friendly Tours</span>
                <span>Holiday & Seasonal Tours</span>
              </div>
              <div className="browse-tour-content-right">
                <span>City Tours</span>
                <span>Indulgence & Luxury Tours</span>
                <span>Relaxation Tours</span>
                <span>Wild & Adventure Tours</span>
              </div>
            </div>
          </div>
          <div className="newsletter">
            <div className="newsletter-title">Newsletter</div>
            <div className="newsletter-content">
              <div className="subcribe-title">Subscribe for updates & promotions</div>
              <form className="form-subscribe">
                <input type="text" id="fname" name="fname" placeholder="Your Email Address" />
                <input type="submit" value="SUBSCRIBE" />
              </form>
              <div className="contact">
                <span><FaFacebookF /></span>
                <span><FaPinterestP /></span>
                <span><BsTwitter /></span>
                <span><BsYoutube /></span>
                <span><BsInstagram /></span>
              </div>
            </div>
          </div>
        </div>
        {/* component newletter */}
        <div className="home-recent-blog"></div>
        <div className="home-feature-in">
          <div className="feature-in-title">We are featured in</div>
          <div className="say-about-us">See what others are saying about us</div>
          <div className="media-image">
            <div><img src={Forbes} /></div>
            <div><img src={Cnbc} /></div>
            <div><img src={Wsj} /></div>
            <div><img src={UsaToday} /></div>
            <div><img src={NewYorkTimes} /></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
