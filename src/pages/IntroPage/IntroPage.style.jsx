import styled from "@emotion/styled";
import { PageLayout } from "../../components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 100px;
	height: 100%;
	padding: 0 20px;
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 61px;
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Layout = styled(PageLayout)`
	background: linear-gradient(
		205deg,
		rgba(43, 128, 255, 0.21) -0.82%,
		rgba(7, 106, 255, 0.43) 10.35%,
		rgba(2, 103, 255, 0.71) 23.72%,
		#06f 53.77%,
		rgba(0, 102, 255, 0.83) 77.65%,
		rgba(0, 102, 255, 0.5) 95.03%
	);
`;

export const Name = styled.h1`
	color: #fff;
	text-align: center;
	font-size: 50px;
	font-weight: 800;
`;

export const Contents = styled.span`
	color: #fff;
	text-align: center;
	font-size: 20px;
`;

export const AppsLogoImg = styled.img`
	width: 125px;
	height: 142px;
`;

export const Sub = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const LoginButton = styled.button`
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 70%;
	height: 48px;
	border-radius: 20px;
	background-color: #fff;
	font-size: 18px;
	font-weight: 500;
`;

export const SignupButton = styled.button`
	text-decoration: underline;
	color: #fff;
`;
