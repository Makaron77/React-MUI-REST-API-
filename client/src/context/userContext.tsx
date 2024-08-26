import React, { createContext, useState } from 'react';

export const UserContext = createContext({
	login: false,
});

export const UserAppContext = ({ children }) => {
	const [login, setLogin] = useState(false);
	const [email, setEmail] = useState('')

	return (
		<UserContext.Provider value={{ login, setLogin, email, setEmail }}>
			{children}
		</UserContext.Provider>
	);
};
