export const handlePassword1 = ({ target }, validPassword1, submitButtonRef, updateState, setPasswordError1, password2) => {
	updateState('password1', target.value);
	validPassword1(target.value, setPasswordError1, password2);
	submitButtonRef.current.focus();
};
