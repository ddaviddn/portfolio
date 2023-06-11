import '../../App.css';
import './ProjectComponent.css';

function ProjectComponent(props) {
    return (<>
        <a href={props.link} className="Project-card">
            {/*<div className="Project-card">*/}
                    <img className="Project-avatar"
                         src={props.image}
                         alt={props.imageDesc}
                    />
                <div className="Project-title">
                    <code>
                        {props.title}
                    </code>
                </div>
                <div className="Project-desc">
                    <code>
                        {props.desc}
                    </code>
                </div>
            {/*</div>*/}
        </a>
    </>);
}

export default ProjectComponent;