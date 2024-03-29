import React, { useContext } from 'react';
import "./Contact.scss";
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from "react-icons/io";
// import { SiGmail, SiUpwork } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
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
				<a className='contact__media--links' href='mailto:rthyssen73@gmail.com' target='_blank'><BiLogoGmail /></a>
				<a className='contact__media--links' href='https://wa.me/4915566323269' target='_blank'><FaWhatsapp /></a>
				<a className='contact__media--links' href='https://www.linkedin.com/in/ruslan-tissen-3799119b/' target='_blank'><FaLinkedinIn /></a>
				<a className='contact__media--links' href='https://github.com/RuslanTissen' target='_blank'><IoLogoGithub /></a>
			</div>
		</div>
	)
}

export default Contact