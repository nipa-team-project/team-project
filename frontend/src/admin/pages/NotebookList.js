import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Page from "../../shared/UIElements/Page";
import Modal from "../../shared/UIElements/Modal";

import "./NotebookList.css";

const dummydata = [
  {
    index: 1,
    img: "/img/admin/notebook.png",
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
      <div className="pafilist_main">
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
                cursor: "pointer",
              }}
              onClick={() => openModal(list)}>
              더보기
            </span>
            <img className="paflist_main_moreimg" src="/img/admin/more.png" alt="morepng"></img>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div id="backdrop-hook">
          <Modal show={isModalOpen} onCancel={closeModal} className="userlist_modal">
            <div className="modal_context">
              <div style={{ display: "flex", flexDirection: "space-between" }}>
                <h1 className="userlist_modalTitle">유저 상세정보</h1>
                <img src="/img/admin/Cancel.png" alt="cancel" className="modal_cancel" onClick={closeModal} />
              </div>
              <div style={{ marginTop: "16px" }}>
                <div className="userlist_inputContainer">
                  <span className="userlist_label">아이디</span>
                  <input type="text" className="userlist_input" value={selectedItem.id}></input>
                </div>
                <div className="userlist_inputContainer">
                  <span className="userlist_label">이름</span>
                  <input type="text" className="userlist_input" value={selectedItem.nickname}></input>
                </div>
                <div className="userlist_inputContainer">
                  <span className="userlist_label">이메일</span>
                  <input type="text" className="userlist_input" value={selectedItem.email}></input>
                </div>
                <div className="userlist_inputContainer">
                  <span className="userlist_label">휴대전화</span>
                  <input type="text" className="userlist_input" value={selectedItem.phoneNumer}></input>
                </div>
              </div>
            </div>
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
