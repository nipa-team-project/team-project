import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Page from "../../shared/UIElements/Page";
import Modal from "../../shared/UIElements/Modal";

import "./NotebookList.css";

const dummydata = [
  {
    id: 1,
    notebook_img: "/img/admin/dummyimg/dummy2.png",
    front: "/img/admin/dummyimg/dummy1.png",
    back: "/img/admin/dummyimg/dummy2.png",
    keyboard: "/img/admin/dummyimg/dummy3.png",
    monitor: "/img/admin/dummyimg/dummy4.png",
    name: "맥북 에어",
    model: " NT950XBE-X716A",
    register: "2023. 09. 08",
    description: "모서리 부분 파손이 살짝 있음. 화면 상태는 \n 기스 없이 깔끔한 편.",
  },

  {
    id: 2,
    notebook_img: "/img/admin/dummyimg/dummy2.png",
    front: "/img/admin/dummyimg/dummy1.png",
    back: "/img/admin/dummyimg/dummy2.png",
    keyboard: "/img/admin/dummyimg/dummy3.png",
    monitor: "/img/admin/dummyimg/dummy4.png",
    name: "맥북 에어",
    model: " NT950XBE-X716A",
    register: "2023. 09. 08",
    description: "모서리 부분 파손이 살짝 있음. 화면 상태는 \n 기스 없이 깔끔한 편.",
  },

  {
    id: 3,
    notebook_img: "/img/admin/dummyimg/dummy2.png",
    front: "/img/admin/dummyimg/dummy1.png",
    back: "/img/admin/dummyimg/dummy2.png",
    keyboard: "/img/admin/dummyimg/dummy3.png",
    monitor: "/img/admin/dummyimg/dummy4.png",
    name: "맥북 에어",
    model: " NT950XBE-X716A",
    register: "2023. 09. 08",
    description: "모서리 부분 파손이 살짝 있음. 화면 상태는 \n 기스 없이 깔끔한 편.",
  },

  {
    id: 4,
    notebook_img: "/img/admin/dummyimg/dummy2.png",
    front: "/img/admin/dummyimg/dummy1.png",
    back: "/img/admin/dummyimg/dummy2.png",
    keyboard: "/img/admin/dummyimg/dummy3.png",
    monitor: "/img/admin/dummyimg/dummy4.png",
    name: "맥북 에어",
    model: " NT950XBE-X716A",
    register: "2023. 09. 08",
    description: "모서리 부분 파손이 살짝 있음. 화면 상태는 \n 기스 없이 깔끔한 편.",
  },

  {
    id: 5,
    notebook_img: "/img/admin/dummyimg/dummy2.png",
    front: "/img/admin/dummyimg/dummy1.png",
    back: "/img/admin/dummyimg/dummy2.png",
    keyboard: "/img/admin/dummyimg/dummy3.png",
    monitor: "/img/admin/dummyimg/dummy4.png",
    name: "맥북 에어",
    model: " NT950XBE-X716A",
    register: "2023. 09. 08",
    description: "모서리 부분 파손이 살짝 있음. 화면 상태는 \n 기스 없이 깔끔한 편.",
  },

  {
    id: 6,
    notebook_img: "/img/admin/dummyimg/dummy2.png",
    front: "/img/admin/dummyimg/dummy1.png",
    back: "/img/admin/dummyimg/dummy2.png",
    keyboard: "/img/admin/dummyimg/dummy3.png",
    monitor: "/img/admin/dummyimg/dummy4.png",
    name: "맥북 에어",
    model: " NT950XBE-X716A",
    register: "2023. 09. 08",
    description: "모서리 부분 파손이 살짝 있음. 화면 상태는 \n 기스 없이 깔끔한 편.",
  },

  {
    id: 7,
    notebook_img: "/img/admin/dummyimg/dummy2.png",
    front: "/img/admin/dummyimg/dummy1.png",
    back: "/img/admin/dummyimg/dummy2.png",
    keyboard: "/img/admin/dummyimg/dummy3.png",
    monitor: "/img/admin/dummyimg/dummy4.png",
    name: "맥북 에어",
    model: " NT950XBE-X716A",
    register: "2023. 09. 08",
    description: "모서리 부분 파손이 살짝 있음. 화면 상태는 \n 기스 없이 깔끔한 편.",
  },

  {
    id: 8,
    notebook_img: "/img/admin/dummyimg/dummy2.png",
    front: "/img/admin/dummyimg/dummy1.png",
    back: "/img/admin/dummyimg/dummy2.png",
    keyboard: "/img/admin/dummyimg/dummy3.png",
    monitor: "/img/admin/dummyimg/dummy4.png",
    name: "맥북 에어",
    model: " NT950XBE-X716A",
    register: "2023. 09. 08",
    description: "모서리 부분 파손이 살짝 있음. 화면 상태는 \n 기스 없이 깔끔한 편.",
  },

  {
    id: 9,
    notebook_img: "/img/admin/dummyimg/dummy2.png",
    front: "/img/admin/dummyimg/dummy1.png",
    back: "/img/admin/dummyimg/dummy2.png",
    keyboard: "/img/admin/dummyimg/dummy3.png",
    monitor: "/img/admin/dummyimg/dummy4.png",
    name: "맥북 에어",
    model: " NT950XBE-X716A",
    register: "2023. 09. 08",
    description: "모서리 부분 파손이 살짝 있음. 화면 상태는 \n 기스 없이 깔끔한 편.",
  },
];

const itemlen = 100;

const Userlist = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const searchparamshandler = (sort, value) => {
    //쿼리 생성 및 변경
    searchParams.set(`${sort}`, `${value}`);
    setSearchParams(searchParams);
  };

  //   const navigate = useNavigate();

  const openModal = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  console.log(isModalOpen);
  return (
    <React.Fragment>
      <input className="paflist_search" placeholder="내용 검색하기"></input>
      <div className="paflist_title">노트북 리스트</div>
      <div className="notebooklist_main">
        {dummydata.map((list, index) => (
          <div className="notebook_container" key={index} onClick={() => openModal(list)}>
            <img src={list.notebook_img} alt="notebook_img" className="notebook_img" />
          </div>
        ))}
      </div>
      {selectedItem && (
        <div id="backdrop-hook">
          <Modal show={isModalOpen} onCancel={closeModal} className="userlist_modal">
            <div className="modal_context"></div>
          </Modal>
        </div>
      )}
      <div className="paflist_page">
        <Page itemlen={itemlen} searchParams={searchParams} setSearchParams={setSearchParams} searchparamshandler={searchparamshandler}></Page>
      </div>
    </React.Fragment>
  );
};

export default Userlist;
