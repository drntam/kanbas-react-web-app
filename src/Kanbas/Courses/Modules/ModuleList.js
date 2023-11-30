import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./modulelist.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";


function ModuleList() {
    const { courseId } = useParams();

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
      };
    
      useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

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

                {/* Add or Update Module and Description*/}
                <li className="list-group-item">
                    <div className="row d-flex justify-content-between">
                        <div className="col-9 edit-module-box">
                            <input value={module.name}
                                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                            />
                            <textarea value={module.description}
                                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                            />
                        </div>

                        <div className="col-3 justify-content-end add-update-btns">
                            <button
                                className="btn btn-danger"
                                onClick={handleAddModule}>
                                Add </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleUpdateModule}>
                                Update </button>
                        </div>
                    </div>
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
                                        {/* Edit and Delete Button */}

                                        <span className="edit-delete-btns">
                                            <button
                                                className="btn btn-light"
                                                onClick={() => dispatch(setModule(module))}>
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteModule(module._id)}>
                                                Delete
                                            </button>
                                        </span>

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