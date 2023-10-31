import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!userid || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    console.log("로그인 시도:", userid, password);

    try {
      // 실제 백엔드로 요청을 보내어 토큰을 받아오는 부분
      const response = await fetch(
        "http://your-backend-url.com/accounts/login",
        {
          // 백엔드 URL로 POST 요청을 보냄
          method: "POST", // 요청 방식은 POST
          headers: {
            // 요청 헤더
            "Content-Type": "application/json", // JSON 형태로 요청 보냄
          },
          body: JSON.stringify({ userid, password }), // JSON 문자열로 변환하여 body에 userid와 password를 전달
        }
      );

      if (response.ok) {
        // 응답이 성공하면
        const data = await response.json(); // 응답 데이터를 JSON 형태로 파싱
        const accessToken = data.accessToken; // 받은 응답 데이터에서 액세스 토큰 추출
        const refreshToken = data.refreshToken; // 받은 응답 데이터에서 리프레시 토큰 추출

        // 토큰을 로컬 스토리지에 저장
        localStorage.setItem("accessToken", accessToken); // 액세스 토큰을 로컬 스토리지에 저장
        localStorage.setItem("refreshToken", refreshToken); // 리프레시 토큰을 로컬 스토리지에 저장

        console.log("로그인 성공:", userid); // 성공 메시지를 콘솔에 출력
        setError(null); // 에러 상태 초기화
        navigate("/"); // 홈페이지로 이동
      } else {
        // 응답이 실패하면
        console.log("로그인 실패"); // 실패 메시지를 콘솔에 출력
        setError("잘못된 비밀번호입니다. 다시 확인해주세요."); // 오류 메시지 설정
      }
    } catch (error) {
      // 오류 발생 시
      console.error("로그인 오류:", error); // 오류를 콘솔에 출력
      setError("로그인 중 오류가 발생했습니다."); // 오류 메시지 설정
    }
  };

  useEffect(() => {
    // 여기서 토큰 확인 또는 다른 작업 수행
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      // 토큰이 있다면, 로그인 상태로 처리
      navigate("/"); // 예시: 로그인 상태이므로 홈페이지로 이동
    }
  }, []);

  return (
    <div className="login-page">
      <img className="welcome" src="/img/loginimg/Welcome.png" alt="Welcome" />
      <p className="text_welcome">환영합니다!</p>
      <form className="login-form">
        <input
          type="text"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
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
