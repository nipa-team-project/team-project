import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!userid || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    console.log("로그인 시도:", userid, password);

    if (password === "0000") {
      console.log("로그인 성공:", userid);
      setError(null);
      navigate("/");
    } else {
      console.log("로그인 실패");
      setError("잘못된 비밀번호입니다. 다시 확인해주세요.");
    }
  };

  const kakaoHandleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_`;
  };

  return (
    <div>
      <img className="welcome" src="/img/loginimg/Welcome.png" alt="Welcome" />
      <h1 className="text_welcome">환영합니다!</h1>
      <form>
        <input
          type="text"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={error ? "error-input" : ""}
        />
        {error && <p className="error">{error}</p>}
        <button type="button" onClick={handleLogin}>
          로그인하기
        </button>
        <div className="nosignup">
          <p>아직 회원이 아니세요?</p>
          <p>
            <Link to="/Signup" className="signup">
              회원가입하기
            </Link>
          </p>
        </div>
      </form>
      <div className="icon_content">
        <div className="icon_wrapper">
          <img className="icons" src="/img/loginimg/Kakao.png" alt="kakao" />
          <Link to="" className="icon_text" onClick={kakaoHandleLogin}>
            카카오톡으로 시작
          </Link>
        </div>

        <div className="icon_wrapper">
          <img className="icons" src="/img/loginimg/Naver.png" alt="naver" />
          <Link to="" className="icon_text">
            네이버로 시작
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
