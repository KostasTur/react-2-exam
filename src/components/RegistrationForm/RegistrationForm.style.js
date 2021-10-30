import styled from 'styled-components';

export const StyledRegistration = styled.div`
	width: 900px;
	display: felx;
	background-color: white;
	border-radius: 15px;
`;

export const RegistrationLeft = styled.div`
	padding: 1.2rem;
	width: 50%;
	height: 100%;
	background-color: var(--primary-color);
	border-radius: 15px 0 0 15px;
	border: 2px solid var(--primary-color);
	display: flex;
	flex-direction: column;
	.bg {
		width: 100%;
		height: 100%;
	}
`;
export const LeftTextWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	color: white;
	text-align: center;
	margin-top: 1rem;
	font-size: 18px;
`;
export const RegistrationRight = styled.div`
	padding: 3rem 3rem 0 3rem;
	width: 50%;
	border-radius: 0 15px 15px 0;
	border: 2px solid var(--primary-color);
`;
export const RegistrationTop = styled.div`
	h1 {
		font-size: 34px;
	}
	p {
		font-size: 14px;
		opacity: 0.8;
	}
	span {
		color: var(--primary-color);
		font-size: 14px;
	}
	div {
		margin-top: 20px;
		display: flex;
		gap: 20px;
	}
`;
export const Seperator = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.2 rem;
	margin: 1rem 0 1rem 0;
`;
