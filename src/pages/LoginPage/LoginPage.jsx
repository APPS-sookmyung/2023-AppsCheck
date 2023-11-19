import * as S from "./LoginPage.style";

const LoginPage = () => {
  const fetchGetURL = async () => {
    try {
      const { url } = await (
        await fetch("http://localhost:3001/kakao/url")
      ).json();

      console.log(url); // 응답으로 온 url
      document.location.href = url;
    } catch (error) {
      alert("Function fetchGetURL error!");
      console.error(error);
    }
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

        <S.KakaoLoginButton onClick={fetchGetURL}>
          <S.KakaoLogoImg src="/svgs/svg-kakao-talk-logo.svg" />
          <S.KakaoLogoButtonText>카카오톡으로 로그인</S.KakaoLogoButtonText>
        </S.KakaoLoginButton>
      </S.Container>
    </S.Layout>
  );
};

export default LoginPage;
