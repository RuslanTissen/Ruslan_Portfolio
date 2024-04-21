import React, { useEffect, useRef, useState } from 'react'
import "./Weather.scss"

function Weather() {
	const [data, setData] = useState(null)
	const url = `https://jsonplaceholder.typicode.com/posts`

	useEffect(() => {
		fetch(url)
		  .then((response) => response.json())
		  .then((posts) => {
			 setData(posts);
		  })
		  .catch((error) => console.log(error));
	 }, []);
  
	 useEffect(() => {
		if (data) {
		  data.forEach((post) => {
			 const li = document.createElement('li');
			 li.innerText = post.title;
			 document.querySelector('#posts').append(li);
		  });
		}
	 }, [data]);

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
					'Content-type': 'application/json',
				}
			}

			fetch(url, config)
				.then(res => res.json())
				.then(post => { 
					console.log(post) 
					const li = document.createElement('li');
					li.innerText = post.title;
					document.querySelector('#posts').prepend(li);
				})
				.catch(error => { console.error("Oh no", error) })
		})
	}, [])

	return (
		<div className='weather' id='weather'>

			<input type="text" id='content' />
			<button id="save">Create post</button>

			<ul id='posts'>

			</ul>

		</div>
	)
}

export default Weather








