import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// Styles

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Modal = ({ children, onClose }) => {
	// Hooks
	// -- side effects
	useEffect(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				onClose();
			}
		});
	}, [onClose]);
	// Custom funtions
	const closeOnOuter = (e) => {
		if (e.target.dataset.id === 'modalWrapper') onClose();
	};
	return ReactDOM.createPortal(
		<>
			<Overlay></Overlay>
			<ModalWrapper onClick={(e) => closeOnOuter(e)} data-id='modalWrapper'>
				{children}
			</ModalWrapper>
		</>,
		document.getElementById('portal')
	);
};

export default Modal;
