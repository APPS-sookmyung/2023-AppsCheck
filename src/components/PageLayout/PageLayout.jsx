import * as S from "./PageLayout.style";

const PageLayout = ({ backgroundColor = `#ffffff`, children }) => {
	return <S.Layout backgroundColor={backgroundColor}>{children}</S.Layout>;
};

export default PageLayout;
