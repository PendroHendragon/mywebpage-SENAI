import {useState} from 'react';
import App from '../../styles/app.module.css';
import Image from 'next/image';
import Figma from '../img/figma-action-4.png';
import Adobe from '../img/xd-action-1.png';



function Tabs(){
    const [toggleState,setToggleState] = useState(1);
    const button = {
        backgroundColor: "transparent",
        zIndex: "0",
        border: "0px",
        padding: "8px 16px",
        borderRadius: "15px",
        transition: "all 0.5s"
        
    }

    const buttonActive = {
        backgroundColor: "blue",
        zIndex: "10",
        border: "0px",
        padding: "8px 16px",
        borderRadius: "15px",
        transition: "all 0.5s"

    }

    const content = {
        display:"none",
        oapcity: "0",
        transition: "opacity 1.5s ease"

    }

    const contentActive = {
        display: "block",
        oapcity: "1",
        transition: "opacity 1.5s ease"

    }
    const buttonGroup = {
        border: "1px solid black",
        borderRadius: "5px",
        display: "flex",
        margin: "auto",
        padding: "4px 0px"
    }
    const contentGroup = {
        display: "flex",
        justifyContent: "center"
    }
    const paragraph = {
        width: "60%",
        margin: "auto"
    }

    function toggleTab(index){
        setToggleState(index);
    }
    return(
        <div >
            <div className={App.mydivs}>
                <h4 >CHECK IT OUT</h4>
                <h1 className={App.tabsTitle}>See Stark in action</h1>
                <p style={paragraph}>Baked right into Figma, Sketch, Adobe XD and Google Chrome, 
                    watch how Stark makes designing with accessibility in mind easier than ever before.</p>
            </div>
            <br />
            <div style={contentGroup}>
                <div>
                    <div style={toggleState == 1 ? contentActive : content} className="">
                        <Image src={Figma}  width="940" height="590" />
                    </div>
                </div>
                <div>
                    <div style={toggleState == 2 ? contentActive : content} className="">
                        <Image src={Adobe} width="940" height="590" />
                    </div>
                    
                </div>
            </div>
            <div className={App.buttonGroup}>
                <button style={toggleState == 1 ? buttonActive : button} onClick={() => toggleTab(1)} >Figma</button>
                <button style={toggleState == 2 ? buttonActive : button} onClick={() => toggleTab(2)}>Adobe</button>
            </div>
            
        </div>
    );

}


export default Tabs;