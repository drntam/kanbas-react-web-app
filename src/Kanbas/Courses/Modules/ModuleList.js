import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./modulelist.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

    return (
        <div className="home-modules">
            <div >
                {/* Expand Options Button */}
                <button type="button" class="btn btn-light float-end">
                    <BsThreeDotsVertical />
                </button>

                {/* Add Module Button */}
                <button type="button" class="btn btn-danger float-end">
                    <BsPlus size={20} /> Module
                </button>

                {/* Publish All Button */}
                <div class="dropdown">
                    <button
                        class="btn btn-light dropdown-toggle float-end"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <BsCheckCircleFill color={"green"} /> Publish All
                    </button>
                </div>

                {/* View Progress Button */}
                <button type="button" class="btn btn-light float-end">
                    View Progress
                </button>

                {/* Collapse All Button */}
                <button type="button" class="btn btn-light float-end">
                    Collapse All
                </button>
                <br />
                <br />
                <hr />
                <br />

            </div>
            <ul className="list-group home-modules">
                {/* The Title of the Modules */}
                <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary module-title">
                    <span class="module-title">Week 0 - INTRO</span>
                    <BsThreeDotsVertical />
                </li>

                {/* Module List For the Week*/}
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div>
                            {/* Module name */}
                            <div className="complete-modules">
                                <li
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    <span className="module-name wd-flex-row-container">
                                        {module.name}
                                    </span>
                                    <div>
                                        <BsCheckCircleFill color={"green"} />
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            </div>

                            {/* Module description */}
                            <div className="module-description">
                                <li
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    {module.description}

                                    <div>
                                        <BsCheckCircleFill color={"green"} />
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            </div>
                        </div>
                    ))}
            </ul>
        </div>
    );
}
export default ModuleList;