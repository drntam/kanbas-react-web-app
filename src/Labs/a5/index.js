import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

const LAB_BASE = process.env.REACT_APP_LAB_BASE || "http://localhost:4000/a5";
const WELCOME_URL = `${LAB_BASE}/welcome`;

function Assignment5() {
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={WELCOME_URL}
                    className="list-group-item">
                    Welcome
                </a>
                <EncodingParametersInURLs />    
                <WorkingWithObjects />
                <WorkingWithArrays />
            </div>
        </div>
    );
}
export default Assignment5;