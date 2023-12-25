import { PageLayout } from "../../components";
import { useNavigate } from "react-router-dom";
import * as S from "./AttendanceCompletionPage.style";

const AttendanceCompletionPage = () => {
  const navigate = useNavigate();

  const LogAddHandler = () => {
    // const timelog = "17:59:30";
    // { state: { timelog } }
    navigate("/personal");
  };

  return (
    <PageLayout>
      <S.Container>
        <S.Main>
          <S.AttendanceCompletionImg
            src="/images/img-attendance-complete-logo.png"
            alt=""
          />
          <S.Name>출석완료</S.Name>
        </S.Main>

        <S.AttendanceInfo>
          <S.InformationItem>
            <S.InformationItemTitle>장소</S.InformationItemTitle>
            <S.InformationItemContents>명신관 417호</S.InformationItemContents>
          </S.InformationItem>
          <S.InformationItem>
            <S.InformationItemTitle>시간</S.InformationItemTitle>
            <S.InformationItemContents>18:00:00</S.InformationItemContents>
          </S.InformationItem>
        </S.AttendanceInfo>

        <S.AttendanceCompletionButton onClick={LogAddHandler}>
          <S.AttendanceCompletionButtonText>
            확인
          </S.AttendanceCompletionButtonText>
        </S.AttendanceCompletionButton>
      </S.Container>
    </PageLayout>
  );
};

export default AttendanceCompletionPage;
