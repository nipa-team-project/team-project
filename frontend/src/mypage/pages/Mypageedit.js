import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Mypageedit.css";
import {
  validate,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_PHONE,
} from "../../shared/util/validator";

const Mypageedit = () => {
  const navigate = useNavigate();

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [smallpage, setSmallpage] = useState(1);
  const nextpage = () => {
    setAuthList({
      ...authlist,
      id: errid,
      pw: errpw,
      pwcheck: errpwcheck,
    });
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [errid, setErrId] = useState(true);
  const [errpw, setErrPw] = useState(true);
  const [errpwcheck, setErrPwCheck] = useState(true);
  const [errname, setErrName] = useState(true);
  const [erremail, setErrEmail] = useState(true);
  const [errphone, setErrPhone] = useState(true);
  const [authlist, setAuthList] = useState({
    name: false,
    pw: false,
    pwcheck: false,
    id: false,
    email: false,
    phone: false,
  });
  const [inputlist, setInputList] = useState({
    name: "",
    pw: "",
    pwcheck: "",
    id: "",
    email: "",
    phone: "",
  });

  const check = (e, validator, setstate) => {
    const value = e.target.value;
    const isValid = validate(value, [validator]);
    setstate(isValid);
  };

  useEffect(() => {
    setErrPwCheck(inputlist.pw === inputlist.pwcheck);
  }, [inputlist]);

  const handleButtonClick = () => {
    setAuthList({
      ...authlist,
      name: errname,
      pw: errpw,
      pwcheck: errpwcheck,
      id: errid,
      email: erremail,
      phone: errphone,
    });
  };

  useEffect(() => {
    if (
      isSmallScreen &&
      smallpage === 1 &&
      authlist.id &&
      authlist.pw &&
      authlist.pwcheck &&
      inputlist.id !== "" &&
      inputlist.pw !== "" &&
      inputlist.pwcheck !== ""
    ) {
      setSmallpage(2);
      return;
    }
    if (
      Object.values(authlist).every((value) => value === true) &&
      Object.values(inputlist).every((value) => value !== "")
    ) {
      navigate("/");
    }
  }, [authlist]);

  return (
    <React.Fragment>
      <img
        className="mypage-edit_img"
        src="/img/mypage/Default.png"
        alt="mypageimg"
      ></img>

      <div className="mypage-auth_contentcontain">
        <div
          className="mobile-page1"
          style={{
            display: isSmallScreen && smallpage !== 1 ? "none" : "block",
          }}
        >
          <div className="mypage-auth_content">
            <span className="mypage-auth_content_name">아이디</span>
            <input
              className="mypage-auth_content_input"
              style={{ borderColor: !errid ? "#FF4848" : "" }}
              onChange={(e) => {
                check(e, VALIDATOR_REQUIRE(), setErrId);
                setInputList({ ...inputlist, id: e.target.value });
              }}
              placeholder="아이디를 입력해주세요."
            ></input>
            <span
              className="mypage-auth_content_err"
              style={{ color: !errid ? "#FF4848" : "" }}
            >
              {!errid && "아이디를 입력해주세요."}
            </span>
          </div>

          <div className="mypage-auth_content">
            <span className="mypage-auth_content_name">비밀번호</span>
            <input
              type="password"
              className="mypage-auth_content_input"
              style={{ borderColor: !errpw ? "#FF4848" : "" }}
              onChange={(e) => {
                check(e, VALIDATOR_MINLENGTH(6), setErrPw);
                setInputList({ ...inputlist, pw: e.target.value });
              }}
              placeholder="비밀번호를 입력해주세요."
            ></input>
            <span
              className="mypage-auth_content_err"
              style={{ color: !errpw ? "#FF4848" : "" }}
            >
              {!errpw && "6자 이상 입력해주세요."}
            </span>
          </div>

          <div className="mypage-auth_content">
            <span className="mypage-auth_content_name">비밀번호 확인</span>
            <input
              type="password"
              className="mypage-auth_content_input"
              style={{ borderColor: !errpwcheck ? "#FF4848" : "" }}
              onChange={(e) => {
                setInputList({ ...inputlist, pwcheck: e.target.value });
              }}
              placeholder="비밀번호를 입력해주세요."
            ></input>
            <span
              className="mypage-auth_content_err"
              style={{ color: !errpwcheck ? "#FF4848" : "" }}
            >
              {!errpwcheck && "비밀번호가 다릅니다."}
            </span>
          </div>
        </div>
        <div
          className="mobile-page2"
          style={{
            display: isSmallScreen && smallpage !== 2 ? "none" : "block",
          }}
        >
          <div className="mypage-auth_content">
            <span className="mypage-auth_content_name">이름</span>
            <input
              className="mypage-auth_content_input"
              style={{ borderColor: !errname ? "#FF4848" : "" }}
              onChange={(e) => {
                check(e, VALIDATOR_REQUIRE(), setErrName);
                setInputList({ ...inputlist, name: e.target.value });
              }}
              placeholder="이름을 입력해주세요."
            ></input>
            <span
              className="mypage-auth_content_err"
              style={{ color: !errname ? "#FF4848" : "" }}
            >
              {!errname && "이름을 입력해주세요."}
            </span>
          </div>

          <div className="mypage-auth_content">
            <span className="mypage-auth_content_name">이메일</span>
            <input
              className="mypage-auth_content_input"
              style={{ borderColor: !erremail ? "#FF4848" : "" }}
              onChange={(e) => {
                check(e, VALIDATOR_EMAIL(), setErrEmail);
                setInputList({ ...inputlist, email: e.target.value });
              }}
              placeholder="이메일을 입력해주세요."
            ></input>
            <span
              className="mypage-auth_content_err"
              style={{ color: !erremail ? "#FF4848" : "" }}
            >
              {!erremail && "이메일 형식이 아닙니다."}
            </span>
          </div>

          <div className="mypage-auth_content">
            <span className="mypage-auth_content_name">휴대전화</span>
            <input
              className="mypage-auth_content_input"
              style={{ borderColor: !errphone ? "#FF4848" : "" }}
              onChange={(e) => {
                check(e, VALIDATOR_PHONE(), setErrPhone);
                setInputList({ ...inputlist, phone: e.target.value });
              }}
              placeholder="휴대전화를 입력해주세요."
            ></input>
            <span
              className="mypage-auth_content_err"
              style={{ color: !errphone ? "#FF4848" : "" }}
            >
              {!errphone && "‘-’없이 휴대폰번호 11자리를 입력해주세요."}
            </span>
          </div>
        </div>
      </div>
      <div className="mypage-auth_btncontain">
        <button
          className="mypage-auth_btn"
          onClick={() => window.history.back()}
        >
          취소하기
        </button>
        <button
          className="mypage-auth_btn"
          style={{
            display: isSmallScreen && smallpage === 1 ? "block" : "none",
            marginLeft: "0.5rem",
            background: "#4F80FF",
            border: "none",
            color: "#ffffff",
          }}
          onClick={nextpage}
        >
          다음으로
        </button>
        <button
          className="mypage-auth_btn"
          style={{
            display: isSmallScreen
              ? smallpage === 2
                ? "block"
                : "none"
              : "block",
            marginLeft: "0.5rem",
            background: "#4F80FF",
            border: "none",
            color: "#ffffff",
          }}
          onClick={handleButtonClick}
        >
          내 정보 수정하기
        </button>
      </div>
    </React.Fragment>
  );
};

export default Mypageedit;
