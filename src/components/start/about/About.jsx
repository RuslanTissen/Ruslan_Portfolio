import React, { useContext } from 'react'
import "./About.scss"
// import { NavLink } from 'react-router-dom'
// import { Context } from '../../Context.js'
// import trans from '../../Translate.js'
import photo from "../../../images/Ruslan_Gray_Photo.jpg"

function About() {
	// const { lang } = useContext(Context)

	// const scrollToTheTop = () => {
	// 	window.scroll(0, 0)
	// }

	return (
		<div className="about" id='about'>
			<div className="about__cont">
				<div className="about__cont--title">
					<div className="img-cont"><div className="img-self"></div></div>
					<div className="name-box">
						<h5>Hi, my name is</h5>
					</div>
				</div>
				<h1>Ruslan Tissen</h1>

			</div>

		</div>
	)
}

export default About