export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const OTPVERIFIED ="OTPVERIFIED";
export const PHONEVERIFIED ="PHONEVERIFIED";
export const FACEVERIFIED ="FACEVERIFIED"



export const login = (userData) => {
	
	return {
	
		type: LOGIN,
		payload: userData
	};
	
}

// Logout / Clear Profile

export const logout = () => {
	return { type: LOGOUT };
};
