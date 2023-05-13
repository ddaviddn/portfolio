import '../App.css';

function StaticHeader() {
    return (<>
        <div className="App-header">
            <></>
            <p>
                <a href="/portfolio">home</a>
            </p>
            <p>
                <a href="/portfolio/personal">personal</a>
            </p>
            <p>
                <a href="/portfolio/cv">cv</a>
            </p>
            <p>
                <a href="/portfolio">contact</a>
            </p>
            <></>
        </div>
    </>)
}

export default StaticHeader;