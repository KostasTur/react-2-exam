import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	div {
		position: relative;
		margin-bottom: 15px;
	}

	label {
		display: block;
		margin-bottom: 5px;
	}
	.input-icon {
		position: absolute;
		margin-top: 10px;
		margin-left: 10px;
	}
	.error-icon,
	.success-icon {
		position: absolute;
		top: 35px;
		right: 10px;
	}
	.error-icon {
		color: red;
	}
	.success-icon {
		color: green;
	}
	input[type='submit'] {
		width: 100%;
		height: 40px;
		border-radius: 8px;
		border: 2px solid var(--primary-color);
		background-color: var(--primary-color);
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
		color: white;
		padding: 0 30px;
		outline: none;
		cursor: pointer;
	}
	p {
		margin-top: 0.2rem;
		color: red;
	}
`;
const StyledTextInput = styled.input`
	width: 100%;
	height: 40px;
	border-radius: 8px;
	outline: none;
	border: 2px solid #c4c4c4;
	padding: 0 30px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

	&:focus {
		outline-color: red;
	}
`;
const Form = ({
	handleChange,
	handleSumit,
	state,
	nameError,
	emailError,
	passwordError,
}) => {
	console.log(nameError);
	return (
		<StyledForm onSubmit={handleSumit}>
			<div className='input-group'>
				<label htmlFor='name'>Name</label>
				<FaRegUser className='input-icon' />
				<StyledTextInput
					type='text'
					id='name'
					placeholder='Joy Shaheb'
					value={state.name}
					onChange={handleChange}
				/>
				{nameError.status === 'error' && (
					<BsExclamationCircleFill className='error-icon' />
				)}
				{nameError.status === 'success' && (
					<FaRegCheckCircle className='success-icon' />
				)}
				{nameError.message && (
					<p className='error-message'>{nameError.message}</p>
				)}
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<FaRegEnvelope className='input-icon' />
				<StyledTextInput
					type='text'
					id='email'
					placeholder='abc@gmail.com'
					value={state.email}
					onChange={handleChange}
				/>
				{emailError.status === 'error' && (
					<BsExclamationCircleFill className='error-icon' />
				)}
				{emailError.status === 'success' && (
					<FaRegCheckCircle className='success-icon' />
				)}
				{emailError.message && (
					<p className='error-message'>{emailError.message}</p>
				)}
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<BiLock className='input-icon' />
				<StyledTextInput
					type='password'
					id='password'
					placeholder='Password here'
					value={state.password}
					onChange={handleChange}
				/>
				{passwordError.status === 'error' && (
					<BsExclamationCircleFill className='error-icon' />
				)}
				{passwordError.status === 'success' && (
					<FaRegCheckCircle className='success-icon' />
				)}
				{passwordError.message && (
					<p className='error-message'>{passwordError.message}</p>
				)}
			</div>
			<div>
				<input type='submit' value='Submit' />
			</div>
		</StyledForm>
	);
};

export default Form;
