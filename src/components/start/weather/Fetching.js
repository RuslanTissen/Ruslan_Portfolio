import React, { useEffect, useState } from 'react'

function Fetching() {
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


	return (
		<ul id='posts'>

		</ul>
		)
}

export default Fetching