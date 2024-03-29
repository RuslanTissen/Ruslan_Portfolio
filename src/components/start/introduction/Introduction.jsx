import React from 'react'
import "./Introduction.scss"
import trans from '../../Translate.js'
import { useContext } from 'react'
import { Context } from '../../Context.js'

function Introduction() {
	const {lang} = useContext(Context)

	return (
		<div className="introduction" id='intro'>
			<div className="introduction__cont">
				<p>{trans[lang].introText}"</p>
			</div>

		</div>
	)
}

export default Introduction