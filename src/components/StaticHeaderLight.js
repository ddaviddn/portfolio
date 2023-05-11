import '../App.css';

function StaticHeader() {
    return (<>
        <div className="App-header-light">
            <></>
            <p>
                <a className="App-font-dark" href="/">home</a>
            </p>
            <p>
                <a className="App-font-dark" href="/personal">personal</a>
            </p>
            <p>
                <a className="App-font-dark" href="/">cv</a>
            </p>
            <p>
                <a className="App-font-dark" href="/">contact</a>
            </p>
            <></>
        </div>
    </>)
}

export default StaticHeader;