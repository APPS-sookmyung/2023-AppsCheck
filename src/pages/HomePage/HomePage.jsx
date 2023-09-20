import { PageLayout } from "../../components";
import * as S from "./HomePage.style";

const HomePage = () => {
	return (
		<PageLayout>
			<S.Container>
				<S.Profile>
					<S.ProfileImg src="/images/img-sample-profile-img.png" alt="프로필 이미지" />
					<S.ProfileInfo>
						<S.ProfileName>apps</S.ProfileName>
						<S.ProfileEmail>sakshichoudhary@email.com</S.ProfileEmail>
					</S.ProfileInfo>
				</S.Profile>

				<S.Calender>
					<S.CalenderMonth>2023년 5월</S.CalenderMonth>
					<S.CalenderContents>
						<S.CalenderDay>
							<S.CalenderWeek>일</S.CalenderWeek>
							<S.CalenderDate>7</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>월</S.CalenderWeek>
							<S.CalenderDate>8</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>화</S.CalenderWeek>
							<S.CalenderDate>9</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>수</S.CalenderWeek>
							<S.CalenderDate>10</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>목</S.CalenderWeek>
							<S.CalenderDate>11</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>금</S.CalenderWeek>
							<S.CalenderDate>12</S.CalenderDate>
						</S.CalenderDay>
						<S.CalenderDay>
							<S.CalenderWeek>토</S.CalenderWeek>
							<S.CalenderDate>13</S.CalenderDate>
						</S.CalenderDay>
					</S.CalenderContents>
				</S.Calender>

				<S.InformationCard>
					<S.InformationList>
						<S.InformationItem>
							<S.InformationItemIcon src="/svgs/svg-calender.svg" alt="달력" />
							<S.InformationItemContents>2023년 5월 11일 (목)</S.InformationItemContents>
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

					<S.AttendanceCheckButton>출석체크</S.AttendanceCheckButton>
				</S.InformationCard>
			</S.Container>
		</PageLayout>
	);
};

export default HomePage;
