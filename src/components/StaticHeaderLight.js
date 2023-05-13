import '../App.css';

const path_var = process.env.REACT_APP_FOR_PATH;

function StaticHeader() {
    return (<>
        <div className="App-header-light">
            <></>
            <p>
                <a className="App-font-dark" href={path_var + "/"}>home</a>
            </p>
            <p>
                <a className="App-font-dark" href={path_var + "/personal"}>personal</a>
            </p>
            <p>
                <a className="App-font-dark" href={path_var + "/cv"}>cv</a>
            </p>
            <p>
                <a className="App-font-dark" href={path_var + "/personal"}>contact</a>
            </p>
            <></>
        </div>
    </>)
}

export default StaticHeader;