import {useState} from 'react';
import '../../styles/app.module.css';
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
        borderRadius: "5px"
        
    }

    const buttonActive = {
        backgroundColor: "blue",
        zIndex: "10",
        border: "0px",
        padding: "8px 16px",
        borderRadius: "5px"

    }

    const content = {
        display:"none",
        transition: "ease 1.5s"

    }

    const contentActive = {
        display: "block",
        transition: "ease 1.5s"

    }
    const buttonGroup = {
        border: "1px solid black",
        width: "35%",
        borderRadius: "5px",
        display: "flex",
        margin: "auto",
        padding: "4px 0px"
    }
    const contentGroup = {
        display: "flex",
        justifyContent: "center"
    }

    function toggleTab(index){
        setToggleState(index);
    }
    return(
        <div className="mydivs">
            <div style={contentGroup}>
                <div>
                    <div style={toggleState == 1 ? contentActive : content}>
                        <Image src={Figma}  width="940" height="590" />
                    </div>
                </div>
                <div>
                    <div style={toggleState == 2 ? contentActive : content}>
                        <Image src={Adobe} width="940" height="590" />
                    </div>
                    
                </div>
            </div>
            <div style={buttonGroup}>
                <button style={toggleState == 1 ? buttonActive : button} onClick={() => toggleTab(1)}>Figma{console.log(toggleState)}</button>
                <button style={toggleState == 2 ? buttonActive : button} onClick={() => toggleTab(2)}>Adobe</button>
            </div>
            
        </div>
    );

}


export default Tabs;