import { useState, useReducer } from 'react';

const initialState = {
	name: '',
	email: '',
	password: '',
};
const reducer = (state, action) => {
	return { ...state, [action.field]: action.payload };
};
const RegistrationValidation = ({ render }) => {
	// Hookst
	// state
	// input state
	const [state, dispatch] = useReducer(reducer, initialState);
	// errors state
	const [nameError, setNameError] = useState({ status: '', message: '' });
	const [emailError, setEmailError] = useState({ status: '', message: '' });
	const [passwordError, setPasswordError] = useState({
		status: '',
		message: '',
	});

	// custom functions
	const handleChange = (e) => {
		dispatch({
			field: e.target.id,
			payload: e.target.value,
		});
	};
	const handleSumit = (e) => {
		e.preventDefault();
		if (!state.name) {
			setNameError({ status: 'error', message: 'Username cannot be blank' });
		}
		if (!state.email) {
			setEmailError({ status: 'error', message: 'Email cannot be blank' });
		}
		if (!state.password) {
			setPasswordError({
				status: 'error',
				message: 'Password cannot be blank',
			});
		}
		if (state.name) {
			setNameError({ status: 'success', message: '' });
		}
		if (state.email) {
			setEmailError({ status: 'success', message: '' });
		}
		if (state.password) {
			setPasswordError({ status: 'success', message: '' });
		}
	};
	return render(
		handleChange,
		handleSumit,
		state,
		nameError,
		emailError,
		passwordError
	);
};

export default RegistrationValidation;
