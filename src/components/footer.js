import Line from "./line";
import Heart from "./heart";
import Logo from "./svg-logo";
export default function Footer() {

    const flex = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
    const flex2 = {
        display: "flex",
        justifyContent: "space-around"
    }

    return (
        <footer >
            <Line />
            <br />
            <br />
            <div style={flex2}>
                <ul>
                    <li>DOWNLOADS</li>
                    <li>Adobe XD</li>
                    <li>Sketch</li>
                    <li>Figma</li>
                    <li>Chrome</li>
                </ul>
                <ul>
                    <li>RESOURCES</li>
                    <li>Blog</li>
                    <li>Library</li>
                    <li>Support</li>
                    <li>Newsletter</li>
                    <li>Mac Beta</li>
                    <li>Release Notes</li>
                </ul>
                <ul>
                    <li>COMMUNITY</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Slack</li>
                    <li>Youtube</li>
                    <li>Meetup</li>
                    <li>Dribbble</li>
                </ul>
            </div>

            <br />
            <div style={flex}>
                <Heart />
                <h2>MADE REMOTELY BY STARK LAB, INC. COPYRIGHT 2022</h2>
                <Logo />
            </div>
            <br />
        </footer>
    );
}