import '../../App.css';
import '../../CV_text.css'
import StaticHeader from "../StaticHeader";

function CVPage() {
    return (<>
        <StaticHeader/>
        <div className="App">
            <div className="App-body">
                <div className="App-cv-body">
                    <p className="Title">
                        <p><code>david nguyen</code></p>
                    </p>
                </div>

            </div>
        </div>
    </>);
}

export default CVPage;
