const Fetching = ({ data, setData }) => {
	return (
		<div>
			{data.forEach(element => {
				<li>{element.title}</li>
			})}
		</div>
	)
}

export default Fetching