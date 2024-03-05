import React, { useState, useEffect } from "react";
import * as S from "./ProfilePage.style";

export default function ProfilePage() {
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	const [emailValid, setEmailValid] = useState(false);
	const [pwValid, setPwValid] = useState(false);
	const [notAllow, setNotAllow] = useState(true);
	const [pwMatch, setPwMatch] = useState(false);

	const handleEmail = (e) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		const emailValue = e.target.value;

		setEmail(emailValue);
		setEmailValid(regex.test(emailValue));
	};

	const handlePassword = (e) => {
		const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		const passwordValue = e.target.value;

		setPw(passwordValue);
		setPwValid(regex.test(passwordValue));

		// 비밀번호가 변경될 때마다 비밀번호 확인 상태 초기화
		setPwMatch(false);
	};

	const handlePasswordConfirm = (e) => {
		const confirmPw = e.target.value;

		// 비밀번호 확인 값과 비밀번호 값이 일치하는지 확인
		setPwMatch(confirmPw === pw);
	};

	useEffect(() => {
		setNotAllow(!(emailValid && pwValid && pwMatch));
	}, [emailValid, pwValid, pwMatch]);

	return (
		<S.Container>
			<S.SignupContainer>
				<S.SignupTitle>회원 정보</S.SignupTitle>

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
							<S.ContentInput
								type="password"
								id="passwordConfirm"
								onChange={handlePasswordConfirm}
							/>
						</S.ContentInputWrap>
						<S.ErrorMessageWrap>
							{!pwMatch && <div>비밀번호가 일치하지 않습니다.</div>}
						</S.ErrorMessageWrap>
					</S.Content>
				</S.SignupContent>

				<S.Button id="profile-modify-button" disabled={notAllow}>
					수정
				</S.Button>
				<S.Button id="member-Withdrawal-button" disabled={notAllow}>
					회원탈퇴
				</S.Button>
			</S.SignupContainer>
		</S.Container>
	);
}
