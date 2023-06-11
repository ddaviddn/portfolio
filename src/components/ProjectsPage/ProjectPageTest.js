import '../../App.css';
import './ProjectComponent.css';
import StaticHeaderLight from "../StaticHeaderLight";
import ProjectComponent from "./ProjectComponent";
import projectJSON from "./ProjectBuild.json";

// importing project images
import financialShot from "./assets/financial_calculator.png";
import carComparisonShot from "./assets/car_comparison.png"

function ProjectPageTest() {
    const projects = projectJSON;
    const imgArray = [financialShot, carComparisonShot]
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
    // projects.forEach(item => {
    //     imgArray.push()
    //     projectsList.push(<ProjectComponent
    //         image={financialImg}
    //         imageDesc={item.imageDesc}
    //         title={item.title}
    //         desc={item.desc}
    //         />)
    // })
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