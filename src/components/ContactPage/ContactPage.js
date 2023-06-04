import '../../App.css';
import './Contact.css';
import {useState} from "react";
import StaticHeader from "../StaticHeader";

// let ElasticEmail = require('@elasticemail/elasticemail-client');
// let defaultClient = ElasticEmail.ApiClient.instance;
// let apikey = defaultClient.authentications['apikey'];
// apikey.apiKey = "";
//
// let api = new ElasticEmail.EmailsAPI();

function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        subject: "",
        body: "",
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const sendEmail = (formData) => {
        // eslint-disable-next-line no-undef
        Email.send({
            SecureToken: "3b2df234-299e-4227-8f38-1b9fa3c955d4",
            To : "ddaviddn109@gmail.com",
            From : `${formData.lastName}, ${formData.firstName}`,
            Subject : formData.subject,
            Body : formData.body
        }).then(
            message => alert("Email sent!")
        );
    }

    return (<>
        <StaticHeader/>
        <div className="App-body">
            <div className="App-contact-body" style={{borderStyle: "solid", borderWidth: "1.5px", borderRadius: "5px"}}>
                <p>
                    <code>contact me</code>
                </p>
                <div className="App-contact-forms">
                    <div>
                        <form>
                            <label><code style={{fontSize: "20px", marginLeft: "10px"}}>first name:</code></label><br/>
                            <input placeholder="enter name" className="App-contact-text-box" type="text" id="fname" name="firstName" onChange={handleChange}></input><br/>
                        </form>
                    </div>
                    <div style={{width: "7.5vh", paddingLeft: "1%", paddingRight: "1%"}}/>
                    <div>
                    <form>
                        <label><code style={{fontSize: "20px", marginLeft: "10px"}}>last name:</code></label><br/>
                        <input placeholder="enter name" className="App-contact-text-box" style={{width: "95%"}} type="text" id="lname" name="lastName" onChange={handleChange}></input>
                    </form>
                    </div>
                </div>
                <div className="App-contact-forms-body">
                    <div>
                        <form>
                            <label><code style={{fontSize: "20px", marginLeft: "32.5px"}}>subject:</code></label><br/>
                            <textarea placeholder="what subject?" rows="1" cols="58" maxLength="56" className="App-contact-text-body" style={{resize: "none", overflow: "hidden"}} name="subject" onChange={handleChange}></textarea>
                        </form>
                    </div>
                </div>
                <div className="App-contact-forms-body">
                    <div>
                        <form>
                            <label><code style={{fontSize: "20px", marginLeft: "32.5px"}}>body:</code></label><br/>
                            <textarea placeholder="send me a message!
                            - include your email if you want me to write you back!" rows="15" cols="58" className="App-contact-text-body" name="body" onChange={handleChange}></textarea>
                        </form>
                    </div>
                </div>
                <div className="App-contact-forms-body">
                    <div>
                        <button onClick={sendEmail} className="App-contact-submit"><code>submit!</code></button>
                    </div>
                </div>
            {/*<p>*/}
            {/*    <code>under construction</code>.*/}
            {/*</p>*/}
            </div>
            <p style={{position: "absolute", marginBottom: "-75vh"}}>
                <code style={{fontWeight: 100, fontSize: "15px"}}>contact: ddaviddn109@gmail.com </code>
            </p>
        </div>
    </>);
}

export default ContactPage;