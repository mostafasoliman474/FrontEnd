// const url='https://cors-anywhere.herokuapp.com/https://geo.ipify.org/';
// async function getIP() {
// 	const reponse=await fetch('https://geo.ipify.org/api/');
// 	const data = await reponse.json();
// 	console.log(data);

// }
// getIP();
const ip=''

const url='https://geo.ipify.org/api/v2/';
const apiKey = 'at_IimS24ceTUuaLUy8i2m6Ty6gcYLUQ'

async function getAdvice(IP, APIKEY) {
	let finalUrl = url + `country,city,vpn?apiKey=${APIKEY}&ipAddress=${IP}`
	const reponse= await fetch(finalUrl);
	let data= await reponse.json();
	console.log(data);
	let {location,ip,isp,timezone}= data;
	document.getElementById('new-ip').innerHTML=ip;
	document.getElementById('new-time').innerHTML='UCT'+location.timezone;
	document.getElementById('new-location').innerHTML=location.country;
	document.getElementById('new-isp').innerHTML=isp;

 	updateMarker([location.lat, location.lng])
	console.log(location.country);
	console.log(location.timezone);
	console.log(ip);
	console.log(isp);
	console.log(location.lat);
	console.log(location.lng);
}

document.getElementById('look-for').onclick=function () {
	x=document.getElementById('IP-SEARCH').value;
	const ip=x;
	getAdvice(ip, apiKey);
}
const map = L.map('display-map', {
    'center': [0,0],
    'zoom': 1,
    'layers': [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          })
    ]
})

updateMarker = (update_marker = [-33.665, 18.993]) => {
    map.setView(update_marker, 13);
    L.marker(update_marker).addTo(map);
}
document.addEventListener('load', updateMarker())