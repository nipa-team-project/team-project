import React, { useState } from "react";
import "./Signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [isUseridAvailable, setIsUseridAvailable] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

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

  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <label>아이디 </label>
        <div>
          <input
            type="text"
            name="userid"
            value={formData.userid}
            onChange={handleChange}
            className="input_id"
          />
          <button
            type="button"
            className="double_check"
            onClick={handleCheckAvailability}
          >
            중복확인
          </button>
          {isUseridAvailable !== null && (
            <p style={{ color: isUseridAvailable ? "green" : "red" }}>
              {isUseridAvailable
                ? "사용 가능한 아이디입니다."
                : "이미 사용 중인 아이디입니다."}
            </p>
          )}
        </div>

        <label>비밀번호 </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label>비밀번호 확인 </label>
        <input
          className="input_password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {passwordMismatch && formData.confirmPassword && (
          <p className="password_mismatch">
            비밀번호가 일치하지 않습니다. 다시 입력해주세요.
          </p>
        )}

        <label>이름</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>이메일</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>휴대전화</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </form>

      <div className="buttons">
        <button type="button" className="reset_button">
          초기화
        </button>
        <button type="button" className="signup_button" onClick={handleSubmit}>
          회원가입 하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;
