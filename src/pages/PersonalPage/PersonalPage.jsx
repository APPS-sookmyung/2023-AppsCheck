import React from "react";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
// const location = useLocation();
// const timelog = location.state ? location.state.timelog : null;
import { PageLayout } from "../../components";
import * as S from "./PersonalPage.style";

/*eslint-disable*/

const PersonalPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [absenceReason, setAbsenceReason] = useState("");

  const datelist = [
    "2023-09-14",
    "2023-09-21",
    "2023-09-28",
    "2023-10-05",
    "2023-11-02",
    "2023-11-09",
    "2023-11-16",
    "2023-11-23",
    "2023-11-30",
  ];
  const attendstatus = [
    "출석",
    "출석",
    "결석",
    "출석",
    "출석",
    "지각",
    "지각",
    "결석",
    "출석",
  ];
  const timelist = [
    "17:59:23",
    "17:55:30",
    "00:00:00",
    "17:51:00",
    "17:59:23",
    "18:05:15",
    "18:09:45",
    "00:00:00",
    "18:00:05",
  ];

  const handleAttendClick = (index) => {
    if (attendstatus[index] === "결석") {
      setModalOpen(true);
    }
  };

  const handleReasonChange = (event) => {
    setAbsenceReason(event.target.value);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSendReason = () => {
    handleCloseModal();
  };

  return (
    <PageLayout>
      <S.Title>Apps Check</S.Title>
      <S.Container>
        <S.calContainer>
          <S.calContent>
            <S.MoveDateLeft src="/svgs/svg-left-date.svg"></S.MoveDateLeft>
            <S.calDate> 2023-2학기 </S.calDate>
            <S.MoveDateRight src="/svgs/svg-right-date.svg"></S.MoveDateRight>
          </S.calContent>
          <S.attendContent>
            <S.Attendbox1>
              <S.StatusName>출석</S.StatusName>
              <S.StatusCount>5</S.StatusCount>
            </S.Attendbox1>
            <S.Attendbox2>
              <S.StatusName>지각</S.StatusName>
              <S.StatusCount>2</S.StatusCount>
            </S.Attendbox2>
            <S.Attendbox3>
              <S.StatusName>결석</S.StatusName>
              <S.StatusCount>2</S.StatusCount>
            </S.Attendbox3>
            <S.Attendbox4>
              <S.StatusName>미정</S.StatusName>
              <S.StatusCount>0</S.StatusCount>
            </S.Attendbox4>
          </S.attendContent>
        </S.calContainer>

        <S.MainContent>
          <S.ManageBar>
            <S.User> 김앱스 </S.User>
            <S.Renew src="/svgs/svg-renew-icon.svg"></S.Renew>
          </S.ManageBar>

          <S.MyStatus>
            {datelist.map((date, index) => (
              <S.StatusDetail key={index}>
                <S.AttendDate>{date}</S.AttendDate>
                <S.StatData>
                  <S.MyAttendStatus
                    style={{
                      color:
                        attendstatus[index] === "출석"
                          ? "#2B80FF"
                          : attendstatus[index] === "결석"
                          ? "#FF417A"
                          : "#FFD400",
                    }}
                    onClick={() => handleAttendClick(index)}
                  >
                    {attendstatus[index]}
                  </S.MyAttendStatus>
                  <S.AttendTime>{timelist[index]}</S.AttendTime>
                </S.StatData>
              </S.StatusDetail>
            ))}
          </S.MyStatus>
        </S.MainContent>
      </S.Container>
      <S.Icons>
        <S.IconContent src="/svgs/svg-nav-icon1.svg"></S.IconContent>
        <S.IconContent src="/svgs/svg-nav-icon2.svg"></S.IconContent>
        <S.IconContent src="/svgs/svg-nav-icon3.svg"></S.IconContent>
        <S.IconContent src="/svgs/svg-nav-icon4.svg"></S.IconContent>
      </S.Icons>

      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalTitle>결석한 사유를 알려주세요!</S.ModalTitle>
            <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>

            <S.ReasonCont>
              <S.TextBox
                value={absenceReason}
                onChange={handleReasonChange}
                placeholder="사유를 입력하세요"
              />
              <S.SendButton onClick={handleSendReason}>전송하기</S.SendButton>
            </S.ReasonCont>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </PageLayout>
  );
};
export default PersonalPage;
