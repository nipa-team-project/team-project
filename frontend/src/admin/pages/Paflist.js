import React from "react";
import { useSearchParams } from "react-router-dom";

import "./Paflist.css";
import Page from "../../shared/UIElements/Page";

const dummydata = [
  {
    id: 1,
    nickname: "Teddy",
    time: "2023. 10. 31",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    des: "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편.",
    img: [
      "/img/admin/dummyimg/dummy1.png",
      "/img/admin/dummyimg/dummy2.png",
      "/img/admin/dummyimg/dummy3.png",
      "/img/admin/dummyimg/dummy4.png",
    ],
  },
  {
    id: 2,
    nickname: "최지원",
    time: "2023. 09. 12",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    des: "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편.",
    img: [
      "/img/admin/dummyimg/dummy1.png",
      "/img/admin/dummyimg/dummy2.png",
      "/img/admin/dummyimg/dummy3.png",
      "/img/admin/dummyimg/dummy4.png",
    ],
  },
  {
    id: 3,
    nickname: "최지원",
    time: "2023. 09. 12",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    des: "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편.",
    img: [
      "/img/admin/dummyimg/dummy1.png",
      "/img/admin/dummyimg/dummy2.png",
      "/img/admin/dummyimg/dummy3.png",
      "/img/admin/dummyimg/dummy4.png",
    ],
  },
  {
    id: 4,
    nickname: "최지원",
    time: "2023. 09. 12",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    des: "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편.",
    img: [
      "/img/admin/dummyimg/dummy1.png",
      "/img/admin/dummyimg/dummy2.png",
      "/img/admin/dummyimg/dummy3.png",
      "/img/admin/dummyimg/dummy4.png",
    ],
  },
  {
    id: 5,
    nickname: "최지원",
    time: "2023. 09. 12",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    des: "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편.",
    img: [
      "/img/admin/dummyimg/dummy1.png",
      "/img/admin/dummyimg/dummy2.png",
      "/img/admin/dummyimg/dummy3.png",
      "/img/admin/dummyimg/dummy4.png",
    ],
  },
  {
    id: 6,
    nickname: "최지원",
    time: "2023. 09. 12",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    des: "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편.",
    img: [
      "/img/admin/dummyimg/dummy1.png",
      "/img/admin/dummyimg/dummy2.png",
      "/img/admin/dummyimg/dummy3.png",
      "/img/admin/dummyimg/dummy4.png",
    ],
  },
  {
    id: 7,
    nickname: "최지원",
    time: "2023. 09. 12",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    des: "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편.",
    img: [
      "/img/admin/dummyimg/dummy1.png",
      "/img/admin/dummyimg/dummy2.png",
      "/img/admin/dummyimg/dummy3.png",
      "/img/admin/dummyimg/dummy4.png",
    ],
  },
];
const itemlen = 100;
const Paflist = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchparamshandler = (sort, value) => {
    //쿼리 생성 및 변경
    searchParams.set(`${sort}`, `${value}`);
    setSearchParams(searchParams);
  };

  return (
    <React.Fragment>
      <input className="paflist_search" placeholder="내용 검색하기"></input>
      <div className="paflist_title">매입신청서 리스트</div>
      <div className="pafilist_main">
        <div className="pafilist_main_listtop">
          <input type="checkbox"></input>
          <span style={{ marginLeft: "1rem" }}>Name</span>
          <span style={{ marginLeft: "11.4375rem" }}>Time</span>
        </div>
        {dummydata.map((list, index) => (
          <div className="pafilist_main_list" key={index}>
            <input type="checkbox"></input>
            <span style={{ marginLeft: "1rem", width: "8.8125rem" }}>
              <span style={{ fontWeight: "bold" }}>{index + 1}</span>{" "}
              {list.nickname}님의 매입신청서
            </span>
            <span style={{ marginLeft: "5rem", width: "4.9125rem" }}>
              {list.time}
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                width: "2.875rem",
                marginLeft: "28.875rem",
              }}
            >
              더보기
            </span>
            <img
              className="paflist_main_moreimg"
              src="/img/admin/more.png"
              alt="morepng"
            ></img>
          </div>
        ))}
      </div>
      <div className="paflist_page">
        <Page
          itemlen={itemlen}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          searchparamshandler={searchparamshandler}
        ></Page>
      </div>
    </React.Fragment>
  );
};

export default Paflist;
