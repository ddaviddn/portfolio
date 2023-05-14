import '../../App.css';
import StaticHeaderLight from "../StaticHeaderLight";

function ProjectPage() {
    return (<>
        <StaticHeaderLight/>
        <div className="App-body-light">
            <p>
                <code>under construction</code>.
            </p>
            <p style={{position: "absolute", marginBottom: "-75vh"}}>
                <code style={{fontWeight: 100, fontSize: "15px"}}>contact: ddaviddn109@gmail.com </code>
            </p>
        </div>
    </>);
}

export default ProjectPage;