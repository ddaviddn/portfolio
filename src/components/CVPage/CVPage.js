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
                    <hr style={{borderWidth: "1.8px", width: "98%", marginTop: "-7.5px"}}/>
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
                            <p>
                                {/*<code>*/}
                                    Master's of Science in Analytics
                                {/*</code>*/}
                            </p>
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
                            <p>
                                {/*<code>*/}
                                    Bachelor's of Science in Statistics and minor in Mathematics
                                {/*</code>*/}
                            </p>
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
                                    Python (pandas, scikit-learn, PyTorch, Streamlit, Flask, PySpark, Airflow),
                                    Sigma, Tableau, Javascript (React, React Native), HTML, CSS, dbt, Time-series
                                    analysis, Optimization, NLP, RegEx, SQL, Data modeling, Linux, Semi-structured data,
                                    AWS, LaTeX, Microsoft Office Suite
                            </li>
                            <li style={{textAlign: "start"}}>
                                    Snowflake (SnowPro Data Engineer), Dataiku (Designer Core), Alation (Certified
                                    Professional), Fivetran (Partner Certification), dbt (Certified Developer)
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
                                    Consulted and helped deliver Snowflake’s data cloud solution for the 2nd largest foodservice
                                    distributor in the United States, <b>USFoods</b>, implementing a modernized data stack (<b>Snowflake,
                                    Fivetran, dbt, great_expectations, Sigma, Alation</b>) following Snowflake’s best practices.
                            </li>
                            <li style={{textAlign: "start"}}>
                                    Architected Source-To-Target mappings and implemented data transformations, building a more
                                structured and robust <b>dimensional model</b> with CI/CD engineering best practices in <b>dbt Cloud</b>.
                            </li>
                            <li style={{textAlign: "start"}}>
                                    Presented to critical stakeholders and project-level managers, communicating closely with the
                                client for <b>agile development </b>and change requests, and building <b>strong client relationships</b>.
                            </li>
                            <li style={{textAlign: "start"}}>
                                    Optimized and sped up <b>minute load times</b> of the BI team’s <b>Tableau</b> dashboards <b>into seconds</b> by
                                    transforming legacy data sources and queries optimized views in a modernized architecture.
                            </li>
                            <li style={{textAlign: "start"}}>
                                    Developed a <b>native Snowflake data application</b> and implemented an advanced and fully dynamic <b>role access security</b> for USFoods' internal vendor management system.
                            </li>
                        </ul>
                    </div>
                    <div className="App-cv-subject-date">
                        <p className="Subject">
                            <p><code style={{fontWeight: "900"}}>Florida Solar Energy Center, </code><code>Orlando, FL</code></p>
                        </p>
                        <p className="Subject">
                            <p><code>September 2020 - February 2021</code></p>
                        </p>
                    </div>
                    <div className="App-cv-subject-date" style={{marginTop: "-72.5px"}}>
                        <p className="Subject">
                            <p><code style={{textDecoration: "underline"}}>Data Scientist Intern</code></p>
                        </p>
                    </div>
                    <div className="App-cv-content">
                        <ul style={{marginTop: "-25px"}}>
                            <li style={{textAlign: "start"}}>
                                Combining <b>classical statistical testing</b> and <b>modern machine learning techniques</b> to help
                                identify and <b>optimize for their key KPIs</b>, then simulating the cost-benefits of leveraging
                                photovoltaic systems to various energy sources.
                            </li>
                        </ul>
                    </div>
                    <div className="App-cv-subject-date">
                        <p className="Subject">
                            <p><code style={{fontWeight: "900"}}>Plansource, </code><code>Salt Lake City, UT</code></p>
                        </p>
                        <p className="Subject">
                            <p><code>June 2020 - September 2020</code></p>
                        </p>
                    </div>
                    <div className="App-cv-subject-date" style={{marginTop: "-72.5px"}}>
                        <p className="Subject">
                            <p><code style={{textDecoration: "underline"}}>Data Scientist Intern</code></p>
                        </p>
                    </div>
                    <div className="App-cv-content">
                        <ul style={{marginTop: "-25px"}}>
                            <li style={{textAlign: "start"}}>
                                Combining <b>classical statistical testing</b> and <b>modern machine learning techniques</b> to help
                                identify and <b>optimize for their key KPIs</b>, then simulating the cost-benefits of leveraging
                                photovoltaic systems to various energy sources.
                            </li>
                        </ul>
                    </div>
                    <div className="App-cv-subject-date">
                        <p className="Subject">
                            <p><code style={{fontWeight: "900"}}>Valencia College, </code><code>Orlando, FL</code></p>
                        </p>
                        <p className="Subject">
                            <p><code>August 2018 - May 2020</code></p>
                        </p>
                    </div>
                    <div className="App-cv-subject-date" style={{marginTop: "-72.5px"}}>
                        <p className="Subject">
                            <p><code style={{textDecoration: "underline"}}>Instructional Mathematics Tutor</code></p>
                        </p>
                    </div>
                    <div className="App-cv-content">
                        <ul style={{marginTop: "-25px"}}>
                            <li style={{textAlign: "start"}}>
                                Combining <b>classical statistical testing</b> and <b>modern machine learning techniques</b> to help
                                identify and <b>optimize for their key KPIs</b>, then simulating the cost-benefits of leveraging
                                photovoltaic systems to various energy sources.
                            </li>
                        </ul>
                    </div>
                    <div className="App-cv-subject-date">
                        <p className="Subject" style={{marginTop: "20px"}}>
                            <p><code>Competitions and Academic Research</code></p>
                        </p>
                    </div>
                    <hr style={{borderWidth: "1px", width: "94%", marginTop: "-32.5px"}}/>
                    <div className="App-cv-subject-date">
                        <p className="Subject">
                            <p><code style={{fontWeight: "900"}}>Addition Financial Credit Union
                            {/*</code><code>Orlando, FL*/}
                            </code>
                            </p>
                        </p>
                        <p className="Subject">
                            <p><code>January 2022 </code></p>
                        </p>
                    </div>
                    <div className="App-cv-subject-date" style={{marginTop: "-72.5px"}}>
                        <p className="Subject">
                            <p><code style={{textDecoration: "underline"}}>2022 Consumer Credit Risk Analytics Competition</code></p>
                        </p>
                    </div>
                    <div className="App-cv-content">
                        <ul style={{marginTop: "-25px"}}>
                            <li style={{textAlign: "start"}}>
                                Combining <b>classical statistical testing</b> and <b>modern machine learning techniques</b> to help
                                identify and <b>optimize for their key KPIs</b>, then simulating the cost-benefits of leveraging
                                photovoltaic systems to various energy sources.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default CVPage;
