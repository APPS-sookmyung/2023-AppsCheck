import * as S from "./LoginPage.style";

const LoginPage = () => {
  const Rest_api_key = "4721c4f7e6a29a07febfd392b4eaac17";
  const redirect_uri = "http://localhost:3000/auth";
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <S.Layout>
      <S.Container>
        <S.Main>
          <S.Title>
            <S.Name>AppsCheck</S.Name>
            <S.Contents>아! 출첵해야지</S.Contents>
          </S.Title>
          <S.AppsLogoImg src="/svgs/svg-applogo.svg" alt="" />
        </S.Main>

        <S.KakaoLoginButton onClick={handleLogin}>
          <S.KakaoLogoImg src="/svgs/svg-kakao-talk-logo.svg" />
          <S.KakaoLogoButtonText>카카오톡으로 로그인</S.KakaoLogoButtonText>
        </S.KakaoLoginButton>
      </S.Container>
    </S.Layout>
  );
};

export default LoginPage;
