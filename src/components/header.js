import Svg from "./svg-img";

import Image2 from '../../src/img/image';

import header from '../../styles/header.module.css'



export default function Header() {

    const styles = {
        height: "auto",
        marginBottom: "100px"
    }
    const styleDiv = {
        zIndex: "1"
    }
    const button = {
        color: "white",
        backgroundColor: "#381fd1",
    }
    const title = {

        color: "#381fd1",
        marginTop: "10px"
    }
    const buttonGroup = {
        overflow: "hidden",
        display: "flex"
    }



    return (
        <header className="container" style={styles}>
            <h4 className="h4" style={title}>INTRODUCING STARK</h4>
            <div className={header.container1}>

                <div className={header.title} style={styleDiv}>
                    <div>
                        <h1 className={header.tittinho}>Make the world's software more accessible</h1>

                    </div>
                    <div className="textos">
                        <p >More than 500,000 designers, developers and product managers at companies of all sizes have used Stark's integrated suite of tools to make their software products more accessible and compliant.
                            Join them and get started today!
                        </p>
                    </div>
                    <br />
                    <div className="mydiv" style={buttonGroup}>
                        <div>
                            <button type="button" className={header.bot} style={button}>Sign up for free</button>
                            <button type="button" className={header.bot} >Learn More</button>

                        </div>
                        <Svg />

                    </div>
                </div>
                <div className={header.img2}>
                    <Image2 />
                </div>






            </div>

        </header>
    );
}