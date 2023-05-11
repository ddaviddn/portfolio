import './App.css';
import StaticHeader from "./components/StaticHeader";
import HomePage from "./components/HomePage/HomePage";


/////////////////////////// SECOND PAGE (PERSONAL) ////////////////////////////

/////////////////////////// THIRD PAGE (CV) ////////////////////////////

/////////////////////////// FOURTH PAGE (PORTFOLIO) ////////////////////////////


///// Development Notes ////
// - Build out hover images for data engineering, data science and data visualization


/////////////////////////// FULL OUTPUT (ENTIRE SITE) ////////////////////////////
function App() {
    return (<>
        <StaticHeader/>
        <div className="App">
            <HomePage/>
        </div>
    </>);
}

export default App;
