import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 15px;
`;

export const Profile = styled.div`
	display: flex;
	gap: 13px;
`;

export const ProfileImg = styled.img`
	--size: 60px;

	width: var(--size);
	height: var(--size);
`;

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4px;
`;

export const ProfileName = styled.span`
	font-size: 20px;
	font-weight: 500;
`;

export const ProfileEmail = styled.span`
	font-size: 16px;
	font-weight: 600;
`;

export const Calender = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 5px; */
	width: 100%;
	border-radius: 11px;
`;

export const CalenderMonth = styled.div`
	color: #2b80ff;
	font-size: 24px;
	align-items: center;
	font-weight: 500;
	padding: 10px;
`;

export const CalenderContents = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	justify-content: space-between;
	gap: auto;
`;

export const CalenderDay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
	gap: 10px;
`;

export const CalenderWeek = styled.div`
	color: #878787;
	font-style: 14px;
	font-weight: 600;
`;

export const CalenderDate = styled.div`
	font-style: 20px;
	text-align: center;
	font-weight: 600;
`;

export const InformationCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	border-radius: 11px;
	border: 1px solid #dedede;
	padding: 18px;
`;

export const InformationList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 22px;
`;

export const InformationItem = styled.li`
	display: flex;
	align-items: flex-start;
	gap: 12px;
	font-size: 16px;
	color: #4e4949;
`;

export const InformationItemIcon = styled.img`
	--size: 26px;
	width: var(--size);
	height: var(--size);
`;

export const InformationItemContents = styled.span`
	margin-top: 5px;
`;

export const InformationItemContentsList = styled.ol`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 5px;
`;

export const InformationItemContentsItem = styled.li``;

export const AttendanceCheckButton = styled.button`
	width: 100%;
	height: 44px;
	border-radius: 20px;
	background: #2b80ff;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
`;

export const AbsenceCheckButton = styled.button`
	width: 100%;
	height: 44px;
	border-radius: 20px;
	background: #e65751;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
`;

export const registrationScheduleButton = styled.button`
	width: 100%;
	height: 44px;
	border-radius: 20px;
	background: #868e96;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
`;
