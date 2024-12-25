export const onSubmit = (e, sendFormData, getState, setIsPending, resetState) => {
	e.preventDefault();
	sendFormData(getState());
	setIsPending(true);
	resetState();
};
