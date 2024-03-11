import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { IoDiamondSharp } from "react-icons/io5";
import trans from '../Translate.js';
import { Context } from '../Context'
import "./Footer.scss"

function Footer() {
	const { lang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='footer'>

			<div className="footer__logo footer__operation--block">
				<h2 className='footer__logo--logo-box' ><NavLink to="*" onClick={scrollToTheTop}>Ruslan Tissen</NavLink></h2>

				<p>{trans[lang].footerCopyright} <a href="https://tissen.tech/" target='_blank'>{trans[lang].footerTissen}</a> {trans[lang].footerPowered}</p>

			</div>
		</div>
	)
}

export default Footer