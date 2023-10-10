import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import "./rating.css";
import Filter from "../../shared/UIElements/Filter";

const dummydata = [
  {
    img: "/img/rating/notebook.png",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    date: "2023.09. 08",
    description:
      "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편. ",
    rank: "SS",
  },
  {
    img: "/img/rating/notebook.png",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    date: "2023.09. 08",
    description:
      "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편. ",
    rank: "S",
  },
  {
    img: "/img/rating/notebook.png",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    date: "2023.09. 08",
    description:
      "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편. ",
    rank: "A",
  },
  {
    img: "/img/rating/notebook.png",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    date: "2023.09. 08",
    description:
      "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편. ",
    rank: "B",
  },
  {
    img: "/img/rating/notebook.png",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    date: "2023.09. 08",
    description:
      "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편. ",
    rank: "C",
  },
  {
    img: "/img/rating/notebook.png",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    date: "2023.09. 08",
    description:
      "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편. ",
    rank: "SS",
  },
  {
    img: "/img/rating/notebook.png",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    date: "2023.09. 08",
    description:
      "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편. ",
    rank: "S",
  },
  {
    img: "/img/rating/notebook.png",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    date: "2023.09. 08",
    description:
      "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편. ",
    rank: "A",
  },
  {
    img: "/img/rating/notebook.png",
    name: "맥북 에어",
    model: "NT950XBE-X716A",
    date: "2023.09. 08",
    description:
      "모서리 부분 파손이 살짝 있음. 화면 상태는 기스 없이 깔끔한 편. ",
    rank: "B",
  },
];
const itemlen = 100;

const Rating = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchparamshandler = (sort, value) => {
    //쿼리 생성 및 변경
    searchParams.set(`${sort}`, `${value}`);
    setSearchParams(searchParams);
  };

  const menuarray = ["recent", "soldout", "interior"]; //쿼리에 따라 menu 체크
  const [menuindex, setMenuIndex] = useState(
    searchParams.get("situation") === null
      ? 0
      : parseInt(menuarray.indexOf(searchParams.get("situation")))
  );

  const page = Math.ceil(itemlen / 9); //데이터 총 개수에 따라 페이지 계산
  const pagearray = [];
  for (let i = 1; i < page + 1; i++) {
    pagearray.push(i);
  }
  const [pageindex, setPageIndex] = useState(
    searchParams.get("page") === null
      ? 0
      : parseInt(pagearray.indexOf(parseInt(searchParams.get("page")))) //쿼리에 따라 페이지 체크
  );

  const pageplus = () => {
    //페이지 증가
    if (pageindex === page - 1) {
      setPageIndex(pageindex);
    } else {
      setPageIndex(pageindex + 1);
      searchParams.set("page", `${pageindex + 2}`);
      setSearchParams(searchParams);
    }
  };
  const pageminus = () => {
    //페이지 감소
    if (pageindex === 0) {
      setPageIndex(0);
    } else {
      setPageIndex(pageindex - 1);
      searchParams.set("page", `${pageindex}`);
      setSearchParams(searchParams);
    }
  };

  const [pagecut, setPagecut] = useState(0); //페이지를 5단위로 체크하고 변경
  useEffect(() => {
    if (pageindex > pagecut + 4) {
      setPagecut(pagecut + 5);
    } else if (pageindex < pagecut) {
      setPagecut(pagecut - 5);
    }
  }, [pageindex, pagecut]);

  return (
    <React.Fragment>
      <div className="rating">
        <div className="rating_title center">노트북 등급</div>
        <div className="rating_guide center">
          나의 노트북을 모아볼 수 있습니다.
        </div>
        <div className="rating_sort">
          {[
            ["최근 등급 측정 노트북", "recent"],
            ["판매한 노트북", "soldout"],
            ["내부 등급 측정 노트북", "interior"],
          ].map((menu, index) => (
            <div
              key={index}
              className={`rating_sort_menu center ${
                menuindex === index ? " rating_sort_menu_active" : "" //선택된 메뉴 css 변경(기본은 첫번째 메뉴 활성화)
              }`}
              onClick={() => {
                setMenuIndex(index);
                searchparamshandler("situation", menu[1]); //메뉴 선택시 쿼리도 생성
              }}
            >
              {menu[0]}
            </div>
          ))}
          <Filter title="날짜순"></Filter>
          {/*클릭 시 필터 표시*/}
        </div>
        <div className="rating_notebook_contain">
          {dummydata.map((notebook, index) => (
            <div className="rating_notebook " key={index}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="rating_notebook_imgbox center">
                  <img
                    className="rating_notebook_img"
                    src={`${notebook.img}`}
                    alt="notebookimage"
                  ></img>
                </div>
              </div>
              <div className="rating_notebook_name">{notebook.name}</div>
              <div className="rating_notebook_model">
                모델명: {notebook.model}
                <br />
                등록일: {notebook.date}
              </div>
              <div className="rating_notebook_des">{notebook.description}</div>
              <img
                className="rating_notebook_rank"
                src={`/img/rating/${notebook.rank}.png`}
                alt="rankimage"
              ></img>
            </div>
          ))}
        </div>
        <div className="rating_page center">
          <img
            className="rating_page_arrow"
            src="/img/rating/leftarrow.png"
            onClick={pageminus}
          />
          <div className="rating_page_num_contain center">
            {/*페이지 표시*/}
            {page < 5
              ? pagearray.map((page, index) => (
                  <div
                    key={index}
                    className={`rating_page_num center ${
                      pageindex === index ? " rating_page_num_active" : ""
                    }`}
                    onClick={() => {
                      setPageIndex(index);
                      searchparamshandler("page", `${index + 1}`);
                    }}
                  >
                    {page}
                  </div>
                ))
              : pagearray.map((page, index) => {
                  return (
                    index >= pagecut &&
                    index <= 4 + pagecut && (
                      <div
                        key={index}
                        className={`rating_page_num center ${
                          pageindex === index ? " rating_page_num_active" : ""
                        }`}
                        onClick={() => {
                          setPageIndex(index);
                          searchparamshandler("page", `${index + 1}`);
                        }}
                      >
                        {page}
                      </div>
                    )
                  );
                })}
          </div>
          <img
            className="rating_page_arrow"
            src="/img/rating/rightarrow.png"
            onClick={pageplus}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rating;
