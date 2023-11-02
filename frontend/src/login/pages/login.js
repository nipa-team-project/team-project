import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook"; //api호출 훅 불러오기

import "./login.css";

const Rest_api_key = "3a8a581619662b5a126943e55dfda42f"; // REST API KEY
const redirect_uri = "http://localhost:3000/auth"; // Redirect URI
// OAuth 요청 URL
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${`3a8a581619662b5a126943e55dfda42f`}&redirect_uri=${`https://localhost:3000/auth`}&response_type=code`;

const kakaoHandleLogin = () => {
  window.location.href = kakaoURL;
};

const code = new URL(window.location.href).searchParams.get("code");
console.log(code);

const NAVER_CLIENT_ID = "VVPjzaZLMHYFfBStGKMf"; // 발급받은 클라이언트 아이디
const REDIRECT_URI = "http://localhost:3000/auth"; // Callback URL
const STATE = "False";
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${`VVPjzaZLMHYFfBStGKMf`}&state=${`False`}&redirect_uri=${`https://localhost:3000/auth`}`;

const naverHandleLogin = () => {
  window.location.href = NAVER_AUTH_URL;
};

const Login = () => {
  const { isLoading, sendRequest, clearError } = useHttpClient(); // useHttpClient 훅 사용

  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!id || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    console.log("로그인 시도:", id, password);

    try {
      const formData = new FormData();
      formData.append("username", id);
      formData.append("password", password);
      const responseData = await sendRequest(
        "http://127.0.0.1:8000/accounts/login",
        "POST",
        formData
      );

      const { access_token, refresh_token } = responseData;

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);

      console.log(responseData.access_token);

      setError(null);
      navigate("/");
    } catch (error) {
      setError("잘못된 비밀번호입니다. 다시 확인해주세요.");
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-page">
      <img className="welcome" src="/img/loginimg/Welcome.png" alt="Welcome" />
      <p className="text_welcome">환영합니다!</p>
      <form className="login-form">
        <input
          type="text"
          value={id}
          onChange={(e) => setID(e.target.value)}
          className="login-input"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={error ? "error-input" : "login-input"}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleLogin} className="login-button">
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
          <Link className="icon_text" onClick={kakaoHandleLogin}>
            <img className="icons" src="/img/loginimg/Kakao.png" alt="kakao" />
            <p>카카오톡으로 시작</p>
          </Link>
        </div>

        <div className="icon_wrapper">
          <Link className="icon_text" onClick={naverHandleLogin}>
            <img className="icons" src="/img/loginimg/Naver.png" alt="naver" />
            <p>네이버로 시작</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
