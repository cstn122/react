import React, { useState, useEffect } from "react";

const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: () => { },
        onLogin: (email, password) => { },
    }
);

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(
        () => {
            console.log('-------------RENDERED-------------');
            // remain login when leaved page
            const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

            if (storedUserLoggedInInfo === '1') {
                setIsLoggedIn(true);
            }
        },
        []
    );

    const logoutHandler = () => {
        setIsLoggedIn(false);
        // localStorage.removeItem('email');
        // localStorage.removeItem('password');
        localStorage.removeItem('isLoggedIn');
    };

    const loginHandler = (email, password) => {
        // localStorage.setItem('email', email);
        // localStorage.setItem('password', password);
        localStorage.setItem('isLoggedIn', '1');

        setIsLoggedIn(true);
        console.log('auth logged in');
    };

    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler,
        }}
    >
        {props.children}
    </AuthContext.Provider >
};

export default AuthContext;