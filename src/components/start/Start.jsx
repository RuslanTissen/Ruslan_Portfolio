import React from 'react'
import "./Start.scss"
// import About from './about/About.jsx'
// import Introduction from './introduction/Introduction.jsx'
// import Work from './work/Work.jsx'
// import Advertising from './advertising/Advertising.jsx'
// import Contact from './contact/Contact.jsx'
import Weather from "./weather/Weather.jsx"
import List from "./list/List.jsx"

const images = [
	{
		id: 1,
		text: "cats"
	},
	{
		id: 2,
		text: "dogs"
	}
]

const properties = [
	{
		id: 1,
		text: "Big House"
	},
	{
		id: 2,
		text: "Small House"
	}
]

function Start() {
	return (
		<div className='start'>
			{/* <About />

			<Introduction />

			<Work />

			<Advertising /> */}

			{/* <Weather /> */}

			<List >
				{images.map(card => <li>{card.text}</li>)}
			</List>
			{/* <hr />
			<List data={properties} /> */}

			{/* <Contact /> */}

		</div>
	)
}

export default Start


// import About from './about/About.jsx'
// import Introduction from './introduction/Introduction'  
// import Contact from './contact/Contact.jsx';
// import Straching from './straching/Straching.jsx';
// import Pricing from './pricing/Pricing.jsx'
