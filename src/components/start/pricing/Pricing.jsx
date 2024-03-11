import React, { useContext } from 'react'
import "./Pricing.scss"
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { Context } from '../../Context.js'
import trans from '../../Translate.js'


function Pricing() {
	const { lang} = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='success' id='pricing'>

			<div className="success-title-box">
				<div className="success-title-box-cont">
					<p className="success-title-box--title">{trans[lang].pricingService}	</p>
					<div className="success-title-box--underline-dig"></div>
					<div className="success-title-box--underline-thin"></div>
				</div>
			</div>

			<div className="success__img-block"></div>

			<div className="success__price-1">

				<div className="price__box"><span>$</span><span>200</span> </div>
				<p>{trans[lang].pricingWeeks}</p>
				<div className="success__price--button">
					<a className="success__price--button-text" href='mailto:priscylatosti@gmail.com' target='_blank'>{trans[lang].pricingStart} <FaArrowRight /> </a>
					{/* <NavLink className="success__price--button-arrow" to="Contact" onClick={scrollToTheTop}></NavLink> */}
				</div>

				<div className="success__price--text-box">
					<ul>
						<li>{trans[lang].pricingNutrition}</li>
						<li>{trans[lang].pricingPlanning}</li>
						<li>{trans[lang].pricingSet}</li>
						{/* <li>{trans[lang].pricingBuild}build visualization</li>
						<li>{trans[lang].pricingGoal}goal-setting techniques</li> */}
					</ul>
				</div>

			</div>

			<div className="success__price-2">
				<div className="price__box"><span>$</span><span>500</span> </div>
				<p>{trans[lang].pricing8Weeks}</p>
				<div className="success__price--button">
					<a className="success__price--button-text" href='mailto:priscylatosti@gmail.com' target='_blank'>{trans[lang].pricingStart} <FaArrowRight /> </a>
					{/* <NavLink className="success__price--button-arrow" to="Contact" onClick={scrollToTheTop}> </NavLink> */}
				</div>
				<div className="success__price--text-box">
					<ul>
						{/* <li>Build Visualization and Goal-Setting Techniques</li> */}
						<li>{trans[lang].pricingEverything} </li>
						{/* <li>{trans[lang].pricingImprove} </li>
						<li>{trans[lang].pricingConquer} </li> */}
						{/* <li>{trans[lang].pricingLearn} </li> */}
					</ul>
				</div>
			</div>

		</div>
	)
}

export default Pricing