import '../../../../App.css';
import StaticHeaderLight from "../../../StaticHeaderLight";

function AdditionFinancial() {
    return (<>
        <StaticHeaderLight/>
        <div className="App-body-light">
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            {/*<div className="App-projects-marviva-div">*/}
            <iframe className="App-projects-marviva"
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTZGpaepGWepDDfpP5ZjH-2Euk8hgSOVEzbmtjqrkGUXT7-w1NDTPNV502Nl6Norw/embed?start=false&loop=true&delayms=2500&rm=minimal"
            >
            </iframe>
            {/*</div>*/}
            {/*<p>*/}
            {/*    <code>under construction</code>.*/}
            {/*</p>*/}
            <p >
                {/*<code style={{fontWeight: 100, fontSize: "15px"}}>contact: ddaviddn109@gmail.com </code>*/}
            </p>
        </div>
    </>);
}

export default AdditionFinancial;