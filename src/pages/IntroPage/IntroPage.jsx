import { useNavigate } from "react-router-dom";
import * as S from "./IntroPage.style";

const IntroPage = () => {
	const Rest_api_key = "4721c4f7e6a29a07febfd392b4eaac17";
	const redirect_uri = "http://localhost:3000/auth";

	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate("/login");
	};

	return (
		<S.Layout>
			<S.Container>
				<S.Main>
					<S.Title>
						<S.Name>AppsCheck</S.Name>
						<S.Contents>아! 출첵해야지</S.Contents>
					</S.Title>
					<S.AppsLogoImg src="/svgs/logo-apps.svg" alt="" />
				</S.Main>
				<S.LoginButton onClick={navigateToLogin}>로그인</S.LoginButton>
			</S.Container>
		</S.Layout>
	);
};

export default IntroPage;
