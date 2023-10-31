import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./assignmenteditor.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
            <div className="float-end">
                <button className="btn">
                    <BsCheckCircleFill className="published-icon" />
                    <span className="published">Published</span>
                </button>
                <button className="btn btn-light">
                    <BsThreeDotsVertical />
                </button>
            </div>

            <br />
            <br />
            <hr />

            <span className="assignment-name">Assignment Name</span>
            <input value={assignment.title} className="form-control mb-2 assignment-name-input" />
            <hr />
            <div className="float-end">
                <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-light"
                >
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2">
                    Save
                </button>
            </div>
        </div>
    );
}


export default AssignmentEditor;