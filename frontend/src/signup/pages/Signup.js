import React, { useEffect, useState } from "react";
import "./Signup.css";

const Signup = () => {
  const initialFormData = {
    userid: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isUseridAvailable, setIsUseridAvailable] = useState(null);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [mobilePage, setMobilePage] = useState(1);

  const nextpage = () => {
    if (mobilePage === 1) {
      setMobilePage(2);
    } else if (mobilePage === 2) {
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);
      setInvalidEmail(!isValidEmail);
    }

    if (name === "phoneNumber") {
      const cleanedValue = value.replace(/[^0-9]/g, "");
      const formattedValue = cleanedValue.replace(
        /(\d{3})(\d{0,4})(\d{0,4})/,
        (match, p1, p2, p3) => {
          let result = p1;
          if (p2) result += `-${p2}`;
          if (p3) result += `-${p3}`;
          return result;
        }
      );

      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    if (name === "confirmPassword" && value && formData.password) {
      setPasswordMismatch(formData.password !== value);
    }

    if (name === "userid") {
      setIsUseridAvailable(null);
    }
  };

  const handleCheckAvailability = () => {
    const isAvailable = !formData.userid.includes("admin");
    setIsUseridAvailable(isAvailable);
  };

  const handleSubmit = () => {};

  const handleReset = () => {
    setFormData(initialFormData);
    setPasswordMismatch(false);
    setIsUseridAvailable(null);
  };

  return (
    <div>
      <h1 className="signup-text">회원가입</h1>
      <form className="signup-form">
        <div
          style={{
            display: isMobile && mobilePage !== 1 ? "none" : "block",
          }}
        >
          <label className="signup-label">아이디 </label>
          <div className="id-content">
            <input
              type="text"
              name="userid"
              value={formData.userid}
              onChange={handleChange}
              className="id-input"
              placeholder="아이디를 입력해주세요."
            />
            <button
              type="button"
              className="double_check"
              onClick={handleCheckAvailability}
            >
              중복확인
            </button>
          </div>

          {isUseridAvailable !== null && (
            <p className="isuserid_available">
              {isUseridAvailable
                ? "사용 가능한 아이디입니다."
                : "이미 사용 중인 아이디입니다."}
            </p>
          )}

          <label className="signup-label">비밀번호 </label>
          <input
            className="signup-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요."
          />

          <label className="signup-label">비밀번호 확인 </label>
          <input
            className="signup-input"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력해주세요."
          />
          {passwordMismatch && formData.confirmPassword && (
            <p className="password_mismatch">
              비밀번호가 일치하지 않습니다. 다시 입력해주세요.
            </p>
          )}
        </div>
        <div
          style={{
            display: isMobile && mobilePage !== 2 ? "none" : "block",
          }}
        >
          <label className="signup-label">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력해주세요."
            className="signup-input"
          />

          <label className="signup-label">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일을 입력해주세요."
            className="signup-input"
          />
          {invalidEmail && formData.email && (
            <p className="invalid_email">
              잘못된 형식의 이메일입니다. 다시 입력해주세요.
            </p>
          )}

          <label className="signup-label">휴대전화</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="휴대전화 번호를 입력해주세요."
            className="signup-input"
          />
        </div>
      </form>

      <div className="signup-bottom">
        <button type="button" className="reset_button" onClick={handleReset}>
          초기화
        </button>
        <button
          className="signup-next"
          style={{
            display: isMobile && mobilePage === 1 ? "block" : "none",
            marginLeft: "0.5rem",
            background: "#4F80FF",
            border: "none",
            color: "#ffffff",
          }}
          onClick={nextpage}
        >
          {mobilePage === 1 ? "다음으로" : "다음 단계"}
        </button>
        <button
          type="button"
          className="signup_button"
          onClick={handleSubmit}
          style={{
            display: isMobile ? (mobilePage === 2 ? "block" : "none") : "block",
          }}
        >
          회원가입 하기
        </button>
      </div>
    </div>
  );
};

export default Signup;
