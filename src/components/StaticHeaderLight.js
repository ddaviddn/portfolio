import '../App.css';

function StaticHeader() {
    return (<>
        <div className="App-header-light">
            <></>
            <p>
                <a className="App-font-dark" href="/portfolio">home</a>
            </p>
            <p>
                <a className="App-font-dark" href="/portfolio/personal">personal</a>
            </p>
            <p>
                <a className="App-font-dark" href="/portfolio/cv">cv</a>
            </p>
            <p>
                <a className="App-font-dark" href="/portfolio/personal">contact</a>
            </p>
            <></>
        </div>
    </>)
}

export default StaticHeader;