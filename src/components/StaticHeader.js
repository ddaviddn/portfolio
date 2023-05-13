import '../App.css';

function StaticHeader() {
    return (<>
        <div className="App-header">
            <></>
            <p>
                <a href="/">home</a>
            </p>
            <p>
                <a href="/personal">personal</a>
            </p>
            <p>
                <a href="/cv">cv</a>
            </p>
            <p>
                <a href="/">contact</a>
            </p>
            <></>
        </div>
    </>)
}

export default StaticHeader;