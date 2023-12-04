import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([...courses, response.data]);
  };
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">

          <div className="col-1 p-0">
            <KanbasNavigation />
          </div>

          <div className="col">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} /> {/*Navigates to dashboard*/}
              <Route path="Account" element={<Account />} /> {/* Navigates to account when signed in*/}
              <Route path="/account/:id" element={<Account />} /> {/* Navigates to specific user's account */}
              <Route path="Dashboard" element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse} />} /> 
              <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} /> {/* Navigates to specific course*/}
              <Route path="/signin" element={<Signin />} /> {/* Navigates to sign in screen*/}
              <Route path="/admin/users" element={<UserTable />} /> {/* Navigates to list of users*/}
              <Route path="/signup" element={<Signup />} /> {/* Navigates to sign up screen*/}
            </Routes>

          </div>

        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
