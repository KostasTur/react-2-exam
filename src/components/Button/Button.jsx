import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 0.5rem 3rem;
	background-color: ${({ google, facebook }) =>
		google ? `#FFFFFF` : facebook ? '#4F70B5' : 'white'};
	color: ${({ google, facebook }) =>
		google ? `#00` : facebook ? '#FFFFFF' : 'white'};
	border: none;
	outline: none;
	cursor: pointer;
	box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	font-size: 14px;
	svg {
		margin-right: 8px;
		font-size: 16px;
	}
`;
const Button = ({ text, icon, google, facebook }) => {
	return (
		<StyledButton google={google} facebook={facebook}>
			{icon} {text}
		</StyledButton>
	);
};

export default Button;
