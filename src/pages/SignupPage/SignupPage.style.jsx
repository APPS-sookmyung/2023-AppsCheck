import styled from "@emotion/styled";

export const Container = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	max-width: 500px;
	display: flex;
	padding: 0 20px;
	left: 50%; // 가운데에 배치
	transform: translate(-50%, 0);
	flex-direction: column;
	background-color: #f7f7f7;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	margin: 0;
`;

export const SignupContainer = styled.div``;

export const SignupTitle = styled.h1`
	margin-top: 87px;
	font-size: 26px;
	font-weight: 700;
	color: #262626;
	display: flex;
`;

export const SignupContent = styled.div`
	gap: 20px;
	margin-bottom: 20px;
`;

export const Divider = styled.div`
	display: flex;
	gap: 20px;
`;

export const Content = styled.div`
	margin-top: 26px;
	flex: 1; //남는 공간을 차지하도록 함
`;

export const ContentTitle = styled.h3`
	font-size: 12px;
	font-weight: 600;
	color: #262626;
`;

export const ContentInputWrap = styled.div`
	display: flex;
	border-radius: 8px;
	padding: 16px;
	margin-top: 8px;
	background-color: #fff;
	border: 1px solid #e2e0e0;
	font-size: 20px;

	// 포커스가 있는 경우의 스타일
	&:focus-within {
		border: 1px solid #2b80ff;
	}
`;

export const ContentInput = styled.input`
	width: 100%;
	outline: none;
	border: none;
	height: 17px;
	font-size: 14px;
	font-weight: 400;

	&::placeholder {
		color: #dadada;
	}
`;
// .sign-up-content > input {
// 	border: 1px solid white;
// 	border-radius: 5px;
// 	height: 20px;
// }

export const ErrorMessageWrap = styled.div`
	margin-top: 8px;
	color: #ef0000;
	font-size: 12px;
`;

export const Button = styled.button`
	width: 100%;
	height: 48px;
	border: none;
	font-weight: 700; // 700이 bold
	background-color: #2b80ff;
	border-radius: 64px;
	color: white;
	margin-bottom: 16px;
	cursor: pointer;

	// 버튼이 활성화되지 않았을때의 상태를 지정해줌
	&:disabled {
		background-color: #dadada;
		color: #fff;
	}
`;

export const SignupCompletionModalOverlay = styled.div`
	display: none;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 10;
	width: 100%;
	height: 100%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(1px);
`;

export const SignupCompletionModal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	width: 100%;
	max-width: 300px;
	padding: 20px;
	border-radius: 20px;
`;

export const SignupCompletionTitle = styled.h3``;

export const SignupCompletionDescription = styled.p``;

export const SignupCompletionModalButtonWrapper = styled.div`
	display: flex;
	justify-content: right;
	width: 100%;
`;

export const SignUpCompletionModalCloseButton = styled.div``;

// .sign-up-page {
// 	position: relative;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 100%;
// 	height: 100%;
// }

// .sign-up-completion-modal-overlay.open {
// 	display: flex;
// }

// .sign-up-completion-modal-button-wrapper > button {
// 	background-color: white;
// 	padding: 5px;
// 	border-radius: 5px;
// 	border: 1px solid gray;
// }
