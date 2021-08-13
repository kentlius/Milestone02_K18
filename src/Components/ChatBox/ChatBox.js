import React, { useState } from 'react';
import styles from './ChatBox.module.css';
import { Grid, Link, Paper } from '@material-ui/core';
import { DataChat } from './DataChat';
import * as IoIcons from 'react-icons/io';

function ChatBox() {
    const [pesan, setPesan] = useState('');

    const submitPesan = () => {
        if (pesan === ''){
            console.log('Pesannya kosong nih');
        } else {
            const message = {
                sent : true,
                body : pesan
            }
            DataChat.push(message);
            setPesan('');
            console.log(DataChat);
        }
    }

    return (
        <div className={styles.main}>
            <Grid className={styles.chatBox}>
                <Grid className={styles.riwayatChat}>
                { DataChat.map((chat, index) =>{
                    if (chat.sent === true){
                        return (
                            <Paper key={index} className = { styles.sent }>{chat.body}</Paper>
                        )
                    } else{
                        return (
                            <Paper key={index} className = { styles.receive }>{chat.body}</Paper>
                        )
                    }
                })}
                </Grid>
                <Grid className={styles.bottomChat}>
                    <input
                        type="text"
                        placeholder='Enter a message'
                        className= {styles.messageBox}
                        value= {pesan}
                        onChange={ e => setPesan(e.target.value)}
                    />
                    <div className={styles.sendBox}>
                        <Link onClick={submitPesan}>
                            <IoIcons.IoMdSend/>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ChatBox
