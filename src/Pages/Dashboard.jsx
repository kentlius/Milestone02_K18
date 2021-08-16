import React from "react";
import Maudy from "./Dashboard/maudy_ayunda.png";
import styles from "./Dashboard/dashboard.module.css"

function Dashboard () {
    return(
        <div className={styles.dashboard}>
        <div className={styles.square}></div>
        <div className={styles.dashboardfont}>Dashboard Belajar Kamu</div>
        <div className={styles.profilefont}>Profil</div>
        <div className={styles.profile}></div>
        <div className={styles.tentang}></div>
        <div className={styles.tentangsaya}>Tentang Saya</div>
        <div className={styles.prestasi}></div>
        <div className={styles.prestasifont}>Prestasi</div>
        <div className={styles.kegiatanfont}>Kegiatan</div>
        <div className={styles.Kegiatan}></div>
        <img src={Maudy} top="321px" left="215px" width="236px" height="251px"/>
        <div className={styles.Maudy_Ayunda}>Maudy Ayunda</div>
        <div className={styles.sma_british_international_school} >SMA British International School</div>
        <div className={styles.hashtags} >#Basketball #Music #Vibes</div>
        <div className={styles.taken_by_tom}  >taken by Tom</div>
        <div className={styles.bio} >Hello! I am a music enthusiastic, let's connect!</div>
        <div className={styles.juarapertama} >Juara 1 OSN Bidang Matematika Tingkat Kabupaten</div>
        <div className={styles.juarakedua} >Juara 1 Palang Merah Remaja Tingkat Provinsi</div>
        <div className={styles.juarapertamajelas} >Olimpiade Sains Nasional yang diselenggarakan oleh Dinas Pendidikan di SMA Negeri 1 Jakarta pada tanggal 24 April 2020</div>
        <div className={styles.juarakeduajelas} >Lomba Palang Merah Remaja tahunan yang diselenggarakan oleh SMA Negeri 2 Jogjakarta</div>
        <div className={styles.kegiatan1} >Try Out EDUKA JULI 2021</div>
        <div className={styles.kegiatan1jelas} >jadi burhan</div>
        <div className={styles.kegiatan2} >Panitia Wisuda Juli HMIF Tahun 2021  </div>
        <div className={styles.kegiatan2jelas} >Divisi Video Performance - Talent</div>
        </div>
    );
}

export default Dashboard