const data = null;

const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f');
xhr.setRequestHeader('x-rapidapi-key', 'e000c04796msh754d765fcc337f1p10f489jsna228c5357675');
xhr.setRequestHeader('x-rapidapi-host', 'yahoo-weather5.p.rapidapi.com');

xhr.send(data);