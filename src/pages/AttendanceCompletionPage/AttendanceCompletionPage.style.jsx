import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	padding: 0 20px;
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
`;

export const AttendanceCompletionImg = styled.img`
	height: 135px;
	width: 135px;
`;

export const Name = styled.div`
	font-size: 32px;
`;

export const AttendanceInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	margin: 65px 0px;
`;

export const InformationItem = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	border-bottom: 1px solid black;
`;

export const InformationItemTitle = styled.div`
	width: 100px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	font-weight: 500;
`;

export const InformationItemContents = styled.div`
	width: 150px;
	height: 35px;
	display: flex;
	align-items: center;
	font-size: 18px;
	font-weight: 600;
`;

export const AttendanceCompletionButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AttendanceCompletionButtonText = styled.div`
	width: 299px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	background-color: #2b80ff;
	border-radius: 20px;
`;
