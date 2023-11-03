import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css";
import { FaPenSquare } from "react-icons/fa";

function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse }) {

    return (
        <div>
            <span style={{ fontSize: '30pt' }}>Dashboard</span>
            <hr></hr>
            <h3>Published Courses ({courses.length})</h3>
            <hr></hr>

            <div className="edit-courses">
                <h5>Course</h5>

                <div className="row justify-content-start">
                    <div className="col-6">
                        <input
                            value={course.name}
                            className="form-control"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })}
                        />
                        <input
                            value={course.number}
                            className="form-control"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })}
                        />
                    </div>
                    
                    <div className="col-4 dates-input">
                        <input
                            value={course.startDate}
                            className="form-control"
                            type="date"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                        />
                        <input
                            value={course.endDate}
                            className="form-control"
                            type="date"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                        />
                    </div>
                </div>

                <button
                    className="btn btn-danger"
                    onClick={addNewCourse} >
                    Add
                </button>
                <button
                    className="btn btn-danger"
                    onClick={updateCourse} >
                    Update
                </button>
            </div>



            <div className="container mt-4">
                <div className="list-group list-group-horizontal d-flex flex-row flex-wrap">
                    {courses.map((course) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item custom-list-item">
                            <div className="card course-card d-flex flex-column h-100">
                                <div className={`bg-danger p-5`}></div>

                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div className="card-details">
                                        <h5 className="card-title">{course._id} {course.name}</h5>
                                        <p className="card-text">{course._id}.19753.202410</p>
                                        <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                                    </div>

                                    <div className="edit-delete">
                                        <button
                                            className="btn btn-danger"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}>
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                            Delete
                                        </button>
                                    </div>

                                    <div>
                                        <FaPenSquare className="far" color={"grey"} />
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
