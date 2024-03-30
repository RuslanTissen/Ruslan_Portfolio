import React, { useContext } from 'react'
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

			<div className="footer__cont">
				<h2 className='footer__cont--logo' ><a href="#header" onClick={scrollToTheTop}> TISSEN</a></h2>

				<p>{trans[lang].footerCopyright} <a href="https://tissen.tech/" target='_blank'>{trans[lang].footerTissen}</a> {trans[lang].footerPowered}</p>

			</div>
		</div>
	)
}

export default Footer