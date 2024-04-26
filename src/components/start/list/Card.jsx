import React from 'react'

function Card(props) {
	console.log(props)



	return (
		<div className='card'>
			<p>{props.item.text}</p>
		</div>
	)
}

export default Card