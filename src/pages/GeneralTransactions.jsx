import React, { useEffect, useState } from "react";
import { TableCards, ToolBar } from "../components";
import { transactionData } from "../mock/transaction";
import { serviceApiMiddleware } from "../services/services";

const GeneralTransactions = () => {
  const [data, setData] = useState(transactionData);
  const [error, setError] = useState({});

  const fetchTransactions = () => {
    serviceApiMiddleware({
      method: "get",
      url: "/transactions",
    })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="transactions">
      {error && <p className="error">{error?.message}</p>}
      <div className="transactions-section">
        <div className="hero-section">
          <h3>General History</h3>
          <p>Airtime purchase, withdrawal and funded wallet</p>
        </div>
      </div>
      <div
        className="trnx-table"
        style={{
          maxHeight: 700,
          overflow: "scroll",
        }}
      >
        <ToolBar />
        <div className="trnx-table-list">
          <h4>Today</h4>
          {data.map((item) => (
            <TableCards key={Math.random()} item={item} />
          ))}
          <h4>Yesterday</h4>
          {data.map((item) => (
            <TableCards key={Math.random()} item={item} />
          ))}

          <h4>1 days ago</h4>
          {data.map((item) => (
            <TableCards key={Math.random()} item={item} />
          ))}
          <h4>2 days ago</h4>
          {data.map((item) => (
            <TableCards key={Math.random()} item={item} />
          ))}
          <h4>3 days ago</h4>
          {data.map((item) => (
            <TableCards key={Math.random()} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralTransactions;
