import { PageLayout } from "../../components";
import * as S from "./LoginPage.style";

const LoginPage = () => {
	return (
		<S.Layout>
			<S.Container>
				<S.Main>
					<S.Title>
						<S.Name>AppsCheck</S.Name>
						<S.Contents>아! 출첵해야지</S.Contents>
					</S.Title>
					<S.AppsLogoImg src="/images/img-apps-logo.png" alt="" />
				</S.Main>

				<S.KakaoLoginButton>
					<S.KakaoLogoImg src="/svgs/svg-kakao-talk-logo.svg" />
					<S.KakaoLogoButtonText>카카오톡으로 로그인</S.KakaoLogoButtonText>
				</S.KakaoLoginButton>
			</S.Container>
		</S.Layout>
	);
};

export default LoginPage;
