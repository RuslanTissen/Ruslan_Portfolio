import React from 'react'
import { NavLink } from 'react-bootstrap'

function Exercises(props) {
	let { exeImg, exeTitle, exeText } = props

	return (
		<div className='exercises'>
			<div className={exeImg}></div>
			<div className="exercises__text-cont">
				<div className="exercises__title">{exeTitle}</div>
				<div className="exercises__text">{exeText}</div>
				<NavLink className="exercises__link">BOOK NOW</NavLink>
			</div>
		</div>
	)
}

export default Exercises