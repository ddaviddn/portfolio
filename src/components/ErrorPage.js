import '../App.css';
import StaticHeader from "./StaticHeader";

function ErrorPage() {
    return (<>
        <StaticHeader/>
        <div className="App-body">
            <p>
                <code>error</code>
            </p>
            <div className="container">
                <div className="App-typing-error">
                    <p>
                        <code>oops, there seems to be an error :(</code>
                    </p>

                </div>
            </div>
        </div>
    </>);
}

export default ErrorPage;