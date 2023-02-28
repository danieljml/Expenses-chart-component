import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { days as listDays } from "../data/days";

export const CardBottom = () => {
  const [days, setDays] = useState(listDays);
  const [amount, setAmount] = useState(0);
  const [porcent, setPorcent] = useState(0.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDays(
        days.map((item) => {
          return {
            ...item,
            spent: Math.round(Math.random() * (95 - 10) + 10)
          };
        })
      );
    }, 3000);
    setPorcent((Math.random() * (6.2 - 0.5) + 0.5).toFixed(2));
    setAmount(Math.round(Math.random() * (880 - 200) + 200));
    return () => clearInterval(timer);
  }, [days]);

  const dataDays = days.map((item, i) => {
    return <ItemList itemDay={item.day} itemSpent={item.spent} key={i} />;
  });

  return (
    <div className="cardBottom">
      <div className="cardBottom__content">
        <p className="content__title">Spending - Last 7 days</p>
      </div>
      <div className="cardBottom__bars">
        <ul className="bars__list">{dataDays}</ul>
      </div>
      <span className="cardBottom__line"> </span>
      <p className="content__totalMont">Total this month</p>
      <div className="cardBottom__content">
        <div className="content__lside">
          <p className="content__amount">${amount}</p>
        </div>
        <div className="content__rside">
          <p className="content__porcent">+{porcent}%</p>
          <p className="content__totalAmount">from last month</p>
        </div>
      </div>
    </div>
  );
};
