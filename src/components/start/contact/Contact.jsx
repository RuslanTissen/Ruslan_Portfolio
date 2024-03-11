import React, { useContext } from 'react';
import "./Contact.scss";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiGmail, SiUpwork } from "react-icons/si";
import trans from '../../Translate.js';
import { Context } from '../../Context.js';

function Contact() {
	const { lang } = useContext(Context)

	return (
		<div className='contact' id='contact'>
			<div className="contact__title-box">
				<p className="contact__title-box--title">{trans[lang].contact}</p>
				<div className="contact__title-box--underline-dig"></div>
				<div className="contact__title-box--underline-thin"></div>
			</div>
			<div className="contact__media">
				<a className='contact__media--links' href='mailto:priscylatosti@gmail.com' target='_blank'><SiGmail /></a>
				<a className='contact__media--links' href='https://wa.me/14155797059' target='_blank'><FaWhatsapp /></a>
				<a className='contact__media--links' href='https://www.upwork.com/freelancers/~01fe4cfc87ce82d6a8' target='_blank'><SiUpwork /></a>
				<a className='contact__media--links' href='https://www.instagram.com/pipitosti/' target='_blank'><FaInstagram /></a>
			</div>
		</div>
	)
}

export default Contact