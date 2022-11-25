import React from "react";
import "./footer.css";

const footer = () => {
    return(
    <footer className="main-bid">
    <div className="bid-top"></div>
        <div className="bid">

           <div className="topncol">
              <div className="leftncol">
              <img src="assets/landingex/footer logo.png" alt="" className="logo"/>
              <ul className="footnrow">
                 <li className="about">About Us</li>
                 <li>Careers</li>
                 <li>Weather News</li>
                 <li>Weathery Business</li>
                 <li>FAQs</li>
                 <li>Contact Us</li>
              </ul>
              </div>
              <div className="rightncol">
                  <h3 className="down">Download the mobile App</h3>
                  <div className="but">
                  <img src="assets/landingex/app store.png" alt="" className="ap"/>
                  <img src="assets/landingex/play store.png" alt="" className="ps"/>
                  </div>
              </div>
           </div>
           <hr className="linehr" />
           <div className="downncol">
               <p className="copyright">© 2022 Weathery, All rights reserved to Team Gear</p>
               <div className="copnleft">
                <div className="ic"><img src="assets/landingex/globe (1).png" alt="" className="globe"/><p className="para">English</p></div>
                <div className="ic"><img src="assets/landingex/uk flag.png" alt="" className="flag"/><p className="para">United Kingdom</p></div>
                <div className="ic"><img src="assets/landingex/person.png" alt="" className="self"/><p className="para">Customer Support</p></div>
               </div>
           </div>
        </div>
    </footer>
    )
}
export default footer;