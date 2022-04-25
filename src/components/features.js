


export default function Features() {

    const row = {
        display: "flex",
        justifyContent: "space-around"
    }
    const card = {
        width: "20%"
    }
    const center = {
        textAlign: "center"
    }
    const title = {
        textAlign: "center",
        fontSize: "36px"
    }

    return (
        <div>
            <h4 style={center}>FEATURES</h4>
            <h1 style={title}>All the things you can do</h1>
            <br />
            <div style={row}>
                <div style={card}>
                    <div>
                        <p>Inspect contrast levels in your designs with Contrast Checker</p>
                    </div>

                </div>
                <div style={card}>
                    <div>
                        <p>Discover AA and AAA passing color alternatives with Smart Color Suggestions</p>
                    </div>

                </div>
                <div style={card}>
                    <div>
                        <p>Experience your design through another's eyes with Vision Simulations</p>
                    </div>

                </div>
            </div>
            <br />
            <div style={row}>
                <div style={card}>
                    <div>
                        <p>Dig deeper into your project's colors with Vision Generator</p>
                    </div>

                </div>
                <div style={card}>
                    <div>
                        <p>Evaluate changes on the fly with our Chrome extension</p>
                    </div>

                </div>
                <div style={card}>
                    <div>
                        <p>Simplify handoffs with sequences built in Focus Order</p>
                    </div>

                </div>

            </div>
        </div>
    );




}