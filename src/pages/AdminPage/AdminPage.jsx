import { PageLayout } from "../../components";
import * as S from "./AdminPage.style";


const AdminPage2 =() => {
    return (
<PageLayout>
     <S.Title>Apps Check</S.Title>
     <S.Container>
        <S.calContainer>
            <S.calContent> 
                <S.MoveDateLeft src="/svgs/svg-left-date.svg"></S.MoveDateLeft>
                <S.calDate>2023 - 05 - 12 </S.calDate>
                <S.MoveDateRight src="/svgs/svg-right-date.svg"></S.MoveDateRight>
            </S.calContent>
            <S.attendContent> 
                <S.Attendbox1>
                    <S.StatusName>출석</S.StatusName>
                    <S.StatusCount>21</S.StatusCount>
                </S.Attendbox1>
                <S.Attendbox2>
                    <S.StatusName>지각</S.StatusName>
                    <S.StatusCount>2</S.StatusCount>
                </S.Attendbox2>
                <S.Attendbox3>
                    <S.StatusName>결석</S.StatusName>
                    <S.StatusCount>1</S.StatusCount>
                </S.Attendbox3>
                <S.Attendbox4>
                    <S.StatusName>미정</S.StatusName>
                    <S.StatusCount>4</S.StatusCount>
                </S.Attendbox4>
            </S.attendContent>
        </S.calContainer>

        <S.MainContent>
            <S.ManageBar>
                <S.User> APPS </S.User>
                <S.Renew src="/svgs/svg-renew-icon.svg"></S.Renew>
            </S.ManageBar>
            
            <S.Members>
                <S.Member>
                    <S.MemberName>김눈송1</S.MemberName>
                    <S.AttendStatus>출석</S.AttendStatus>
                </S.Member>

                <S.Member>
                    <S.MemberName>눈송2</S.MemberName>
                    <S.AttendStatus>출석</S.AttendStatus>
                </S.Member>

                <S.Member>
                    <S.MemberName>눈송3</S.MemberName>
                    <S.AttendStatus>결석</S.AttendStatus>
                </S.Member>

                <S.Member>
                    <S.MemberName>눈송4</S.MemberName>
                    <S.AttendStatus>미정</S.AttendStatus>
                </S.Member>

                <S.Member>
                    <S.MemberName>눈송5</S.MemberName>
                    <S.AttendStatus>지각</S.AttendStatus>
                </S.Member>
            </S.Members>
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
export default AdminPage2;