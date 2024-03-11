import React, { useContext } from 'react'
import "./Straching.scss"
import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-bootstrap'
import { Context } from '../../Context.js'
import trans from '../../Translate.js'

function Straching() {
	const { lang} = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className="straching" id='straching'>

			<div className="straching__image-container">			</div>

			<div className="straching__text-container">
				<div className="straching__text-container--box">
					<p className="straching__text-container--title"><span>{trans[lang].stretching}  </span> <span>{trans[lang].stretchingCourse}</span></p>
					<div className="straching__text-container--underline-dig"></div>
					<div className="straching__text-container--underline-thin"></div>
					<div className="straching__text-container--text-about">{trans[lang].stretchingText}					</div>
					<p className='straching__languages'>{trans[lang].stretchingAvailable}<font > {trans[lang].stretchingSpanish} </font>{trans[lang].stretchingAnd}  <font> {trans[lang].stretchingEnglish}</font></p>
					<div className="straching__button">
						<NavLink className="straching__button--text" to="Contact" onClick={scrollToTheTop}>{trans[lang].stretchingStart}<FaArrowRight /></NavLink>
						{/* <NavLink className="straching__button--arrow" to="Contact" onClick={scrollToTheTop}> </NavLink> */}
					</div>
					{/* <p className='straching__languages'>The price is flexible, either </p> */}
					<div className="straching__price-box"><span>$</span><span>25 -</span> <span> $</span><span> 60</span> </div>
					<p className='straching__needs'>({trans[lang].stretchingBased}) </p>
				</div>
			</div>

		</div>
	)
}

export default Straching


// <div className='service'>
// 	<div className="service__title-box">
// 		<p className="service__title-box--title">OUR SERVICES</p>
// 		<div className="service__title-box--underline-dig"></div>
// 		<div className="service__title-box--underline-thin"></div>
// 		<NavLink className='service__link'>VIEW ALL</NavLink>
// 	</div>

// 	<Exercises
// 		exeImg={`img2`}
// 		exeTitle={`WORKSHOPS & PRESENTATIONS`}
// 		exeText={`Education for athletes, teams and coaches.`}
// 	/>
{/* <Exercises
			exeImg={`img1`}
			exeTitle={`INDIVIDUAL SESSIONS`}
			exeText={`This 1-on-1 session is built for individual athletes`}
			
		/> */}

{/* <Exercises
			exeImg={`img1`}
			exeTitle={`GROUP SESSIONS`}
			exeText={`Create winning chemistry for your team`}
		/> */}
// </div>