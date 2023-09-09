import { PageLayout } from "../../components";
import * as S from "./HomePage.style";

const HomePage = () => {
	return (
		<PageLayout>
			<S.Container>
				<S.Profile>
					<S.ProfileImg src="/images/img-sample-profile-img.png" alt="프로필 이미지" />
					<S.ProfileInfo>
						<S.ProfileName>Sakshi</S.ProfileName>
						<S.ProfileEmail>sakshichoudhary@email.com</S.ProfileEmail>
					</S.ProfileInfo>
				</S.Profile>
			</S.Container>
		</PageLayout>
	);
};

export default HomePage;
