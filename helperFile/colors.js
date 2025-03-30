/**
 * Colors.js
 *
 * This file contains the definition of color constants used throughout the application.
 * Defining colors in a single file helps maintain consistency and makes it easier to update colors globally.
 * Colors are defined using either RGB or RGBA notation.
 *
 * Features:
 * - Centralized color definitions for consistent styling.
 * - Includes colors for primary, secondary, disabled states, gradients, and more.
 * - Facilitates easy theming and color management across the app.
 *
 * @format
 * @flow
 */

const Colors = {
    gray: 'rgba(128, 128, 128,1)',
    blue: 'rgb(93,216,255)',
    red: 'rgb(251,60,132)',
    purple: 'rgb(147,2,170)',
    primary: 'rgb(255,0,0)',
    white: 'rgb(255,255,255)',
    secondary: 'rgb(0,0,255)',
    disabled: 'rgba(255,255,255,0.5)',
    gradient: ['rgba(0,0,0,0.7)', 'transparent'],
    yellow: 'rgb(255,220,0)',
    blueGreen: 'rgb(0,151,131)',
    black: 'rgb(0,0,0)',
}

export default Colors