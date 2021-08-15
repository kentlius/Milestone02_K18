import React from 'react'
import ChatBox from '../../Components/ChatBox/ChatBox'
import style from './Chat.module.css'
import imgmaudy from "./maudy.jpg"
import imgjerome from "./jerome.jpeg"
import imglemon from "./lemon.jpg"

function Chat() {
    return (
        <div className = { style.main }>
            <div className = {style.profile}>
                <div className = {style.boxprofile} >
                    <img src= {imgmaudy} ></img>
                    <div className= { style.boxname }>
                        <h5 className= {style.fontprofile} >Maudy Ayunda</h5>
                        <div className = { style.kotakkecil2 }></div>
                        <div className = { style.kotakkecil1 }></div>
                    </div>
                </div>
                <div className = {style.namepage}>    
                    <h1 className= {style.font} >People</h1>
                    <div className = { style.kotak } ></div>
                </div>
            </div>
            <div className= {style.namechat}>
                Chat
            </div>
            <div className = { style.bodyChat}>
                <div className = { style.container}>
                    <button className= {style.box}>
                        <img src= {imgjerome} ></img>
                        <h5 className= {style.fontb}>Jerome Polin</h5>
                    </button>
                    <button className= {style.box}>
                        <img src= {imglemon} ></img>
                        <h5 className= {style.fontb}>Muhammad Ikhsan</h5>
                    </button>
                </div>
                <div className = {style.containerkanan}>
                    <div className = { style.container2}>
                        <div className = {style.chatnow}>
                            <img src= {imgjerome} ></img>
                            <div className= {style.kotakjerome} >
                                <h5 className= {style.fontc}>Jerome Polin</h5>
                                <p className= {style.fontd}>SMA 5 Surabaya</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className = { style.container3}>
                        <ChatBox/>
                    </div>
                    </div>

            </div>
                
        </div>
    )
}

export default Chat
