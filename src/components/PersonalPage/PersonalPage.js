import '../../App.css';
import StaticHeader from "../StaticHeaderLight";
import tokyoImage from "../../assets/PersonalImages/vibrant_tokyo.jpeg";
import japanNightImage from "../../assets/PersonalImages/jap_nite_sky.jpg";

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
                        <p style={{marginTop: '50px'}}/>
                        <div/>
                        {/*<hr className="rounded">*/}

                        <code style={{marginTop: '40px', fontSize: '28px'}}>
                            outside of learning, i enjoy: <p/>
                            <code/>
                            <code style={{fontSize: '20px', marginLeft: '30px'}}>
                                listening to music and playing guitar. <p/>
                            </code>
                            <code style={{fontSize: '20px', marginLeft: '30px'}}>
                                i like indie, alternative, rock (70's +), classical, jpn. city pop, opm. <p/>
                            </code>
                            <code style={{fontSize: '20px', marginLeft: '30px'}}>
                                traveling and taking photos of the world. <p/>
                            </code>
                            <code style={{fontSize: '20px', marginLeft: '30px'}}>
                                i enjoy photos that can capture nostalgia and human emotion. <p/>
                            </code>
                            <code style={{fontSize: '20px', marginLeft: '30px'}}>
                                watching films that have positive emotional and creative impact on one's self. <p/>
                            </code>
                            <code style={{fontSize: '20px', marginLeft: '30px'}}>
                                i appreciate dystopian, psychological thrillers, korean crime. <p/>
                            </code>
                        </code>
                    </p>
                    <img className="App-personal-img" src={tokyoImage} alt="vibrant_skyline"/>
                </div>
            </div>
            <div className="App-body-light-full section">
                <img className="App-personal-follow-img" src={japanNightImage} alt="jap_night"/>
            </div>
        </div>
    </>);
}

export default HomePage;