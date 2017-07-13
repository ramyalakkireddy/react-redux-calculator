
export const INPUT_VALUE = 'INPUT_VALUE'
export const GET_RESULT = 'GET_RESULT'
export const CLEAR = 'CLEAR'

export const inputValue = (value) => {
	return {
		type: INPUT_VALUE,
		value
	}
}

export const getResult = () => {
	return {
		type: GET_RESULT
	}
}

export const clear = () => {
	return {
		type: CLEAR
	}
}