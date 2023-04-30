import "./Header.scss";
import logo from "./logo.svg";
import arrow from "./arrow.png";
import vector from "./vector.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="content">
        <div className="left">
          <div className="open">
            <div className="open-select">
              <ul>
                <li>
                  <Link to="#" className="open-link">
                    Main
                  </Link>
                </li>
                <li>
                  <Link to="#" className="open-link">
                    Statistics
                  </Link>
                </li>
                <li>
                  <Link to="#" className="open-link">
                    Textbook
                  </Link>
                </li>
                <li>
                  <Link to="#" className="open-link">
                    Sprint
                  </Link>
                </li>
                <li>
                  <Link to="#" className="open-link">
                    Audio-call
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="top1">
            <p>GlobalTalk</p>
          </div>
          <nav className="top2">
            <Link to="/" style={{ color: "black" }} className="div-link">
              Home
            </Link>
            <Link to="/" className="div-link">
              Textbook
            </Link>
            <Link to="/" className="div-link">
              Statistics
            </Link>
            <Link to="/" className="div-link">
              Games
            </Link>
            <img src={vector} alt="" />
          </nav>
        </div>
        <div className="top3">
          <img className="logo" src={logo} alt=""/>
          <button type="button">Sign Out</button>
          <img className="arrow" src={arrow} alt=""/>
          <img className="vector" src={vector} alt=""/>
        </div>
      </div>
    </header>
  );
};

export default Header;
