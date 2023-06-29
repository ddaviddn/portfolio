import '../../App.css';
import './ProjectComponent.css';
import StaticHeaderLight from "../StaticHeaderLight";
import ProjectComponent from "./ProjectComponent";
import projectJSON from "./ProjectBuild.json";

// importing project images
import financialShot from "./assets/financial_calculator.png";
import carComparisonShot from "./assets/car_comparison.png";
import marvivaShot from "./assets/marviva_arch.png";
import constructionShot from "./assets/construction.svg";
import additionShot from "./assets/addition_financial.png";

function ProjectPageTest() {
    const projects = projectJSON;
    const imgArray = [financialShot, carComparisonShot, marvivaShot, additionShot, constructionShot]
    let projectsList = []

    for (let i = 0; i < projects.length; i++) {
        projectsList.push(<ProjectComponent
            image={imgArray[i]}
            link={projects[i].link}
            imageDesc={projects[i].imageDesc}
            title={projects[i].title}
            desc={projects[i].desc}
        />)
    }

    return (<>
        <StaticHeaderLight/>
        <div className="App-body-light">
            <div className="App-projects-portfolios-surround">
                <div className="App-projects-portfolios">
                    {projectsList}
                </div>
            </div>
        </div>
    </>);
}

export default ProjectPageTest;