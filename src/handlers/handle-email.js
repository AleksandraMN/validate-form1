
export const handleEmail = ({ target }, validEmail, setEmailError, submitButtonRef, updateState) => {
	updateState('email', target.value);
	validEmail(target.value, setEmailError);
	submitButtonRef.current.focus();
};
