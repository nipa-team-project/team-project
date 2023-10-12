import React from "react";

import "./Goods.css";
import Pagetitle from "../../shared/Pagetitle/Pagetitle";
import Filter from "../../shared/UIElements/Filter";

const dummydata = [
  {
    img: "/img/rating/notebook.png",
    tag: "마지막 수량",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000원",
    OS: "Window 10 HOME",
    scale: "15.6인치",
    businessuse: ["exel", "powepoint", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
  },
  {
    img: "/img/rating/notebook.png",
    tag: "3개 한정 X 리퍼연구소 특가할인",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000원",
    OS: "Window 10 HOME",
    scale: "15.6인치",
    businessuse: ["exel", "powepoint", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
  },
  {
    img: "/img/rating/notebook.png",
    tag: "마지막 수량",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000원",
    OS: "Window 10 HOME",
    scale: "15.6인치",
    businessuse: ["exel", "powepoint", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
  },
  {
    img: "/img/rating/notebook.png",
    tag: "마지막 수량",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000원",
    OS: "Window 10 HOME",
    scale: "15.6인치",
    businessuse: ["exel", "powepoint", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
  },
  {
    img: "/img/rating/notebook.png",
    tag: "3개 한정 X 리퍼연구소 특가할인",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000원",
    OS: "Window 10 HOME",
    scale: "15.6인치",
    businessuse: ["exel", "powepoint", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
  },
  {
    img: "/img/rating/notebook.png",
    tag: "마지막 수량",
    name: "맥북 에어",
    price: "539,980",
    discountprice: "1,690,000원",
    OS: "Window 10 HOME",
    scale: "15.6인치",
    businessuse: ["exel", "powepoint", "ai", "ps"],
    learning: "인터넷 강의 등으로 최적(매우 충분)",
    game: "LOL(가능)",
    hardware: ["i7-6500U", "램 8GB", "SSD 256GB"],
  },
];

const Goods = () => {
  return (
    <div className="goods">
      <Pagetitle title="구매하기">
        판매자들의 노트북을 구매할 수 있습니다
      </Pagetitle>
      <div className="goods_sortcontain">
        <Filter title="낮은가격순"></Filter>
      </div>
      <div></div>
    </div>
  );
};

export default Goods;
