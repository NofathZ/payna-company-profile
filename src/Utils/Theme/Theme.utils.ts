import Cookies from "js-cookie";

/**
 * Set Theme
 * @param {string} theme theme type
 * @returns {void} Set Theme
 */
export const setTheme = (theme: string): void => {
  Cookies.set("theme", theme, { expires: 7 })
}