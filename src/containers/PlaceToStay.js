import React from "react";
import loadingicon from "../assets/loadingicon.png";
import subframe1 from "../assets/subframe/subframe1.png";
import subframe2 from "../assets/subframe/subframe2.png";
import subframe3 from "../assets/subframe/subframe3.png";
import subframe4 from "../assets/subframe/subframe4.png";
import subframe5 from "../assets/subframe/subframe5.png";
import subframe6 from "../assets/subframe/subframe6.png";
import subframe7 from "../assets/subframe/subframe7.png";
import subframe8 from "../assets/subframe/subframe8.png";
import subframe9 from "../assets/subframe/subframe9.png";
import subframe10 from "../assets/subframe/subframe10.png";
import subframe11 from "../assets/subframe/subframe11.png";
import subframe12 from "../assets/subframe/subframe12.png";
import subframe13 from "../assets/subframe/subframe13.png";
import subframe14 from "../assets/subframe/subframe14.png";
import subframe15 from "../assets/subframe/subframe15.png";
import subframe16 from "../assets/subframe/subframe16.png";
import starrolls from "../assets/starrolls.svg";
import metalogowhite from "../assets/metalogowhite.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import metabnblogofooter from "../assets/metabnbfooterlogo.png";
// import brandLogo from "../assets/MetabnbLogo.png";
// import homeicon from "../assets/Home.png";
// import { Link } from "react";
import Navbar from "../components/Navbar";

export default function PlaceToStay({ showModal, setShowModal }) {
  return (
    <>
      <div className="placetostay">
        <Navbar showModal={showModal} setShowModal={setShowModal}/>
        <div className="otherlinks">
          <ul>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>fantasy city</li>
            <li>beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
            <div className="loading">
              <p>Loading</p>
              <img src={loadingicon} alt="loadingicon"></img>
            </div>
          </ul>
        </div>
        <div className="inspiration">
          <div className="allframes">
            <div className="one">
              <img src={subframe1} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe2} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe3} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe4} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe5} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe6} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe7} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe8} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe9} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe10} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe11} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe12} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe13} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe14} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe15} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
            <div className="one">
              <img src={subframe16} alt="frame1"></img>
              <div className="locationdesc">
                <div className="locationdescone">
                  <p>Desert king</p>
                  <p>IMBT per night</p>
                </div>
                <div className="locationdesctwo">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={starrolls} alt="starrolls" className="starrolls"></img>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer foot2">
        <div className="footergrid">
          <div className="alllogos">
            <img src={metalogowhite} alt="metalogowhite" />
            <div className="socialicons">
              <div>
                <img src={facebook} alt="facebooklogo" />
              </div>
              <div>
                <img src={instagram} alt="facebooklogo" />
              </div>
              <div>
                <img src={twitter} alt="facebooklogo" />
              </div>
            </div>
          </div>
          <div className="footersubgrid">
            <div>
              <h2>Community</h2>
              <ul>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
              </ul>
            </div>
            <div>
              <h2>Places</h2>
              <ul>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
              </ul>
            </div>
            <div>
              <h2>About us</h2>
              <ul>
                <li>Road map</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <img
            src={metabnblogofooter}
            alt="footerlogo"
            className="footerlogo"
          />
        </div>
      </footer>
    </>
  );
}
