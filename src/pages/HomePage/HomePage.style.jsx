import styled from "@emotion/styled";

export const Container = styled.div`
	padding: 20px;
`;

export const Profile = styled.div`
	display: flex;
	gap: 13px;
`;

export const ProfileImg = styled.img`
	--size: 60px;

	width: var(--size);
	height: var(--size);
	border-radius: 50%;
`;

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const ProfileName = styled.span`
	font-size: 16px;
	font-weight: 500;
`;

export const ProfileEmail = styled.span`
	font-size: 13px;
	font-weight: 600;
`;

export const Calender = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	margin: 20px 0;
	border: 1px solid black;
`;

export const InformationCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
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
	height: 48px;
	border-radius: 20px;
	background: #2b80ff;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
`;
