import * as S from "./PageLayout.style";

const PageLayout = ({ backgroundColor = `#ffffff`, children }) => {
	return <S.Layout>{children}</S.Layout>;
};

export default PageLayout;
