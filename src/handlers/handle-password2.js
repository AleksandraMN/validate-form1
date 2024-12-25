export const handlePassword2 = ({ target }, updateState, validPassword2, setPasswordError2, password1, submitButtonRef) => {
	updateState('password2', target.value);
	validPassword2(target.value, setPasswordError2, password1);
	submitButtonRef.current.focus();
};
