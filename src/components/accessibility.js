import Red from "./svg-red";


export default function Accessibility() {


    const style = {
        display: "flex",
        flexDirection: "column",
        justfyContent: "center",
        textAlign: "center"
    }
    const title = {
        fontSize: "36px",
        textAlign: "center",
        zIndex: "3"
    }
    const svg = {

        zIndex: "0",
        position: "absolute",
        top: "500px"

    }
    const p = {
        width: "45%",
        display: "flex",
        margin: "auto"
    }
    const row = {
        display: "flex",
        justifyContent: "space-around",

    }
    const card = {
        width: "400px",
    }
    const title2 = {
        fontSize: "24px",
        margin: "6px 0px"
    }
    const svg2 = {
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='308' height='76' viewBox='0 0 308 76' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.90989 11.5563C5.96104 11.0452 6.39119 10.6559 6.90491 10.6559L306.661 10.6559C307.329 10.6559 307.809 11.2992 307.619 11.9401L292.212 63.9239C292.086 64.3485 291.696 64.6397 291.254 64.6397L1.70229 64.6397C1.11063 64.6397 0.648351 64.1289 0.707271 63.5402L5.90989 11.5563Z' fill='%23FC6F6B'%3E%3C/path%3E%3C/svg%3E')"
    }

    return (
        <div>
            <div>
                <div style={style}>
                    <h1 style={title}>Accessibility <br></br><span className="svgRed">for everyone</span></h1>

                </div>
                <div style={p}>
                    <p>While Stark today lives in your design and development software,
                        it supports you and your team through the entire product lifecycle. And, here’s how.</p>

                </div>
            </div>
            <br />
            <br />
            <div style={row}>
                <div style={card}>
                    <div>
                        <h4>FROM IDEA TO PRODUCTION</h4>
                        <h3 style={title2}>Work with accessibility in mind</h3>
                    </div>
                    <div>
                        <p>Stark makes it effortless to design and build accessible products from
                            the start by providing you the right tools right where you need them: your design and dev software of choice.</p>
                    </div>

                </div>
                <div style={card}>
                    <div>
                        <h4>RAPID RETROFITTING</h4>
                        <h3 style={title2}>Update your existing design system</h3>
                    </div>
                    <div>
                        <p>Use Stark to make changes and updates to your existing components
                            to ensure your design system meets current accessibility standards.</p>
                    </div>

                </div>
            </div>
            <br />
            <div style={row}>
                <div style={card}>
                    <div>
                        <h4>FROM IDEA TO PRODUCTION</h4>
                        <h3 style={title2}>Work with accessibility in mind</h3>
                    </div>
                    <div>
                        <p>Stark makes it effortless to design and build accessible products from
                            the start by providing you the right tools right where you need them: your design and dev software of choice.</p>
                    </div>

                </div>
                <div style={card}>
                    <div>
                        <h4>RAPID RETROFITTING</h4>
                        <h3 style={title2}>Update your existing design system</h3>
                    </div>
                    <div>
                        <p>Use Stark to make changes and updates to your existing components
                            to ensure your design system meets current accessibility standards.</p>
                    </div>

                </div>

            </div>
        </div>
    );
}