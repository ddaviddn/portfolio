import '../../App.css';
import '../../CV_text.css'
import StaticHeader from "../StaticHeader";

function CVPage() {
    return (<>
        <StaticHeader/>
        <div className="App">
            <div className="App-body">
                <div className="App-cv-body">
                    <p className="Title">
                        <p><code>David Nguyen</code></p>
                    </p>
                    <div className="App-cv-contact">
                        <p>
                            <code>
                                Mobile: (407)412-2147 | Email: ddaviddn109@gmail.com
                            </code>
                        </p>
                    </div>
                    <hr style={{borderWidth: "1.8px", width: "98%"}}/>
                    <div className="App-cv-subject-date">
                        <p className="Subject">
                            <p><code>Education</code></p>
                        </p>
                    </div>
                    <hr style={{borderWidth: "1px", width: "94%", marginTop: "-32.5px"}}/>
                    <div className="App-cv-subject-date">
                        <p className="Subject">
                            <p><code style={{fontWeight: "900"}}>Georgia Institute of Technology, </code><code>Atlanta,
                                GA</code></p>
                        </p>
                        <p className="Subject">
                            <p><code>August 2022 - Current</code></p>
                        </p>
                    </div>
                    <div className="App-cv-subject-date" style={{marginTop: "-70px"}}>
                        <p className="Subject">
                            <p><code>Master's of Science in Analytics</code></p>
                        </p>
                        <p className="Subject">
                            <p><code>Overall GPA: 4.0 / 4.0</code></p>
                        </p>
                    </div>
                    <div className="App-cv-subject-date" style={{marginTop: "-60px"}}>
                        <p className="Subject">
                            <p><code style={{fontWeight: "900"}}>University of Central Florida, </code><code>Orlando,
                                FL</code></p>
                        </p>
                        <p className="Subject">
                            <p><code>August 2018 - December 2021</code></p>
                        </p>
                    </div>
                    <div className="App-cv-subject-date" style={{marginTop: "-70px"}}>
                        <p className="Subject">
                            <p><code>Bachelor's of Science in Statistics and minor in Mathematics</code></p>
                        </p>
                        <p className="Subject">
                            <p><code>Overall GPA: 3.9 / 4.0</code></p>
                        </p>
                    </div>
                    <div className="App-cv-subject-date">
                        <p className="Subject" style={{marginTop: "10px"}}>
                            <p><code>Technical Skills and Certifications</code></p>
                        </p>
                    </div>
                    <hr style={{borderWidth: "1px", width: "94%", marginTop: "-32.5px"}}/>
                    <div className="App-cv-content">
                        <ul style={{marginTop: "-10px"}}>
                            <li style={{textAlign: "start"}}>
                                <code>
                                    Python (pandas, scikit-learn, PyTorch, Streamlit, Flask, PySpark, Airflow),
                                    Sigma, Tableau, Javascript (React, React Native), HTML, CSS, dbt, Time-series
                                    analysis, Optimization, NLP, RegEx, SQL, Data modeling, Linux, Semi-structured data,
                                    AWS,
                                    LaTeX, Microsoft Office Suite
                                </code>
                            </li>
                            <li style={{textAlign: "start"}}>
                                <code>
                                    Snowflake (SnowPro Data Engineer), Dataiku (Designer Core), Alation (Certified
                                    Professional), Fivetran (Partner Certification), dbt (Certified Developer)
                                </code>
                            </li>
                        </ul>
                    </div>
                    <div className="App-cv-subject-date">
                        <p className="Subject" style={{marginTop: "20px"}}>
                            <p><code>Experience</code></p>
                        </p>
                    </div>
                    <hr style={{borderWidth: "1px", width: "94%", marginTop: "-32.5px"}}/>
                    <div className="App-cv-subject-date">
                        <p className="Subject">
                            <p><code style={{fontWeight: "900"}}>Hakkoda, </code><code>Denver, CO</code></p>
                        </p>
                        <p className="Subject">
                            <p><code>March 2022 - Current</code></p>
                        </p>
                    </div>
                    <div className="App-cv-subject-date" style={{marginTop: "-72.5px"}}>
                        <p className="Subject">
                            <p><code style={{textDecoration: "underline"}}>Data Engineer Consultant</code></p>
                        </p>
                    </div>
                    <div className="App-cv-content">
                        <ul style={{marginTop: "-25px"}}>
                            <li style={{textAlign: "start"}}>
                                <code>
                                    Consulted and helped deliver Snowflake’s data cloud solution for the 2nd largest foodservice
                                    distributor in the United States, <code style={{fontWeight: "900"}}>USFoods</code>, implementing a modernized data stack (Snowflake,
                                    Fivetran, dbt, great_expectations, Sigma, Alation) following Snowflake’s best practices.
                                </code>
                            </li>
                            <li style={{textAlign: "start"}}>
                                <code>
                                    Architected Source-To-Target mappings and implemented data transformations, building a more
                                    structured and robust dimensional model with CI/CD engineering best practices in dbt Cloud.
                                </code>
                            </li>
                            <li style={{textAlign: "start"}}>
                                <code>
                                    Presented to critical stakeholders and project-level managers, communicating closely with the
                                    client for agile development and change requests, and building strong client relationships.
                                </code>
                            </li>
                            <li style={{textAlign: "start"}}>
                                <code>
                                    Optimized and sped up minute load times of the BI team’s Tableau dashboards into seconds by
                                    transforming legacy data sources and queries into views with the newer modernized architecture.
                                </code>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default CVPage;
