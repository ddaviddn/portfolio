import '../../App.css';
import './Contact.css';
import StaticHeader from "../StaticHeader";

function ContactPage() {
    return (<>
        <StaticHeader/>
        <div className="App-body">
            <div className="App-contact-body" style={{borderStyle: "solid", borderWidth: "1.5px", borderRadius: "3px"}}>
                <p>
                    <code>contact page</code>.
                </p>
            <p>
                <code>under construction</code>.
            </p>
            </div>
            <p style={{position: "absolute", marginBottom: "-75vh"}}>
                <code style={{fontWeight: 100, fontSize: "15px"}}>contact: ddaviddn109@gmail.com </code>
            </p>
        </div>
    </>);
}

export default ContactPage;