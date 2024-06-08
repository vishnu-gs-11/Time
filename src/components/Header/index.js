import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <nav>
      <div>
      
      <div>
        <div>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/counter" className="nav-item">Counter</Link>
            </li>
            <li>
              <Link to="/timer" className="nav-item">Timer</Link>
            </li>
          </ul>
        </div>
        <hr></hr>
      </div>
    </div>
    </nav>
  );
};

export default Header;
