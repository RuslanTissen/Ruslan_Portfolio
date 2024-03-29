import React from 'react'
import "./Start.scss"
import About from './about/About.jsx'
import Introduction from './introduction/Introduction.jsx'
import Work from './work/Work.jsx'
import Advertising from './advertising/Advertising.jsx'
import Contact from './contact/Contact.jsx'

function Start() {
	return (
		<div className='start'>
			<About />

			<Introduction />

			<Work />

			<Advertising />

			<Contact />

		</div>
	)
}

export default Start


// import About from './about/About.jsx'
// import Introduction from './introduction/Introduction'  
// import Contact from './contact/Contact.jsx';
// import Straching from './straching/Straching.jsx';
// import Pricing from './pricing/Pricing.jsx'
