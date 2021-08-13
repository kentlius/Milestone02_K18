import React from "react";
import { Link } from "react-router-dom";
import Gambar from "./LandingPage/img.png";
import styles from "./LandingPage/landingPage.module.css"

function Home() {
  return (
    <div className={styles.body }>
        <div className={styles.container}>
        <div className={styles.text}>
            <h1 className={styles.selamatDatang}>Selamat datang, Pelajar!</h1>
            <p className={styles.quote}>Apapun yang dilakukan oleh seseorang itu, hendaknya dapat bermanfaat 
                bagi dirinya sendiri, bermanfaat bagi bangsanya, dan bermanfaat 
                bagi manusia di dunia pada umumnya.- Ki Hajar Dewantara</p>
            <button type="button" className={styles.landingPageButton}><div className={styles.mulai}>Mulai!</div></button>
        </div>
        <div className={styles.image}>
            <img src={Gambar}/>
        </div>
    </div>
    </div>
  );
}

export default Home;
