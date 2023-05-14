import '../../App.css';
import SocialIcons from "./SocialIcons";

function HomePage() {
    return (<>
        <div className="App-body">
            <p>
                <code>david nguyen</code>.
            </p>
            <div className="container">
                <div className="App-typing">
                    <p>
                        <code>data engineering | data science | data visualization </code>
                    </p>
                </div>
            </div>
            <SocialIcons />
            <p style={{position: "absolute", marginBottom: "-75vh"}}>
                <code style={{fontWeight: 100, fontSize: "15px"}}>contact: ddaviddn109@gmail.com </code>
            </p>
        </div>
    </>);
}

export default HomePage;