import styled from "@emotion/styled";

export const Container = styled.div`
	padding: 0 20px;
`;

export const Profile = styled.div`
	border: 1px solid black;
`;

export const ProfileImg = styled.img`
	--size: 60px;

	width: var(--size);
	height: var(--size);
`;

export const ProfileInfo = styled.div``;

export const ProfileName = styled.span`
	font-size: 16px;
	font-weight: 500;
`;

export const ProfileEmail = styled.span`
	font-size: 13px;
	font-weight: 600;
`;
