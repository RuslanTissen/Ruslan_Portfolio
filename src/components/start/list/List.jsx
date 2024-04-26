import React from 'react'
import "./List.scss"
import Card from "./Card.jsx"

function List(props) {
	const { data } = props

	console.log(data)

	return (
		<div className='list'>
			{data.map(card => <Card item={card} />)}
		</div>
	)
}

export default List