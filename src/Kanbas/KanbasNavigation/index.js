import React from "react";
import { Link, useLocation } from "react-router-dom";
import './kanbasnav.css';
import findicon from "./findicon";
import 'bootstrap/dist/css/bootstrap.min.css';
import neu_logo from "../../images/neu_logo.png"

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const { pathname } = useLocation();

  return (
    <div className="col-3 sidebar">
      <ul>
        <li>
          <img src={neu_logo} className="neu-logo" alt="NEU Logo" />
        </li>
        {links.map((link) => (
          <li>
            <Link
              to={`/Kanbas/${link}`}
              className={`inactive-link ${pathname.includes(link) ? "active active-link" : ""}`}
            >
              {findicon(link)}
              {pathname.includes(link) ? 
              <span style={{ color: 'darkred' }}>{link}</span> : <span style={{ color: 'white' }}>{link}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
