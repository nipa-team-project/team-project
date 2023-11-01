import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="home-content1">
        <img
          className="home_img home-desktop"
          src="/img/mainimg/desktop.png"
          alt="Desktop Home"
        />
        <img
          className="home_img home-mobile"
          src="/img/mainimg/mobile.png"
          alt="Mobile Home"
        />
      </div>

      <div className="home-content2">
        <Link to="/Login" className="link-style">
          지금 바로 이용하러가기
        </Link>
      </div>
    </div>
  );
};

export default Main;
