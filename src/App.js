import './App.css';

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

function FirstPageComponent() {
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
                <div className="App-icons">
                    <p>
                        {/*<a href="https://github.com/ddaviddn" target="_blank"> o </a>*/}
                        <code> o | o | o | o </code>
                    </p>
                </div>
            </div>
        </div>
    </>);
}

function App() {
    return (<>
        <StaticHeader/>
        <div className="App">
            <FirstPageComponent/>
        </div>
    </>);
}

export default App;
