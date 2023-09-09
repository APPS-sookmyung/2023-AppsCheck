import styled from "@emotion/styled";

export const Container = styled.div`
	padding: 0 20px;
`;

export const Profile = styled.div`
	display: flex;
	gap: 13px;
`;

export const ProfileImg = styled.img`
	--size: 60px;

	width: var(--size);
	height: var(--size);
	border-radius: 50%;
`;

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const ProfileName = styled.span`
	font-size: 16px;
	font-weight: 500;
`;

export const ProfileEmail = styled.span`
	font-size: 13px;
	font-weight: 600;
`;
