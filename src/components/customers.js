

import Oscar from "./svgs";
import Pfizer from "./pfizer";
import Wolks from "./wolks";
import Union from "./union";



export default function Customers() {



    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    }

    const center = {
        textAlign: "center"
    }
    const title = {
        textAlign: "center",
        fontSize: "36px",
        width: "35%"
    }
    const flex = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    const row = {
        display:"flex",
        justifyContent:"space-around"
    }

    const buttonColor = {
        backgroundColor: "#381fd1",
        color: "white",
        
    }
    return (
        <div style={style}>
            <div style={flex}>
                <h4 style={center}>CUSTOMERS</h4>
                <h1 style={title}>More than 500,000 designers, developers and PMs trust Stark.</h1>
            </div>
            <br />
            <div style={row}>
                <Oscar />
                <br />
                <Pfizer />
                <br />
                <Wolks />
                <br />
                <Union />

            </div>
            <br />
            <div style={flex}>
                <button type="button" className="button" style={buttonColor}>Sign up for free</button>
            </div>

        </div>
    );

}