import { PageLayout } from "../../components";
import * as S from "./HomePage.style";

const HomePage = () => {
	return (
		<PageLayout>
			<S.Container>
				<S.Title>홈 페이지</S.Title>
				<S.SubmitButton backgroundColor={"blue"}>출석하기</S.SubmitButton>
			</S.Container>
		</PageLayout>
	);
};

export default HomePage;
