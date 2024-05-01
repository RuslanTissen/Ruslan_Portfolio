import React, { useEffect, useState } from 'react'
import "./List.scss"
// import Card from "./Card.jsx"

function List(props) {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos/250')
			.then((response) => response.json())
			.then(result => setData(result));
	}, [])

	console.log(data)


	return (
		<div className='list'>

			{/* <img>{data.title}</img> */}

			<img src={data.thumbnailUrl} alt="Ups, it should be foto" />



			{/* {data.map(card => <Card item={card} />)} */}
		</div>
	)
}

export default List