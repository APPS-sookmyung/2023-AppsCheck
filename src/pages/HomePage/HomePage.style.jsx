import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 28px;
	font-weight: bold;
`;

export const SubmitButton = styled.button`
	width: 100%;
	height: 48px;
	border-radius: 8px;
	border: none;
	background-color: ${({ backgroundColor }) => backgroundColor};
	color: #ffffff;
	font-size: 18px;
	font-weight: 700;
`;
