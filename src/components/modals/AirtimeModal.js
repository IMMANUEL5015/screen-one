import React, { useState } from "react";
import Modal from "./index";
import fundsIcon from "../../assets/images/funds.png";
import glo from "../../assets/images/glo.png";
import etisalat from "../../assets/images/etisalat.jpg";
import mtn from "../../assets/images/mtn.png";
import airtel from "../../assets/images/airtel.png";
import '../../assets/scss/_airtimeModal.scss'
const App = () => {
    const [isModalOpen, toggleModal] = useState(false);

    const [network, setNetwork] = useState(null);

    return (
        <>

            <img src={fundsIcon} alt="user"
                onClick={() => toggleModal(!isModalOpen)}
            />
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <div className="amodal">
                    <h1 className="">Buy Airtime</h1>

                    <div className="">

                        <div className="card">
                            <div className="flex">
                                <img className="img" src={mtn} alt="" /><img className="img" src={glo} alt="" /><img className="img" src={etisalat} alt="" /><img className="img" src={airtel} alt="" />
                            </div>
                            <br />
                            {!network ?
                                <p>Select a Network</p>
                                :
                                <p>Selected Network: <strong>{network}</strong> </p>
                            }
                        </div>
                    </div>

                    <div className="flex input">
                        <div className="green">+234</div>
                        <input type="text" className="input-field" />
                    </div>
                    <div className="flex input">
                        <div className="green green2">&#8358;</div>
                        <input type="text" className="input-field" />
                    </div>
                    <div className="full">
                        <input type="button" className="submit" value="Buy Airtime" />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default App;
