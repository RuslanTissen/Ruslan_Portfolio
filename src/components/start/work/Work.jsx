import React from 'react'
import "./Work.scss"
import work1 from "../../../images/work-1.png"

function Work() {
	return (
		<div className='work'>
			<div className="work-cont">
				<div className="work__text-cont">
					<p>This landing page is fully responsive and available in two languages, ensuring a seamless experience for users across different devices and regions. With optimized loading speed, it delivers maximum efficiency, ensuring swift access to content. The design is meticulously crafted, adhering to the latest trends in web design for a modern and captivating user experience.</p>
					<h6>Technologies: JavaScript, ReactJS, SCSS, CANVA, MUI</h6>
					<a href='https://github.com/RuslanTissen/Pipi-world-3' target="_blank">GitHub</a>

				</div>
				<a className="work__img-cont" href="https://priscila.tissen.tech/" target="_blank">
					<picture className='wrapper'>
						<source media="(max-width: 799px)" srcset={work1} />
						<source media="(min-width: 800px)" srcset={work1} />
						<img className='img' src={work1} alt="" />
					</picture>
				</a>
			</div>
		</div>
	)
}

export default Work