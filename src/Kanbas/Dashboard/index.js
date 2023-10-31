import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css";
import { FaPenSquare } from "react-icons/fa";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <span style={{ fontSize: '30pt' }}>Dashboard</span>
            <hr></hr>
            <h3>Published Courses ({courses.length})</h3>
            <hr></hr>

            <div className="container mt-4">
                <div className="list-group list-group-horizontal d-flex flex-row flex-wrap">
                    {courses.map((course) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item custom-list-item">
                            <div class="card course-card d-flex flex-column h-100">
                                <div class={`bg-danger p-5`}></div>
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 class="card-title">{course._id} {course.name}</h5>
                                        <p class="card-text">{course._id}.19753.202410</p>
                                        <p class="card-text">202410_1 Fall 2023 Semester Full Term</p>
                                    </div>
                                    <div>
                                        <FaPenSquare class="far" color={"grey"} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
