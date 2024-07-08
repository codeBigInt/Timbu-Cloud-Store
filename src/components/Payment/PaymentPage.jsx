import React, { useContext } from "react";
import card from "./images/card.png";
import option1 from "./images/visa.png";
import option2 from "./images/master.png";
import option3 from "./images/paypal.png";
import option4 from "./images/bank.png";

import styles from "./CSS/paymentpage.module.css";
import { FaChevronLeft } from "react-icons/fa";
import { mediaContext } from "../../context/mediaContext";
import Total from "../Total";

const PaymentPage = ({show}) => {
  const { mediaWidth } = useContext(mediaContext);
  return (
    <div className={styles.container}>
      {mediaWidth <= 960 && (
        <div className={styles.nav}>
          <button onClick={() => show()} className={styles.btn}>
            <FaChevronLeft />
          </button>
          <h3 className={styles.title}>Payment Details</h3>
        </div>
      )}
      {mediaWidth >= 960 && <h3 className={styles.title}>Payment Details</h3>}
      <p className={styles.instruction}>
        Required fields are indicated with an asterick*
      </p>
      <form action="/">
        <label htmlFor="name">Name on Card *</label>
        <input type="text" required />
        <label htmlFor="name">Card Number *</label>
        <div className={styles.card_field}>
          <img src={card} alt="" />
          <input type="text" required />
        </div>
        <div className={styles.secret}>
          <div className={styles.secret_field}>
            <label htmlFor="expiry_date">Expiry date *</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className={styles.secret_field}>
            <label htmlFor="expiry_date">CVV *</label>
            <input type="text" />
          </div>
        </div>
        <Total />
        <div className={styles.card_cont}>
          <h3>Payment options</h3>
          <div className={styles.option}>
            <img src={option2} alt="" />
            <img src={option1} alt="" />
            <img src={option3} alt="" />
            <img src={option4} alt="" />
          </div>
        </div>
        <button type="submit" className={styles.submit}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
