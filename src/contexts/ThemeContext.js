import React from 'react';

export const themes = {
    dark: {
        addClassLight: false,
        color: 'goldenrod',
        icon: 'fa fa-lightbulb-o',
        modalClassName: 'custom-modal dark hero',
        modalOverlayClassName: 'custom-overlay dark',
        aboutClassName: 'box_inner about',
        modalClassNamePortfolio: 'custom-modal dark',
        modalClassNameBlog: 'custom-modal dark',
    },
    light: {
        addClassLight: true,
        color: 'green',
        icon: 'fa fa-moon-o',
        modalClassName: 'custom-modal dark light',
        modalOverlayClassName: 'custom-overlay green',
        aboutClassName: 'box_inner about green',
        modalClassNamePortfolio: 'custom-modal dark green',
        modalClassNameBlog: 'custom-modal',
    },
}

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;