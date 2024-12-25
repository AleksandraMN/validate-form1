export const validPassword1 = (value, setPasswordError1, password2) => {
	let error = null;

	if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/.test(value)) {
		error =
			'Неверный пароль. Пароль может содержать строчную, прописаную, цифру и спецсимвол - от шести и более символов.';
	} else if(value.length < 0) {
		error = 'Поле не должно быть пустым.';
	} else if (password2 !== '' && value !== password2) {
		error = 'Повторный пароль введен не верно!';
	}
	setPasswordError1(error);
};

