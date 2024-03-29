import React, { useContext } from 'react'
import "./About.scss"
import { Context } from '../../Context.js'
import trans from '../../Translate.js'

function About() {
	const { lang } = useContext(Context)

	return (
		<div className="about" id='about'>
			<div className="about__cont">
				<div className="about__cont--title">
					<div className="img-cont"><div className="img-self"></div></div>
					<div className="name-box">
						<h5>{trans[lang].myName}</h5>
					</div>
				</div>
				<h1>Ruslan Tissen</h1>

			</div>

		</div>
	)
}

export default About