import '../App.css';

// const path_var = process.env.REACT_APP_FOR_PATH;
// const path_var = ''
const path_var = 'portfolio'

function StaticHeader() {
    return (<>
        <div className="App-header">
            <></>
            <p>
                <a href="/">home</a>
            </p>
            <p>
                <a href={path_var+"/personal"}>personal</a>
            </p>
            <p>
                <a href={path_var+"/cv"}>cv</a>
            </p>
            <p>
                <a href={"/"}>contact</a>
            </p>
            <></>
        </div>
    </>)
}

export default StaticHeader;