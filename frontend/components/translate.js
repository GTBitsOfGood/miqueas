import React from 'react';

let englishToSpanish = {
  "Profile": "Perfil",
  "Inventory": "Inventario"
}

/**
 * The translate function
 * @param {string} props the phrase
 * @param {object} props the current language
 * @return the phrase in the desired language
 */
function translate(phrase, language) {
  console.log(language.language)
  if (language.language == "English") {
    return phrase;
  } else {
    console.log(englishToSpanish)
    return englishToSpanish[phrase] || "Error Translating";
  }
}

module.exports = translate
