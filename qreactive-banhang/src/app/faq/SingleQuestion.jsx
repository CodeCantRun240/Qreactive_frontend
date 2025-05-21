'use client'
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";
import styles from "./styles.module.css"

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={styles.question}>
      <header>
        <h4 className={styles.headingStyles.h4}>{title}</h4>
        <button className={styles.btn} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

// Prop types validation
SingleQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};


export default SingleQuestion;