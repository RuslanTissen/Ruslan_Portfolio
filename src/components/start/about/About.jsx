import React, { useContext } from 'react'
import "./About.scss"
import { NavLink } from 'react-router-dom'
// import { FaArrowRight } from 'react-icons/fa'
import { Context } from '../../Context.js'
// import trans from '../../Translate.js'

function About() {
	// const { lang } = useContext(Context)

	// const scrollToTheTop = () => {
	// 	window.scroll(0, 0)
	// }

	return (
		<div className="about" id='about'>

			<h3>Meet</h3>
			<h1>Ruslan Tissen</h1>
			<h2>Shaping the Web, One Project at a Time.</h2>

			<a href="mailto:rthyssen73@gmail.com">Contact</a>

		</div>
	)
}

export default About