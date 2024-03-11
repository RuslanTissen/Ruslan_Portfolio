import React from 'react'
import { Routes, Route } from "react-router-dom"
import Start from '../components/start/Start'
// import About from '../components/start/about/About.jsx'
// import Contact from '../components/Routes/contact/Contact'

function Main() {
	return (
		<main>
			<Routes>
				<Route path="*" element={<Start />} />
				{/* <Route path="About" element={<About />} /> */}
				{/* <Route path="Contact" element={<Contact />} /> */}
			</Routes>
		</main>
	)
}

export default Main