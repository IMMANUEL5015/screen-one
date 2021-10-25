import React, { useState } from "react";
import userAvatar from "../../assets/images/user_avatar.png";
import logout from "../../assets/images/logout.svg";
import bank_details from "../../assets/images/bank_details.svg";
import history from "../../assets/images/history.svg";
import bvn_verification from "../../assets/images/bvn_verification.svg";
import personal_details from "../../assets/images/personal_details.svg";
import relative from "../../assets/images/relative.svg";
import debit_icon from "../../assets/images/debit_icon.svg";
import fundsIcon from "../../assets/images/funds.png";
import security from "../../assets/images/security.svg";
import Modal from "./index";

const App = () => {
    const [isModalOpen, toggleModal] = useState(false);

    return (
        <>
            <img src={fundsIcon} alt="user"
                onClick={() => toggleModal(!isModalOpen)}
            />
            <Modal isOpen={isModalOpen} toggle={toggleModal}>

                <section className="side-nav">

                    <nav className="nav">
                        <div className="profile">
                            <img className="user-avatar" src={userAvatar} alt="user" />
                            <div>Mike James</div>
                        </div>

                        <div className="profile-details">
                            <ul>
                                <li><img className="icon" src={history} alt="history" />  History</li>
                                <li><img className="icon" src={bvn_verification} alt="" /> BVN Verification</li>
                                <li><img className="icon" src={personal_details} alt="" /> Personal Details</li>
                                <li><img className="icon" src={relative} alt="" /> Relative</li>
                                <li> <img className="icon" src={bank_details} alt="bank details" /> Bank Details</li>
                                <li><img className="icon" src={debit_icon} alt="debit icon" /> Debit Card</li>
                                <li><img className="icon" src={security} alt="security" /> Security</li>
                            </ul>
                        </div>

                        <button>  <img className="icon" src={logout} alt="logout" /> logout</button>

                        <div className="contact">
                            We are here for you
                            <em>contact support team</em>
                            {/* <button>Message us</button>
          <button>Tweet us</button> */}
                        </div>
                    </nav>
                </section>
            </Modal>

        </>
    );
};

export default App;
