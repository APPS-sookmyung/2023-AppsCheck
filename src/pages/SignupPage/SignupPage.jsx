import React, { useState, useEffect } from "react";
import * as S from "./SignupPage.style";

export default function SignupPage() {
	const [email, setEmail] = useState(""); //빈 문자열로 초기화
	const [pw, setPw] = useState("");

	const [emailValid, setEmailValid] = useState(false);
	const [pwValid, setPwValid] = useState(false);
	const [notAllow, setNotAllow] = useState(true); // 확인버튼의 활성화와 비활성화

	const handleEmail = (e) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // 이메일 정규식

		setEmail(e.target.value);
		setEmailValid(regex.test(email) ? true : false);
		// if (regex.test(email)) {
		// 	setEmailValid(true);
		// } else {
		// 	setEmailValid(false);
		// }
	};

	const handlePassword = (e) => {
		const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // 비밀번호 정규식

		setPw(e.target.value);
		setPwValid(regex.test(pw) ? true : false);
		// if (regex.test(pw)) {
		// 	setPwValid(true);
		// } else {
		// 	setPwValid(false);
		// }
	};

	useEffect(() => {
		if (emailValid && pwValid) {
			setNotAllow(false);
			return;
		}
		setNotAllow(true);
	}, [emailValid, pwValid]);

	return (
		<S.Container>
			<S.SignupContainer>
				<S.SignupTitle>회원 가입</S.SignupTitle>

				<S.SignupContent>
					<S.Divider>
						<S.Content>
							<S.ContentTitle>이름</S.ContentTitle>
							<S.ContentInputWrap>
								<S.ContentInput
									type="text"
									name="name"
									id="name"
									minlength="5"
									placeholder="김앱스"
								></S.ContentInput>
							</S.ContentInputWrap>
						</S.Content>

						<S.Content>
							<S.ContentTitle>회장 여부</S.ContentTitle>
							<S.ContentInputWrap>
								<S.ContentInput
									type="text"
									name="name"
									id="name"
									minlength="5"
									placeholder="회장"
								></S.ContentInput>
							</S.ContentInputWrap>
						</S.Content>
					</S.Divider>

					<S.Divider>
						<S.Content>
							<S.ContentTitle>전공</S.ContentTitle>
							<S.ContentInputWrap>
								<S.ContentInput
									type="text"
									name="name"
									id="name"
									placeholder="컴퓨터과학전공"
								></S.ContentInput>
							</S.ContentInputWrap>
						</S.Content>

						<S.Content>
							<S.ContentTitle>학번</S.ContentTitle>
							<S.ContentInputWrap>
								<S.ContentInput
									type="text"
									name="name"
									id="name"
									minlength="2"
									placeholder="21 / 22 / 23 / 24 ..."
								></S.ContentInput>
							</S.ContentInputWrap>
						</S.Content>
					</S.Divider>

					<S.Content>
						<S.ContentTitle>연락처</S.ContentTitle>
						<S.ContentInputWrap>
							<S.ContentInput
								type="text"
								name="name"
								id="name"
								placeholder="010-1234-5678"
							></S.ContentInput>
						</S.ContentInputWrap>
					</S.Content>

					<S.Content>
						<S.ContentTitle>이메일</S.ContentTitle>
						<S.ContentInputWrap>
							<S.ContentInput
								type="email"
								name="email"
								placeholder="test@gmail.com"
								value={email}
								onChange={handleEmail}
							></S.ContentInput>
							{/* <S.Check id="emailCheck"></S.Check> */}
						</S.ContentInputWrap>
						<S.ErrorMessageWrap>
							{!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}
						</S.ErrorMessageWrap>
					</S.Content>

					<S.Content>
						<S.ContentTitle>비밀번호</S.ContentTitle>
						<S.ContentInputWrap>
							<S.ContentInput
								type="password"
								name="password"
								minlength="8"
								placeholder="영문, 숫자, 특수문자 포함 8자 이상"
								value={pw}
								onChange={handlePassword}
							/>
							{/* <S.Check id="passwordCheck"></S.Check> */}
						</S.ContentInputWrap>
						<S.ErrorMessageWrap>
							{!pwValid && pw.length > 0 && (
								<div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
							)}
						</S.ErrorMessageWrap>
					</S.Content>

					<S.Content>
						<S.ContentTitle>비밀번호 확인</S.ContentTitle>
						<S.ContentInputWrap>
							<S.ContentInput type="password" id="passwordConfirm"></S.ContentInput>
							{/* <S.Check id="passwordConfirmCheck"></S.Check> */}
						</S.ContentInputWrap>
					</S.Content>
				</S.SignupContent>

				<S.Button id="sign-up-button" onclick="handleSignUpButtonClick()" disabled={notAllow}>
					가입하기
				</S.Button>
			</S.SignupContainer>

			<S.SignupCompletionModalOverlay>
				<S.SignupCompletionModal>
					<S.SignupCompletionTitle>가입 성공!</S.SignupCompletionTitle>
					<S.SignupCompletionDescription>
						AppsCheck 가입을 축하합니다!!
					</S.SignupCompletionDescription>
					<S.SignupCompletionModalButtonWrapper>
						<S.SignUpCompletionModalCloseButton onclick="handleSignUpCompletionModalCloseButtonClick()">
							닫기
						</S.SignUpCompletionModalCloseButton>
					</S.SignupCompletionModalButtonWrapper>
				</S.SignupCompletionModal>
			</S.SignupCompletionModalOverlay>
		</S.Container>
	);
}
