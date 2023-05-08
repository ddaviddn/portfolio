import './App.css';
import github_logo from './assets/github.svg';
import instagram_logo from './assets/instagram.svg';
import spotify_logo from './assets/spotify.svg';
import medium_logo from './assets/medium.svg';

/////////////////////////// FIRST PAGE (HOME) ////////////////////////////
function StaticHeader() {
    return (<>
        <div className="App-header">
            <></>
            <p>
                <a href="/">home</a>
            </p>
            <p>
                <a href="/">personal</a>
            </p>
            <p>
                <a href="/">cv</a>
            </p>
            <p>
                <a href="/">portfolio</a>
            </p>
            <></>
        </div>
    </>)
}

function SocialIcons() {
    return (<div className="App-icons">
        <p>
            <a href="http://github.com/ddaviddn" target="_blank"><img className="Social-icons-gh" src={github_logo} alt="github"/></a>
            <a href="http://instagram.com/ddaviddn" target="_blank"><img className="Social-icons-ig" src={instagram_logo} alt="instagram"/></a>
            <a href="http://spotify.com/ddaviddn" target="_blank"><img className="Social-icons-sp" src={spotify_logo} alt="spotify"/></a>
            <a href="https://medium.com/@ddaviddn109" target="_blank"><img className="Social-icons-md" src={medium_logo} alt="medium"/></a>
        </p>
        <p>
            {/*<a href="https://github.com/ddaviddn" target="_blank"> o </a>*/}
            {/*<code>*/}
            {/*    o | o | o | o*/}
            {/*</code>*/}
        </p>
    </div>)
}

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
        </div>
    </>);
}



/////////////////////////// SECOND PAGE (PERSONAL) ////////////////////////////

/////////////////////////// THIRD PAGE (CV) ////////////////////////////

/////////////////////////// FOURTH PAGE (PORTFOLIO) ////////////////////////////





/////////////////////////// FULL OUTPUT (ENTIRE SITE) ////////////////////////////
function App() {
    return (<>
        <StaticHeader />
        <div className="App">
            <HomePage />
        </div>
    </>);
}

export default App;
