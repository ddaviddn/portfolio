import '../../../../App.css';
import StaticHeaderLight from "../../../StaticHeaderLight";

function CarComparison() {
    return (<>
        <StaticHeaderLight/>
        <div className="App-body-light">
                <iframe className="App-projects-google-sheets"
                        src="https://docs.google.com/spreadsheets/d/1OLwNFkSUTFqrTQ6q44RoRagCGUWZJ117o1CgpClj58A/edit?usp=sharing?single=true&amp;rm=minimal&amp;widget=false;chrome=false;headers=false;range=f2%3Ag6"
                >
                </iframe>
        </div>
    </>);
}

export default CarComparison;