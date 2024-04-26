import React from 'react'
import "./List.scss"
import Card from "./Card.jsx"

function List(props) {
	const { data } = props

	console.log(data)

	return (
		<ol className='list'>
			{props.children}
			{/* {data.map(card => <Card item={card} />)} */}
		</ol>
	)
}

export default List