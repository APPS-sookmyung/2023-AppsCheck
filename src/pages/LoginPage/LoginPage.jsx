import * as S from "./LoginPage.style";
import React, { useState, useEffect } from "react";

export default function LoginPage() {
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
		<S.Container className="page">
			<S.TitleWrap className="titleWrap">
				이메일과 비밀번호를
				<br />
				입력해주세요
			</S.TitleWrap>

			<S.Content>
				<S.ContentWrap>
					<S.InputTitle>이메일 주소</S.InputTitle>
					<S.InputWrap>
						<S.Input
							type="text"
							placeholder="test@gmail.com"
							value={email}
							onChange={handleEmail}
						/>
					</S.InputWrap>
					<S.ErrorMessageWrap>
						{!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}
					</S.ErrorMessageWrap>
				</S.ContentWrap>

				<S.ContentWrap>
					<S.InputTitle>비밀번호</S.InputTitle>
					<S.InputWrap>
						<S.Input
							type="password"
							placeholder="영문, 숫자, 특수문자 포함 8자 이상"
							value={pw}
							onChange={handlePassword}
						/>
					</S.InputWrap>
					<S.ErrorMessageWrap>
						{!pwValid && pw.length > 0 && (
							<div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
						)}
					</S.ErrorMessageWrap>
				</S.ContentWrap>
			</S.Content>

			<S.Button disabled={notAllow}>확 인</S.Button>
		</S.Container>
	);
}
