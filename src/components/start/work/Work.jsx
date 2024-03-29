import React from 'react'
import "./Work.scss"
import work1 from "../../../images/work-1.png"
import work2 from "../../../images/work-2.png"
import work3 from "../../../images/work-3.png"

function Work() {
	return (
		<div className='work'>

			<div className="work-cont">
				<div className="work__text-cont work__text-cont--3">
					<p>Here's a big project with many languages and lots of specific information.</p>
					<h6>Technologies: JavaScript, ReactJS, SCSS, CANVA, MUI</h6>
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
					<p>Here's a simple and fast webpage for small businesses. It's made to get info quickly and easily.</p>
					<h6>Technologies: JavaScript, ReactJS, SCSS, CANVA, MUI</h6>
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
					<p>This page works on phones and computers, and it's in two languages. It loads fast so you can see stuff quickly. It looks really nice and modern, so it's fun to use.</p>
					<h6>Technologies: JavaScript, ReactJS, SCSS, CANVA, MUI</h6>
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