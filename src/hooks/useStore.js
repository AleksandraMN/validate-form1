import { useState } from "react";
import { initialState } from "../state";

export const useStore = () => { //  для работы с состоянием
	const [state, setState] = useState(initialState); // начальное состояние

	return {
		getState: () => state,  // функция получения текущего состояния
		updateState: (fieldName, newValue) => { // функция обновления состояния
			setState({...state, [fieldName]: newValue})
		},
		resetState: () => {
			setState(initialState);
		},
	};
};
