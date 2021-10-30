import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyles';
import Modal from './components/Modal/Modal';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<GlobalStyle />
			<div className='App'>
				<button onClick={() => setShowModal(true)}>SignUp</button>
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<RegistrationForm />
				</Modal>
			)}
		</>
	);
}

export default App;
