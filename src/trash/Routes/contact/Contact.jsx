import React, { useContext } from 'react'
import "./Contact.scss"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from '@emailjs/browser';
import { IoIosMail } from "react-icons/io"
import trans from "../../../components/Translate.js"
import { Context } from '../../../components/Context.js';
import { SiUpwork } from "react-icons/si";
import { FaInstagram } from 'react-icons/fa'


function Contact() {
	const { lang } = useContext(Context)
	const sendEmail = (e) => {
		e.preventDefault();
		const formToReset = document.getElementById("contact__form")

		emailjs.sendForm('service_eeerkr9', 'template_jrwx5ew', e.target, 'WC8yJsuVfaL-55OpD')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		formToReset.reset()
		alert("Form submitted successfully!")
	};

	return (
		<div className='contact'>
			<div className="contact__conatiner">
				<div className="contact__email-and-whatsapp">
					<a className='email__link' href="mailto:info@tissen.tech"><IoIosMail /></a>
					<a className='whats-app__link' href='https://wa.me/14155797059' target="_blank" rel="noreferrer">	<BsWhatsapp />	</a>
					<a className='upwork__link' href='https://www.upwork.com/freelancers/~01fe4cfc87ce82d6a8' target='_blank'><SiUpwork /></a>
					<a className='instagram__link' href='https://www.instagram.com/pipitosti/' target='_blank'><FaInstagram /></a>
				</div>

				<h2 className='form-statement'>{trans[lang].contactTitle1}</h2>

				<form onSubmit={sendEmail} id='contact__form'>
					<div className="form__name-container form__field">
						<label htmlFor="name">{trans[lang].contactName}</label>
						<input type="text" name='name' id='name'></input>
					</div>

					<div className="form__email-container form__field">
						<label htmlFor="email">{trans[lang].contactEmail}</label>
						<input type="text" name='email' id='email' />
					</div>

					<div className="form__phone-container form__field">
						<label htmlFor="phone">{trans[lang].contactPhone}</label>
						<input type="text" name='phone' id='phone' />
					</div>

					<div className="form__detales-container form__field">
						<label htmlFor="details">{trans[lang].contactInputFild}</label>
						<textarea name="details" id="details"></textarea>
					</div>

					<div className="form__button-container form__field">
						<label></label>
						<button id="submit" type="submit">{trans[lang].contactSubmit}</button>
					</div>
					<p id="output"></p>
				</form>


				<div className="contact__conatiner--phone-container">
					<h2 className='contact__conatiner--statement'>{trans[lang].contactTitle2}</h2>
					<h4 className='contact__conatiner--phons'>USA:  (+1) 176-8315-7254</h4>
					{/* <h4 className='contact__conatiner--phons'>{trans[lang].contactArgentina} (+54) 11-5763-9301</h4> */}
				</div>

			</div>
		</div>
	)
}

export default Contact