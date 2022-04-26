import {useState} from 'react';
import App from '../../styles/app.module.css';
import Image from 'next/image';
import Figma from '../img/figma-action-4.png';
import Adobe from '../img/xd-action-1.png';
import Sketch from '../img/sketch-action-2.png';
import Chrome from '../img/chrome-action-1.png';


function Tabs(){
    const [toggleState,setToggleState] = useState(1);
    const button = {
        backgroundColor: "transparent",
        zIndex: "0",
        border: "0px",
        padding: "8px 12px",
        borderRadius: "15px",
        transition: "all 0.2s"
        
    }

    const buttonActive = {
        backgroundColor: "blue",
        color: "white",
        zIndex: "10",
        border: "0px",
        padding: "8px 32px",
        borderRadius: "15px",
        transition: "all 1s"

    }

    const content = {
        oapcity: "0",
        width:"0",
        visibility: "hidden",
        transition: "width 1.5s, visibility 1.5s ,display 1.5s ,opacity 1.5s linear"

    }

    const contentActive = {

        oapcity: "1",
        visibility: "visible",
        width: "auto",
        transition: "width 1.5s, visibility 1.5s ,display 1.5s ,opacity 1.5s linear"

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
                    <div className={toggleState == 1 ? App.aparece: App.desaparece} >
                        <Image src={Figma}  width="940" height="590" />
                    </div>
                </div>
                <div>
                    <div className={toggleState == 2 ? App.aparece: App.desaparece}>
                        <Image src={Adobe} width="940" height="590" />
                    </div>
                    
                </div>
                <div>
                    <div className={toggleState == 3 ? App.aparece: App.desaparece}>
                        <Image src={Sketch} width="940" height="590" />
                    </div>
                    
                </div>
                <div>
                    <div className={toggleState == 4 ? App.aparece: App.desaparece}>
                        <Image src={Chrome} width="940" height="590" />
                    </div>
                    
                </div>
            </div>
            <div className={App.buttonGroup}>
                <button style={toggleState == 1 ? buttonActive : button} onClick={() => toggleTab(1)} >Figma</button>
                <button style={toggleState == 2 ? buttonActive : button} onClick={() => toggleTab(2)}>Adobe</button>
                <button style={toggleState == 3 ? buttonActive : button} onClick={() => toggleTab(3)}>Pixel</button>
                <button style={toggleState == 4 ? buttonActive : button} onClick={() => toggleTab(4)}>Chrome</button>
            </div>
            
        </div>
    );

}


export default Tabs;