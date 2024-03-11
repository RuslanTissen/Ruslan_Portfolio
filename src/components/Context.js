import React from "react";
import { useState } from "react";

export const Context = React.createContext(null)

export default function ContextProvider(props) {
	const langFromLS = localStorage.getItem("lang")
	const langDefault = langFromLS ? JSON.parse(langFromLS) : "en"
	const [lang, setLang] = useState(langDefault)
	const contextValue = { lang, setLang }

	return (
		<Context.Provider value={contextValue}>
			{props.children}
		</Context.Provider>
	)
}