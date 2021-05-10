import React, {useState} from 'react';
import {Footer, Header, Main} from "../src/components";

export default function () {
    const [lang, setLang] = useState('fr');
  return (
      <div className={"app__root"}>
          <Header lang={lang}/>
          <Main lang={lang}/>
          <Footer lang={lang}/>
      </div>
  );
}
