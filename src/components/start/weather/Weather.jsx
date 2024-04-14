import React, { useEffect, useRef, useState } from 'react'
import "./Weather.scss"

function Weather() {
	const [data, setData] = useState(null)

	const url = `https://jsonplaceholder.typicode.com/posts`

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(post => {
				setData(post)
				{
					data && data.forEach(post => {
						const li = document.createElement("li")
						li.innerText = post.title
						document.querySelector("#posts").append(li)
					})
				}
			})
			.catch(error => console.log(error))
	}, [])

	useEffect(() => {
		document.querySelector("#save").addEventListener("click", () => {
			const text = document.querySelector("#content").value

			const config = {
				method: "POST",
				body: JSON.stringify({
					title: text,
					body: 'bar',
					userId: 1
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}
			}

			fetch(url)
		})
	}, [])

	return (
		<div className='weather' id='weather'>

			<input type="text" id='content' />
			<button id="save">Create post</button>

			<ul id='posts'></ul>

		</div>
	)
}

export default Weather








