import React, { createContext, useState, useEffect } from 'react';

import { themeData } from '../data/themeData';
import contactsLight from '../Assets/svg/contacts-light.svg';
import contactsDark from '../Assets/svg/contacts-dark.svg';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(themeData.theme);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const value = { theme, drawerOpen, setHandleDrawer };
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
