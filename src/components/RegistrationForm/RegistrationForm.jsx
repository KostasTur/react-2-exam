import React from 'react';
import Form from '../Form/Form';
import RegistrationValidation from '../RegistrationValidation';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Illustration } from '../../assets/illustration.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import {
	LeftTextWrapper,
	RegistrationLeft,
	RegistrationRight,
	StyledRegistration,
	RegistrationTop,
	Seperator,
} from './RegistrationForm.style.js';
import Button from '../Button/Button';
const RegistrationForm = () => {
	return (
		<StyledRegistration>
			<RegistrationLeft>
				<Logo />
				<Illustration className='bg' />
				<LeftTextWrapper>
					<div>
						Start for free & get <br />
						attractive offers today !
					</div>
				</LeftTextWrapper>
			</RegistrationLeft>

			<RegistrationRight>
				<RegistrationTop>
					<h1>Get Started</h1>
					<p>Already have an account</p>
					<span>Log in</span>
					<div>
						<Button text='sign up' google icon={<FcGoogle />} />
						<Button text='sign up' facebook icon={<FaFacebook />} />
					</div>
				</RegistrationTop>
				<Seperator>Or</Seperator>
				<RegistrationValidation
					render={(
						handleChange,
						handleSumit,
						state,
						nameError,
						emailError,
						passwordError
					) => (
						<Form
							handleChange={handleChange}
							handleSumit={handleSumit}
							state={state}
							nameError={nameError}
							emailError={emailError}
							passwordError={passwordError}
						/>
					)}
				/>
			</RegistrationRight>
		</StyledRegistration>
	);
};

export default RegistrationForm;
