import ModuleList from "../Modules/ModuleList";
import "./home.css";
import { FaBan, FaCheckCircle, FaFileImport, FaArrowRight, FaDotCircle, FaChartBar, FaBullhorn, FaBell, FaCalendarAlt} from "react-icons/fa";

function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-9">
                    <ModuleList />
                </div>

                {/* Status */}
                <div className="col-3">
                    <div className="col-3 d-none d-lg-none d-xl-block flex-nowrap" style={{ width: '265px' }}>
                        <div>
                            <h5>Course Status</h5>
                            <button className="btn btn-light">
                                <FaBan /> Unpublish
                            </button>
                            <button className="btn btn-success">
                                <FaCheckCircle /> Published
                            </button>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <button className="btn btn-light" style={{ marginTop: '2px' }}>
                                <FaFileImport className="mr-5px"/>
                                Import Existing Content
                            </button>
                            <button className="btn btn-light" style={{ marginTop: '2px' }}>
                                <FaArrowRight className="mr-5px"/>
                                Import From Commons
                            </button>
                            <button className="btn btn-light" style={{ marginTop: '2px' }}>
                                <FaDotCircle className="mr-5px"/>
                                Choose Home Page
                            </button>
                            <button className="btn btn-light" style={{ marginTop: '2px' }}>
                                <FaChartBar className="mr-5px"/>
                                View Course Stream
                            </button>
                            <button className="btn btn-light" style={{ marginTop: '2px' }}>
                                <FaBullhorn className="mr-5px"/>
                                New Announcement
                            </button>
                            <button className="btn btn-light" style={{ marginTop: '2px' }}>
                                <FaChartBar className="mr-5px"/>
                                New Analytics
                            </button>
                            <button className="btn btn-light" style={{ marginTop: '2px' }}>
                                <FaBell className="mr-5px"/>
                                View Course Notifications
                            </button>
                        </div>

                        <div className="mt-4">
                            <h5>To Do</h5>
                            <hr />
                            <a className="active redlinks" style={{ fontSize: 'large' }} href="grades.html">Grade A1 - ENV + HTML</a>
                            <p>100 points Sep 18 at 11:59pm</p>
                        </div>

                        <div style={{ marginTop: '50px' }}>
                            <h5 style={{ display: 'inline' }}>Coming Up</h5>
                            <a className="active float-end redlinks" href="#" style={{ marginLeft: '5px' }}>
                                View Calendar
                            </a>
                            <FaCalendarAlt className="float-end view-calendar"/>
                            <hr />

                            <div>
                                <FaCalendarAlt />
                                <div style={{ display: 'inline' }}>
                                    <a className="active redlinks" style={{ fontSize: 'large' }} href="#">Lecture</a>
                                    <p>
                                        CS4550.12631.202410<br />
                                        Sep 11 at 11:45am
                                    </p>
                                </div>

                                <FaCalendarAlt/>
                                <div style={{ display: 'inline' }}>
                                    <a className="active redlinks" style={{ fontSize: 'large' }} href="#">CS 5610 Summer 1</a>
                                    <p>
                                        CS4550.12631.202410<br />
                                        Sep 11 at 6 pm
                                    </p>
                                </div>

                                <FaCalendarAlt/>
                                <div style={{ display: 'inline', marginRight: '10px' }}>
                                    <a className="active redlinks" style={{ fontSize: 'large' }} href="#">CS5610 06 SP23 Lecture</a>
                                    <p>
                                        CS4550.12631.202410<br />
                                        Sep 11 at 7:00am
                                    </p>
                                </div>
                                <div>
                                    <a href="#" className="active redlinks"> 12 more in the next week ... </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;