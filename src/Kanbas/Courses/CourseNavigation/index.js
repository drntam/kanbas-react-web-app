import { Link, useParams, useLocation } from "react-router-dom";
import "./coursenavigation.css";
import { FaBars } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function CourseNavigation() {
    const links = [
        "Home",
        "Modules",
        "Piazza",
        "Assignments",
        "Quizzes",
        "Grades",
        "People",
        "Discussion",
        "Announcements",
        "Pages",
        "Files",
        "Rubrics",
        "Outcomes",
        "Collaborations",
        "Syllabus",
        "Settings",
    ];
    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div className="list-group course-navigation" style={{ width: 150 }}>
            {links.map(
                (link, index) =>
                    pathname.includes(link) && (
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb d-none d-md-block">
                                <li class="breadcrumb-item active" aria-current="page">
                                    <div className="course-nav-top">
                                        <IoIosArrowForward className="breadcrumb-arrow" />
                                        <span className="course-header-nav">{link}</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    )
            )}
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    {link}
                </Link>
            ))}
        </div>

    );
}


export default CourseNavigation;