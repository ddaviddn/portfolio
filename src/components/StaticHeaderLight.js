import '../App.css';

// const path_var = process.env.REACT_APP_FOR_PATH;
// const path_var = 'portfolio'
// const path_var = ''


function StaticHeader() {
    return (<>
        <div className="App-header-light">
            <></>
            <p>
                <a className="App-font-dark" href="/">home</a>
            </p>
            <p>
                <a className="App-font-dark" href="/projects">projects</a>
            </p>
            <p>
                <a className="App-font-dark" href="/cv">experience</a>
            </p>
            <p>
                <a className="App-font-dark" href="/personal">personal</a>
            </p>
            <p>
                <a className="App-font-dark" href="/projects">contact</a>
            </p>
            <></>
        </div>
    </>)
}

export default StaticHeader;