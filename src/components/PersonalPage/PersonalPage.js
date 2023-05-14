import '../../App.css';
import StaticHeader from "../StaticHeaderLight";
import tokyoImage from "../../assets/PersonalImages/tokyo_vibrant.jpg";
import japanNightImage from "../../assets/PersonalImages/jap_nite_sky.jpg";
import chicagoApt from "../../assets/PersonalImages/cago.jpg";
import tokyoSkyline from "../../assets/PersonalImages/tokyo_skyline.jpg";
import indianaBeach from "../../assets/PersonalImages/indiana_beach.jpg";
import indianaBeach2 from "../../assets/PersonalImages/beach.jpg";
import indianaCamp from "../../assets/PersonalImages/indiania_camp.jpg";
import chicagoSushi from "../../assets/PersonalImages/chicago_sushi.jpg";
import interior1 from "../../assets/PersonalImages/interior1.jpg";
import interior2 from "../../assets/PersonalImages/interior2.jpg";
import korCouple from "../../assets/PersonalImages/kor_couple.jpg";
import orlando from "../../assets/PersonalImages/orlando.jpg";
import crHotel from "../../assets/PersonalImages/cr_hotel.jpg";
import crOffice from "../../assets/PersonalImages/cr_office.jpg";

function HomePage() {
    return (<>
        <div className="section">
            <StaticHeader/>
            <div className="App-body-light">
                <div className="App-personal-page">
                    <p className="App-personal-text">
                        <code>who am i?</code>
                    </p>
                    <p className="App-personal-text-small">
                        <code>
                            data professional by day,
                            graduate student at
                            georgia <p/> institute of technology
                            by night.
                        </code>
                        <p/>
                        <hr style={{width: '100%'}}/>
                        {/*<p />*/}
                        <div/>
                        {/*<hr className="rounded">*/}

                        <code style={{marginTop: '35px', fontSize: '25px'}}>
                            outside of learning, i enjoy: <p/>
                            <code/>
                            <code style={{fontSize: '18px', marginLeft: '30px'}}>
                                listening to music and playing guitar. <p/>
                            </code>
                            <code style={{fontSize: '18px', marginLeft: '30px'}}>
                                i like indie, alternative, rock (70's +), classical, jpn. city pop, opm. <p/>
                            </code>
                            <code style={{fontSize: '18px', marginLeft: '30px'}}>
                                traveling and taking vibrant and bright photos of the world. <p/>
                            </code>
                            <code style={{fontSize: '18px', marginLeft: '30px'}}>
                                i enjoy photos that can capture nostalgia and emotions. <p/>
                            </code>
                            <code style={{fontSize: '18px', marginLeft: '30px'}}>
                                watching films that are emotionally impactful and inspire creativity. <p/>
                            </code>
                            <code style={{fontSize: '18px', marginLeft: '30px'}}>
                                i appreciate dystopian, psychological thrillers, romance, and crime movies. <p/>
                            </code>
                            <code style={{fontSize: '18px', marginLeft: '30px'}}>
                                researching on up-to-date financial trends occurring in the US markets. <p/>
                            </code>
                            <code style={{fontSize: '18px', marginLeft: '30px'}}>
                                i am a huge credit card points nerd and leverage points for outsized value. <p/>
                            </code>
                        </code>
                    </p>
                    <img className="App-personal-img" src={tokyoImage} alt="vibrant_skyline"/>
                </div>
            </div>
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={tokyoSkyline} alt="jap_night"/>
                </div>
            </div>
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={japanNightImage} alt="jap_night"/>
                </div>
            </div>
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={chicagoApt} alt="chicago"/>
                </div>
            </div>
            <div className="section">
                <div className="App-body-light-full" >
                    <img className="App-personal-follow-img" src={indianaBeach2} alt="rooftop"/>
                </div>
            </div>
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={korCouple} alt="rooftop"/>
                </div>
            </div>
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={indianaBeach} alt="rooftop"/>
                </div>
            </div>
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={indianaCamp} alt="rooftop"/>
                </div>
            </div>
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={chicagoSushi} alt="rooftop"/>
                </div>
            </div>
            {/*<div className="section">*/}
            {/*    <div className="App-body-light-full">*/}
            {/*        <img className="App-personal-follow-img" src={interior1} alt="rooftop"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={orlando} alt="rooftop"/>
                </div>
            </div>
            {/*<div className="section">*/}
            {/*    <div className="App-body-light-full">*/}
            {/*        <img className="App-personal-follow-img" src={interior2} alt="rooftop"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={crHotel} alt="rooftop"/>
                </div>
            </div>
            <div className="section">
                <div className="App-body-light-full">
                    <img className="App-personal-follow-img" src={crOffice} alt="rooftop"/>
                </div>
            </div>
            <div className="section">
                <StaticHeader/>
                <div className="App-body-light-full">
                    <p>
                        <code>end.</code>
                    </p>
                    <p>
                        <code style={{fontSize: "25px"}}>more images will appear as I continue exploring the world :)</code>
                    </p>
                </div>
            </div>
        </div>
    </>);
}

export default HomePage;