import React from "react";
import { useSearchParams } from "react-router-dom";
import Page from "../../shared/UIElements/Page";

import "./Userlist.css";

const dummydata = [
  {
    index: 1,
    id: "dac0eBdu",
    nickname: "Teddy",
    email: "jdh@naver.com",
    time: "2023. 10. 31",
    phoneNumer: "010-5988-5857",
  },
  {
    index: 2,
    id: "dac0efEdu",
    nickname: "최지원",
    email: "Jiwon@gmail.com",
    time: "2023. 09. 12",
    phoneNumer: "010-5988-5857",
  },
  {
    index: 3,
    id: "dac0efEdu",
    nickname: "최지원",
    email: "Jiwon@gmail.com",
    time: "2023. 10. 31",
    phoneNumer: "010-5988-5857",
  },
  {
    index: 4,
    id: "dac0efEdu",
    nickname: "최지원",
    email: "Jiwon@gmail.com",
    time: "2023.  10. 31",
    phoneNumer: "010-5988-5857",
  },
  {
    index: 5,
    id: "dac0efEdu",
    nickname: "최지원",
    email: "Jiwon@gmail.com",
    time: "2023. 10. 31",
    phoneNumer: "010-5988-5857",
  },
  {
    index: 6,
    id: "dac0efEdu",
    nickname: "최지원",
    email: "Jiwon@gmail.com",
    time: "2023.  10. 31",
    phoneNumer: "010-5988-5857",
  },
  {
    index: 7,
    id: "dac0efEdu",
    nickname: "최지원",
    email: "Jiwon@gmail.com",
    time: "2023. 10. 31",
    phoneNumer: "010-5988-5857",
  },
];

const itemlen = 100;

const Userlist = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchparamshandler = (sort, value) => {
    //쿼리 생성 및 변경
    searchParams.set(`${sort}`, `${value}`);
    setSearchParams(searchParams);
  };
  return (
    <React.Fragment>
      <input className="paflist_search" placeholder="내용 검색하기"></input>
      <div className="paflist_title">유저 리스트</div>
      <div className="pafilist_main">
        <div className="pafilist_main_listtop">
          <input type="checkbox"></input>
          <span style={{ marginLeft: "1rem" }}>Name</span>
          <span style={{ marginLeft: "11.8125rem" }}>E-mail</span>
          <span style={{ marginLeft: "13.5625rem " }}>Join Date</span>
        </div>
        {dummydata.map((list, index) => (
          <div className="pafilist_main_list" key={index}>
            <input type="checkbox"></input>
            <span style={{ marginLeft: "1rem", width: "13.1875rem" }}>
              <span style={{ fontWeight: "bold" }}>{index + 1}</span> {list.nickname}
            </span>
            <span style={{ marginLeft: "1rem", width: "16.125rem" }}>{list.email}</span>
            <span style={{ width: "79px" }}>{list.time}</span>
            <span
              style={{
                fontSize: "0.75rem",
                width: "2.875rem",
                marginLeft: "12.3125rem",
              }}>
              더보기
            </span>
            <img className="paflist_main_moreimg" src="/img/admin/more.png" alt="morepng"></img>
          </div>
        ))}
      </div>
      <div className="paflist_page">
        <Page itemlen={itemlen} searchParams={searchParams} setSearchParams={setSearchParams} searchparamshandler={searchparamshandler}></Page>
      </div>
    </React.Fragment>
  );
};

export default Userlist;
