import { useRef, useState } from 'react';
import styles from './app.module.css';
import { useStore } from './hooks';
import { sendFormData, validEmail, validPassword1, validPassword2 } from './utils';
import { handleEmail, handlePassword1, handlePassword2, onSubmit } from './handlers';

export const App = () => {
	const { getState, updateState, resetState } = useStore();
	const { email, password1, password2 } = getState();

	const submitButtonRef = useRef(null);

	const [isPending, setIsPending] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordError1, setPasswordError1] = useState(false);
	const [passwordDirty1, setPasswordDirty1] = useState(false);
	const [passwordError2, setPasswordError2] = useState(false);
	const [passwordDirty2, setPasswordDirty2] = useState(false);

	const disabled =
		!!passwordError1 ||
		!!emailError ||
		!!passwordError2 ||
		password2 === '' ||
		email === '' ||
		password1 === '';

	return (
		<div className={styles.app}>
			<form
				className={styles.form}
				onSubmit={(e) => onSubmit(e, sendFormData, getState, setIsPending, resetState)}
			>
				<div className={styles.wrap}>
					<label className={styles.label} htmlFor="name">
						Введите email:
					</label>
					<input
						className={styles.input}
						placeholder="Почта"
						type="email"
						name="email"
						value={email}
						onChange={({ target }) =>
							handleEmail(
								{ target },
								validEmail,
								setEmailError,
								submitButtonRef,
								updateState,
							)
						}
						onBlur={() => {
							setEmailDirty(true);
						}}
						disabled={isPending}
					/>
					{!!emailError && emailDirty && <p className={styles.error}>{emailError}</p>}
				</div>

				<div className={styles.wrap}>
					<label className={styles.label} htmlFor="password">
						Введите пароль:
					</label>
					<input
						className={styles.input}
						placeholder="Пароль"
						type="password"
						name="password"
						value={password1}
						onChange={({ target }) =>
							handlePassword1(
								{ target },
								validPassword1,
								submitButtonRef,
								updateState,
								setPasswordError1,
								password2,
							)
						}
						onBlur={() => {
							setPasswordDirty1(true);
						}}
						disabled={isPending}
					/>
					{!!passwordError1 && passwordDirty1 && (
						<p className={styles.error}>{passwordError1}</p>
					)}
				</div>

				<div className={styles.wrap}>
					<label className={styles.label} htmlFor="password">
						Введите пароль повторно:
					</label>
					<input
						className={styles.input}
						placeholder="Пароль"
						type="password"
						name="password"
						value={password2}
						onChange={({ target }) =>
							handlePassword2(
								{ target },
								updateState,
								validPassword2,
								setPasswordError2,
								password1,
								submitButtonRef,
							)
						}
						onBlur={() => {
							setPasswordDirty2(true);
						}}
						disabled={isPending}
					/>
					{!!passwordError2 && passwordDirty2 && (
						<p className={styles.error}>{passwordError2}</p>
					)}
				</div>

				<button className={styles.button} type="button" onClick={resetState}>
					Сброс
				</button>

				<button
					ref={submitButtonRef}
					className={styles.button}
					type="submit"
					disabled={disabled}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
