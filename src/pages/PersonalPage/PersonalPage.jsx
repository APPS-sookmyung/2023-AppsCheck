import { PageLayout } from "../../components";
import * as S from "./PersonalPage.style";


const PersonalPage =() => {
    return (
<PageLayout>
     <S.Title>Apps Check</S.Title>
     <S.Container>
        <S.calContainer>
            <S.calContent> 
                <S.MoveDateLeft src="/svgs/svg-left-date.svg"></S.MoveDateLeft>
                <S.calDate> 2023-1학기 </S.calDate>
                <S.MoveDateRight src="/svgs/svg-right-date.svg"></S.MoveDateRight>
            </S.calContent>
            <S.attendContent> 
                <S.Attendbox1>
                    <S.StatusName>출석</S.StatusName>
                    <S.StatusCount>3</S.StatusCount>
                </S.Attendbox1>
                <S.Attendbox2>
                    <S.StatusName>지각</S.StatusName>
                    <S.StatusCount>1</S.StatusCount>
                </S.Attendbox2>
                <S.Attendbox3>
                    <S.StatusName>결석</S.StatusName>
                    <S.StatusCount>2</S.StatusCount>
                </S.Attendbox3>
                <S.Attendbox4>
                    <S.StatusName>미정</S.StatusName>
                    <S.StatusCount>6</S.StatusCount>
                </S.Attendbox4>
            </S.attendContent>
        </S.calContainer>

        <S.MainContent>
            <S.ManageBar>
                <S.User> 김눈송 </S.User>
                <S.Renew src="/svgs/svg-renew-icon.svg"></S.Renew>
            </S.ManageBar>
            
            <S.MyStatus>
                <S.StatusDetail>
                    <S.AttendDate>2023-03-09</S.AttendDate>
                    <S.MyAttendStatus>출석</S.MyAttendStatus>
                </S.StatusDetail>

                <S.StatusDetail>
                    <S.AttendDate>2023-03-20</S.AttendDate>
                    <S.MyAttendStatus>출석</S.MyAttendStatus>
                </S.StatusDetail>

                <S.StatusDetail>
                    <S.AttendDate>2023-04-09</S.AttendDate>
                    <S.MyAttendStatus>결석</S.MyAttendStatus>
                </S.StatusDetail>

                <S.StatusDetail>
                    <S.AttendDate>2023-04-17</S.AttendDate>
                    <S.MyAttendStatus>미정</S.MyAttendStatus>
                </S.StatusDetail>

                <S.StatusDetail>
                    <S.AttendDate>2023-05-01</S.AttendDate>
                    <S.MyAttendStatus>지각</S.MyAttendStatus>
                </S.StatusDetail>
            </S.MyStatus>
        </S.MainContent>
     </S.Container>
     <S.Icons>
        <S.IconContent src="/svgs/svg-nav-icon1.svg"></S.IconContent>
        <S.IconContent src="/svgs/svg-nav-icon2.svg"></S.IconContent>
        <S.IconContent src="/svgs/svg-nav-icon3.svg"></S.IconContent>
        <S.IconContent src="/svgs/svg-nav-icon4.svg"></S.IconContent>
     </S.Icons>
</PageLayout>
    );
};
export default PersonalPage;