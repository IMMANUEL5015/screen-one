import React from "react";
import DebitIcon from "../assets/images/debit_icon.svg";
import CreditIcon from "../assets/images/credit_icon.svg";

const TableCards = ({ item }) => {
  return (
    <div className="table-card">
      <div className="title">
        <img
          src={item.status === "credit" ? CreditIcon : DebitIcon}
          className={item.status === "debit" ? "debit-bg" : "credit-bg"}
          alt="status-type"
        />
        <div className="text">
          <span className="details">{item.title}</span>
          <span className="time">{item.days}</span>
        </div>
      </div>
      <div className="price">
        <span>{item.amount}</span>
      </div>
    </div>
  );
};

export default TableCards;
