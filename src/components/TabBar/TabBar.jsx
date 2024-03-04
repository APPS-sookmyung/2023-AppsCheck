import { Link } from "react-router-dom";
import * as S from "./TabBar.style";

export default function TabBar() {
	return (
		<S.Container>
			<S.IconContainer>
				<Link to="/home">
					<S.Icon src="/svgs/tab-bar-icon1.svg" alt="tabIcon1" />
				</Link>
				<Link to="/personal">
					<S.Icon src="/svgs/tab-bar-icon2.svg" alt="tabIcon2" />
				</Link>
				<Link to="/setting">
					<S.Icon src="/svgs/tab-bar-icon3.svg" alt="tabIcon3" />
				</Link>
			</S.IconContainer>
		</S.Container>
	);
}
