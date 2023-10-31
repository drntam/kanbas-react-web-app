import {FaUser, FaTachometerAlt, FaBook, FaCalendarAlt, FaInbox, FaClock, FaDesktop, FaArrowRight, FaQuestionCircle} from "react-icons/fa";

function findicon(link) {
    if (link === "Account") {
        return <FaUser size={24} color={"gray"}/>;
    }
    else if (link === "Dashboard") {
        return <FaTachometerAlt size={24}/>;
    }
    else if (link === "Courses") {
        return <FaBook size={24}/>;
    }
    else if (link === "Calendar") {
        return <FaCalendarAlt size={24}/>;
    }
    else if (link === "Inbox") {
        return <FaInbox size={24}/>;
    }
    else if (link === "History") {
        return <FaClock size={24}/>;
    }
    else if (link === "Studio") {
        return <FaDesktop size={24}/>;
    }
    else if (link === "Commons") {
        return <FaArrowRight size={24}/>;
    }
    else if (link === "Help") {
        return <FaQuestionCircle size={24}/>;
    }
}
export default findicon;