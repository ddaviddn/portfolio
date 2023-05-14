import '../App.css';

// const path_var = process.env.REACT_APP_FOR_PATH;
// const path_var = ''
const path_var = ''

function StaticHeader() {
    return (<>
        <div className="App-header">
            <></>
            <p>
                <a href={path_var+"/"}>home</a>
            </p>
            <p>
                <a href={path_var+"/projects"}>projects</a>
            </p>
            <p>
                <a href={path_var+"/cv"}>experience</a>
            </p>
            <p>
                <a href={path_var+"/personal"}>personal</a>
            </p>
            <p>
                <a href={path_var+"/projects"}>contact</a>
            </p>
            <></>
        </div>
    </>)
}

export default StaticHeader;