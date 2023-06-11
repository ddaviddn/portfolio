import '../../../../App.css';
import StaticHeaderLight from "../../../StaticHeaderLight";

function FinancialCalculator() {
    return (<>
        <StaticHeaderLight/>
        <div className="App-body-light">
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe className="App-projects-streamlit"
            src="https://ddaviddn-streamlit-example-streamlit-app-yn41tn.streamlit.app/?embed=true&?embed_options=show_toolbar,show_padding,light_theme,show_colored_line"
            >
            </iframe>
            {/*<p>*/}
            {/*    <code>under construction</code>.*/}
            {/*</p>*/}
            <p >
                {/*<code style={{fontWeight: 100, fontSize: "15px"}}>contact: ddaviddn109@gmail.com </code>*/}
            </p>
        </div>
    </>);
}

export default FinancialCalculator;