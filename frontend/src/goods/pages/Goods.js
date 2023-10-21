import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";

import "./Goods.css";
import Pagetitle from "../../shared/Pagetitle/Pagetitle";
import Filter from "../../shared/UIElements/Filter";
import Page from "../../shared/UIElements/Page";

const dummydata = [
  {
    id: 1,
    img: "/img/rating/notebook.png",
    tag: "마지막 수량",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000",
    OS: "Window 10 Home",
    scale: "15.6인치",
    businessuse: ["exel", "ppt", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
    rank: "S",
  },
  {
    id: 2,
    img: "/img/rating/notebook.png",
    tag: "3개 한정 X 리퍼연구소 특가할인",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000",
    OS: "Window 10 Home",
    scale: "15.6인치",
    businessuse: ["exel", "ppt", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
    rank: "A",
  },
  {
    id: 3,
    img: "/img/rating/notebook.png",
    tag: "마지막 수량",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000",
    OS: "Window 10 Home",
    scale: "15.6인치",
    businessuse: ["exel", "ppt", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
    rank: "B",
  },
  {
    id: 4,
    img: "/img/rating/notebook.png",
    tag: "마지막 수량",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000",
    OS: "Window 10 Home",
    scale: "15.6인치",
    businessuse: ["exel", "ppt", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
    rank: "S",
  },
  {
    id: 5,
    img: "/img/rating/notebook.png",
    tag: "3개 한정 X 리퍼연구소 특가할인",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000",
    OS: "Window 10 Home",
    scale: "15.6인치",
    businessuse: ["exel", "ppt", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
    rank: "A",
  },
  {
    id: 6,
    img: "/img/rating/notebook.png",
    tag: "마지막 수량",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000",
    OS: "Window 10 Home",
    scale: "15.6인치",
    businessuse: ["exel", "ppt", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
    rank: "B",
  },
];

const itemlen = 100;

const Goods = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchparamshandler = (sort, value) => {
    //쿼리 생성 및 변경
    searchParams.set(`${sort}`, `${value}`);
    setSearchParams(searchParams);
  };
  return (
    <div className="goods">
      <Pagetitle title="구매하기">
        판매자들의 노트북을 구매할 수 있습니다
      </Pagetitle>
      <div className="goods_sortcontain">
        <Filter title="낮은가격순"></Filter>
      </div>
      <div className="goods_notebookcontain">
        {dummydata.map((notebook, index) => (
          <NavLink
            key={index}
            to={`/main/goods/${notebook.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="goods_notebook" key={index}>
              <div>
                {/*-- */}
                <div className="goods_notebook_imgbox center">
                  <img
                    className="goods_notebook_img"
                    src={`${notebook.img}`}
                    alt="notebookimage"
                  ></img>
                </div>
                <div className="goods_notebook_name">
                  {notebook.tag && <>[{notebook.tag}]</>}
                  {notebook.name}
                </div>
                <div className="goods_notebook_pricecontain">
                  <div className="goods_notebook_price">{notebook.price}원</div>
                  <div className="goods_notebook_discount">
                    {notebook.discountprice}원
                  </div>
                </div>
              </div>
              {/*-- */}
              <div>
                <div className="goods_notebook_des">
                  <div className="goods_descontain">
                    <div className="goods_des_title">OS</div>
                    <div className="goods_des_value">
                      <img
                        className="goods_dev_osimg"
                        src={`/img/goods/${notebook.OS}.png`}
                      />
                      {notebook.OS}
                    </div>
                  </div>

                  <div className="goods_descontain">
                    <div className="goods_des_title">화면크기</div>
                    <div className="goods_des_value">
                      <img
                        className="goods_dev_scaleimg"
                        src={`/img/goods/scale.png`}
                      />
                      {notebook.scale}
                    </div>
                  </div>

                  <div className="goods_descontain">
                    <div className="goods_des_title">업무용</div>
                    <div className="goods_des_value">
                      {notebook.businessuse.map((img, index) => (
                        <img
                          key={index}
                          className="goods_dev_useimg"
                          src={`/img/goods/${img}.png`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="goods_descontain">
                    <div className="goods_des_title">인강용</div>
                    <div className="goods_des_value">{notebook.learning}</div>
                  </div>

                  <div className="goods_descontain">
                    <div className="goods_des_title">게임용</div>
                    <div className="goods_des_value">{notebook.game}</div>
                  </div>

                  <div className="goods_descontain_hardware">
                    <div className="goods_des_title">하드웨어</div>
                    <div className="goods_des_value_hardware">
                      {notebook.hardware.map((props, index) => (
                        <span key={index}>{props}</span>
                      ))}
                    </div>
                  </div>
                  <img
                    className="goods_notebook_rank"
                    src={`/img/rating/${notebook.rank}.png`}
                    alt="rankimage"
                  ></img>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
        <Page
          itemlen={itemlen}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          searchparamshandler={searchparamshandler}
        ></Page>
      </div>
    </div>
  );
};

export default Goods;
