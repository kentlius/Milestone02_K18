import React from 'react'
import ChatBox from '../../Components/ChatBox/ChatBox'
import style from './Chat.module.css'
import img1 from "./maudy.jpg"

function Chat() {
    return (
        <div className = { style.main }>
            <div className = {style.profile}>
                <div className = {style.boxprofile} >
                    <img src= {img1} ></img>
                    <div className= { style.boxname }>
                        <h5 className= {style.fontprofile} >Maudy Ayunda</h5>
                        <div className = { style.kotakkecil2 }></div>
                        <div className = { style.kotakkecil1 }></div>
                    </div>
                </div>
                <div className = {style.namepage}>    
                    <h1 className= {style.font} >Chat</h1>
                    <div className = { style.kotak } ></div>
                </div>
            </div>
            <div className = { style.bodyChat}>
                <div className = { style.container}>
                    <button className= {style.box}>
                        <img src= {img1} ></img>
                        <h5 className= {style.fontb}>Maudy Ayunda</h5>
                    </button>
                    <button className= {style.box}>
                        <img src= {img1} ></img>
                        <h5 className= {style.fontb}>Maudy Ayunda</h5>
                    </button>
                </div>
                <div className = {style.containerkanan}>
                    <div className = { style.container2}></div>
                    <div className = { style.container3}>
                        <ChatBox/>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Chat
