import React from "react";
import close from "./assets/close-svgrepo-com.svg";
import metamask from "./assets/Metamask.png";
import connectwallet from "./assets/walletConnect.png";
import rightarrow from "./assets/rightarrow.png";
import line from "./assets/line.png";

export const CreateWallet = ({ showModal, setShowModal }) => {
  if (!showModal) return null;
  return (
    <div className="popupbox">
      <div className="box">
        <div className="connectwallet">
          <div>
            <h3 className="cc">Connect Wallet</h3>
            <img src={line} alt="" className="line" />
          </div>
          <span>
            <img
              src={close}
              alt="close"
              className="close"
              onClick={() => setShowModal(!showModal)}
            ></img>
          </span>
        </div>
        <div className="preferredwallet">
          <p>Choose your preferred wallet</p>
          <div>
            <div className="metamask">
              <span>
                <img src={metamask} alt="" className="metalogo"></img>
                <h3>Metamask</h3>
              </span>
              <div>
                <span>
                  <img src={rightarrow} alt=""></img>
                </span>
              </div>
            </div>
            <div className="metamask">
              <span>
                <img src={connectwallet} alt="" className="metalogo"></img>
                <h3>Wallet Connect</h3>
              </span>
              <div>
                <span>
                  <img src={rightarrow} alt=""></img>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
