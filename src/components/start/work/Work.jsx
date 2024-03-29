import React, { useContext } from 'react'
import "./Work.scss"
import work1 from "../../../images/work-1.png"
import work2 from "../../../images/work-2.png"
import work3 from "../../../images/work-3.png"
import { Context } from '../../Context'
import trans from '../../Translate.js'

function Work() {
	const {lang} = useContext(Context)

	return (
		<div className='work' id='works'>

			<div className="work-cont">
				<div className="work__text-cont work__text-cont--3">
					<p>{trans[lang].bigProject}</p>
					<h6>{trans[lang].bigTetch}</h6>
					<a href='https://github.com/RuslanTissen/Pipi-world-3' target="_blank">GitHub</a>

				</div>
				<a className="work__img-cont" href="https://tissen.tech/" target="_blank">
					<picture className='wrapper'>
						<source media="(max-width: 799px)" srcset={work3} />
						<source media="(min-width: 800px)" srcset={work3} />
						<img className='img-work' src={work3} alt="" />
					</picture>
				</a>
			</div>

			<div className="work-cont">
				<div className="work__text-cont work__text-cont--2">
					<p>{trans[lang].simpleProject}</p>
					<h6>{trans[lang].simpleTech}</h6>
					<a href='https://github.com/RuslanTissen/Pipi-world-3' target="_blank">GitHub</a>

				</div>
				<a className="work__img-cont" href="https://portfolio2.tissen.tech/" target="_blank">
					<picture className='wrapper'>
						<source media="(max-width: 799px)" srcset={work2} />
						<source media="(min-width: 800px)" srcset={work2} />
						<img className='img-work' src={work2} alt="" />
					</picture>
				</a>
			</div>

			<div className="work-cont">
				<div className="work__text-cont work__text-cont--1">
					<p>{trans[lang].fastProject}</p>
					<h6>{trans[lang].fastTech}</h6>
					<a href='https://github.com/RuslanTissen/Pipi-world-3' target="_blank">GitHub</a>

				</div>
				<a className="work__img-cont" href="https://priscila.tissen.tech/" target="_blank">
					<picture className='wrapper'>
						<source media="(max-width: 799px)" srcset={work1} />
						<source media="(min-width: 800px)" srcset={work1} />
						<img className='img-work' src={work1} alt="" />
					</picture>
				</a>
			</div>

		</div>
	)
}

export default Work