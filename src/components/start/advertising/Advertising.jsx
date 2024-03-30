import React, { useContext } from 'react'
import "./Advertising.scss"
import { Context } from '../../Context.js'
import trans from '../../Translate.js'

function Advertising() {
	const {lang}  = useContext(Context)

	return (
		<div className='advertising' id='adverts'>
			<div className="advertising-cont">

				<div className='small services'>
					<h2><span> {trans[lang].advertSmall}</span>  {trans[lang].advertLanding}</h2>
					<p>{trans[lang].advertLandingText}</p>

				</div>

				<div className='middle services'>
					<h2>{trans[lang].advertWebsite} <span>{trans[lang].advertMid}</span>  {trans[lang].advertProjects}</h2>
					<p>{trans[lang].advertWhen}</p>

				</div>

				<div className='big services'>
					<h2>{trans[lang].advertCustom} <span>{trans[lang].advertLarge}</span>  {trans[lang].advertProjects}</h2>
					<p>{trans[lang].advertFor}</p>

				</div>

				<div className='ai services'>
					<h2>{trans[lang].advertMaintenance} <span>{trans[lang].advertSupport}</span></h2>
					<p>{trans[lang].advertOnce}</p>

				</div>

				<div className='shopify services'>
					<h2>{trans[lang].advertShopify}  <span> {trans[lang].advertOnline} </span> </h2>
					<p>{trans[lang].advertReady}</p>

				</div>

				<div className='designed services'>
					<h2>{trans[lang].advertCustomWeb} <span>{trans[lang].advertDesign}</span> {trans[lang].advertServices}</h2>
					<p>{trans[lang].advertYour}</p>

				</div>

			</div>

		</div>
	)
}

export default Advertising