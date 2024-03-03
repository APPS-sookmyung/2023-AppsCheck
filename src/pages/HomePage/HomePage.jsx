import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../../components";
import * as S from "./HomePage.style";
const HomePage = () => {
	const navigate = useNavigate();
	const [message, setMessage] = useState("");

	const CheckHandler = () => {
		setMessage("출석체크중..");
		setTimeout(() => {
			navigate("/checkfin");
		}, 2000);
	};

	return (
		<PageLayout>
			<S.Container>
				<S.Profile>
					<S.ProfileImg src="/images/logo-apps.png" alt="프로필 이미지" />
					<S.ProfileInfo>
						<S.ProfileName>김앱스</S.ProfileName>
						<S.ProfileEmail>sookmyungapps@gmail.com</S.ProfileEmail>
					</S.ProfileInfo>
				</S.Profile>

				<S.Calender>
					<S.CalenderMonth>2023년 11월</S.CalenderMonth>
					<S.CalenderContents>
						<S.CalenderDay>
							<S.CalenderWeek>일</S.CalenderWeek>
							<S.CalenderDate>26</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>월</S.CalenderWeek>
							<S.CalenderDate>27</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>화</S.CalenderWeek>
							<S.CalenderDate>28</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>수</S.CalenderWeek>
							<S.CalenderDate>29</S.CalenderDate>
						</S.CalenderDay>

						<S.CalenderDay style={{ borderRadius: "10px", background: "#2B80FF33" }}>
							<S.CalenderWeek>목</S.CalenderWeek>
							<S.CalenderDate>30</S.CalenderDate>
						</S.CalenderDay>

						<S.CalenderDay>
							<S.CalenderWeek>금</S.CalenderWeek>
							<S.CalenderDate>1</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>토</S.CalenderWeek>
							<S.CalenderDate>2</S.CalenderDate>
						</S.CalenderDay>
					</S.CalenderContents>
				</S.Calender>

				<S.InformationCard>
					<S.InformationList>
						<S.InformationItem>
							<S.InformationItemIcon src="/svgs/svg-calender.svg" alt="달력" />
							<S.InformationItemContents>2023년 11월 30일 (목)</S.InformationItemContents>
						</S.InformationItem>

						<S.InformationItem>
							<S.InformationItemIcon src="/svgs/svg-clock.svg" alt="시계" />
							<S.InformationItemContents>18:00 pm</S.InformationItemContents>
						</S.InformationItem>

						<S.InformationItem>
							<S.InformationItemIcon src="/svgs/svg-location.svg" alt="위치" />
							<S.InformationItemContents>명신관 315</S.InformationItemContents>
						</S.InformationItem>

						<S.InformationItem>
							<S.InformationItemIcon src="/svgs/svg-todo-list.svg" alt="할일" />
							<S.InformationItemContentsList>
								<S.InformationItemContentsItem>스터디 발표</S.InformationItemContentsItem>
								<S.InformationItemContentsItem>프로젝트 발표</S.InformationItemContentsItem>
								<S.InformationItemContentsItem>공지</S.InformationItemContentsItem>
								<S.InformationItemContentsItem>DevTalk</S.InformationItemContentsItem>
							</S.InformationItemContentsList>
						</S.InformationItem>
					</S.InformationList>

					<S.AttendanceCheckButton onClick={CheckHandler}>
						{message || "출석체크"}
					</S.AttendanceCheckButton>
					<S.AbsenceCheckButton onClick={CheckHandler}>
						{message || "결석 사유 입력"}
					</S.AbsenceCheckButton>
					<S.registrationScheduleButton onClick={CheckHandler}>
						{message || "일정 등록"}
					</S.registrationScheduleButton>
				</S.InformationCard>
			</S.Container>
		</PageLayout>
	);
};

export default HomePage;
