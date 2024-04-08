fetch("https://api.oceandrivers.com/static/resources.json")
	.then(res => {
		if (res.ok) {
			console.log("SUCCESS")
		} else{
			console.log("NOT success")
		}
		res.json()
	})
	.then(data => console.log(data))
	.catch(error => console.log("ERROR"))





// curl http://localhost:3000/weather/Curitiba