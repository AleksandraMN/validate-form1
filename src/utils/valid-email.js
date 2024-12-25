
export const validEmail = (value, setEmailError) => {
	let error = null;

	if(!/^.+@.+\..+$/.test(value)) {
		error = 'Неверный email.';
	} else if(value.length < 0) {
		error = 'Поле не должно быть пустым.';
	}
	setEmailError(error);
};
