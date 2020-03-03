import React, { useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("English");
  return <Component
            language = {language}
            setLanguage = {(language) => setLanguage(language)}
          />
}
export default MyApp;
