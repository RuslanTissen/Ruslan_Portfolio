import React from 'react'
import "./MeetPipi.scss"
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'


const scrollToTheTop = () => {
	window.scroll(0, 0)
}

function MeetPipi() {

	return (
		<div className='meet-pipi__container'>
			<div className="meet-pipi__container-title-box">
				<p className="meet-pipi__container-title-box--title">STRENGTH in Mobility</p>
				<div className="meet-pipi__container-title-box--underline-dig"></div>
				<div className="meet-pipi__container-title-box--underline-thin"></div>
			</div>

			<div className="meet-pipi__container-1">
				<div className="meet-pipi__container-1--img-box">				</div>

				<div className="meet-pipi__container-1--text-box">
					<p className='meet-pipi__container-1--text-box--name'> Priscyla Tosti (coach) </p>
					<p className='meet-pipi__container-1--text-box--info'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
					<div className="meet-pipi__container--button">
						<NavLink className="meet-pipi__container--button-text" to="Contact" onClick={scrollToTheTop}>Book now </NavLink>
						<NavLink className="meet-pipi__container--button-arrow" to="Contact" onClick={scrollToTheTop}><FaArrowRight /> </NavLink>
					</div>
				</div>
			</div>

			{/* <div className="meet-pipi__container-2">
				<div className="meet-pipi__container-2--img-box">				</div>

				<div className="meet-pipi__container-2--text-box">
					<p className='meet-pipi__container-2--text-box--name'> Tissen Team (IT)</p>
					<p className='meet-pipi__container-2--text-box--info'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
					<div className='meet-pipi__container-2--text-box--btn'>
						<NavLink className="meet-pipi__container-2--text-box--btn-white" to="Learn" onClick={scrollToTheTop}>Book now </NavLink>
						<NavLink className="meet-pipi__container-2--text-box--btn-gray" to="Learn" onClick={scrollToTheTop}><FaArrowRight /> </NavLink>
					</div>
				</div>
			</div> */}

		</div>
	)
}

export default MeetPipi