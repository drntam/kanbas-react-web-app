import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./assignments.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="assignments-page">

            {/* Assignments Header and Buttons */}
            <div className="row assignments-header flex-grow">
                <div className="input-group col mb-3 search-assignment">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for Assignments"
                    />
                </div>
                <div className="col buttons-assignments-top">
                    <button type="button" className="btn btn-light float-end">
                        <AiOutlinePlus className="mr-5" />
                        Group
                    </button>
                    <button type="button" className="btn btn-danger float-end">
                        <AiOutlinePlus className="mr-5" />
                        Assignment
                    </button>
                    <button type="button" className="btn btn-light float-end">
                        <BsThreeDotsVertical />
                    </button>
                </div>
                <hr />
            </div>

            {/* Assignments */}
            <div className="assignments-table">
                <div className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary"
                        style={{ fontWeight: "bold" }}>
                        ASSIGNMENTS
                        <div className="btns-assignment">
                            <span className="badge rounded-pill">
                                <div style={{ color: "black" }}>40% of Total</div>
                            </span>
                            <span>
                                <AiOutlinePlus />
                            </span>
                            <span>
                                <BsThreeDotsVertical />
                            </span>
                        </div>
                    </li>
                    <div className="border-green-left">
                        {courseAssignments.map((assignment) => (
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                className="list-group-item d-flex justify-content-between align-items-center assignment-item"
                            >
                                <div className="assignment-title-group">
                                    <FaPencilAlt style={{ color: 'green' }} />
                                    <span className="assignment-title">{assignment.title}</span> <br />
                                    <div className="assignment-details">
                                        <span style={{ color: "darkred" }}>Multiple Modules</span>{" "}
                                        | Due Sep 18 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Assignments;