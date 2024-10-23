import Cookies from "js-cookie";

import i18n from "../../Localizations"

/**
 * Set Language
 * @param {string} language language type
 * @returns {void} Set Language
 */
export const setLanguage = (language: string): void => {
  Cookies.set("language", language, { expires: 7 })
  i18n.locale = language
}