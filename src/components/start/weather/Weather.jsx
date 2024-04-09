import React from 'react'
import "./Weather.scss"

function Weather() {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then(response => response.json())
		.then(post => {
			console.log(post)
			const li = document.createElement("li")
			li.innerText = post[1].title
			document.querySelector("#weather").prepend(li)
		})
		.catch(error => console.log(error))

	return (
		<div className='weather' id='weather'>






		</div>
	)
}

export default Weather








