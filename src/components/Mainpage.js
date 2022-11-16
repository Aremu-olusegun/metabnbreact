import React from "react";
import "../App.css";

import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import mbtoken from "../assets/mbtoken.svg";
import metamask from "../assets/svg1.svg";
import opensea from "../assets/svg2.svg";
import frame1 from "../assets/frames/frame1.png";
import frame2 from "../assets/frames/frame2.png";
import frame3 from "../assets/frames/frame3.png";
import frame4 from "../assets/frames/frame4.png";
import frame5 from "../assets/frames/frame5.png";
import frame6 from "../assets/frames/frame6.png";
import frame7 from "../assets/frames/frame7.png";
import frame8 from "../assets/frames/frame8.png";
import rotated from "../assets/rotated.png";
import starrolls from "../assets/starrolls.svg";
import metalogowhite from "../assets/metalogowhite.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import metabnblogofooter from "../assets/metabnbfooterlogo.png";

const Mainpage = () => {
  return (
    <div className="overall">
      <main className="mymain">
        <div className="heroheader">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="inputsection">
            <input
              type="text"
              placeholder="Search for location"
              className="location"
            ></input>
            <button className="search">Search something</button>
          </div>
        </div>
        <div className="imageSection">
          <div className="imagesectionone">
            <img src={image4} alt="image4" className="image4"></img>
            <img src={image6} alt="image6" className="image6"></img>
          </div>
          <div className="imagesectiontwo">
            <img src={image3} alt="image3" className="image3"></img>
            <img src={image5} alt="image5" className="image5"></img>
          </div>
        </div>
      </main>
      <section className="thirdsection">
        <div>
          <img src={mbtoken} alt="mbtoken" />
          <img src={opensea} alt="opensea" />
          <img src={metamask} alt="metamask" />
        </div>
      </section>
      <section>
        <div className="inspiration">
          <h2>Inspiration for your next adventure</h2>
          <div className="allframes">
            <div className="one">
              <img src={frame1} alt="frame1"></img>
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
              <img src={frame2} alt="frame1"></img>
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
              <img src={frame3} alt="frame1"></img>
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
              <img src={frame4} alt="frame1"></img>
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
              <img src={frame5} alt="frame1"></img>
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
              <img src={frame6} alt="frame1"></img>
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
              <img src={frame7} alt="frame1"></img>
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
              <img src={frame8} alt="frame1"></img>
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
      </section>
      <section className="rotatedsection">
        <div className="MetabnbNFTs">
          <div>
            <div className="herotext">
              <h1>Metabnb NFTs</h1>
            </div>
            <div>
              <p className="herosubheader">
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our customer access to loads of our exclusive services.
              </p>
            </div>
            <div>
              <button className="nftbutton">Learn more</button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={rotated}
            alt="rotatedimages"
            className="rotatedimages"
          ></img>
        </div>
      </section>
      <footer className="footer">
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
        </div>
        <img src={metabnblogofooter} alt="footerlogo" className="footerlogo" />
      </footer>
    </div>
  );
};

export default Mainpage;
