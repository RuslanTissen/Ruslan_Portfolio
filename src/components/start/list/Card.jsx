import React from 'react'

function Card(props) {
	console.log(props)



	return (
		<ol className='card'>
			<li>{props.item.text}</li>
		</ol>
	)
}

export default Card