export const validPassword2 = (value, setPasswordError2, password1) => {
		let error = null;

		if (value !== password1 && password1 !== '') {
			error = 'Повторный пароль введен не верно!';
		}
		setPasswordError2(error);
	};
