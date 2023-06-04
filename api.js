async function getdata(){
const url = 'https://airvisual1.p.rapidapi.com/v2/auto-complete?q=Vietnam&x-user-lang=en-US&x-user-timezone=Asia%2FSingapore&x-aqi-index=us&x-units-pressure=mbar&x-units-distance=kilometer&x-units-temperature=celsius';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '433938339bmsh16fe413e768245dp11e277jsnf0d9ff39655f',
		'X-RapidAPI-Host': 'airvisual1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	let getdata = JSON.parse(result)
	console.log(getdata)
	console.log(getdata.data.news[1].author)
	// document.getElementById("tacgia").textContent = getdata.data.news[1].author
	// document.getElementById("tieude").textContent = getdata.data.news[1].title
	// console.log(getdata.data.news[1].url)
	// let link = document.getElementById("url")
	// link.href = getdata.data.news[1].url
	// let img = document.getElementById("img")
	// img.src = getdata.data.news[1].thumbnail
	// let link = document.getElementById("link");
	// let img = document.getElementById("anhtt"); 
	// let tieude = document.getElementById("title");
	// let tacgia = document.getElementById("author");
	let link = document.getElementById("link");
	link.href = getdata.data.news[1].url;
	let img = document.getElementById("anhtt");
	img.src = getdata.data.news[1].thumbnail
	document.getElementById("title").textContent = getdata.data.news[1].title;
	document.getElementById("author").textContent = getdata.data.news[1].author;
	// 2
	let link0 = document.getElementById("link0");
	link0.href = getdata.data.news[0].url;
	let img0 = document.getElementById("anhtt0");
	img0.src = getdata.data.news[0].thumbnail
	document.getElementById("title0").textContent = getdata.data.news[0].title;
	document.getElementById("author0").textContent = getdata.data.news[0].author;
	// 3
	let link2 = document.getElementById("link2");
	link2.href = getdata.data.news[2].url;
	let img2 = document.getElementById("anhtt2");
	img2.src = getdata.data.news[2].thumbnail
	document.getElementById("title2").textContent = getdata.data.news[2].title;
	document.getElementById("author2").textContent = getdata.data.news[2].author;
	// 4
	let link3 = document.getElementById("link3");
	link3.href = getdata.data.news[3].url;
	let img3 = document.getElementById("anhtt3");
	img3.src = getdata.data.news[3].thumbnail
	document.getElementById("title3").textContent = getdata.data.news[3].title;
	document.getElementById("author3").textContent = getdata.data.news[3].author;
	// 5
	let link4 = document.getElementById("link4");
	link4.href = getdata.data.news[4].url;
	let img4 = document.getElementById("anhtt4");
	img4.src = getdata.data.news[4].thumbnail
	document.getElementById("title4").textContent = getdata.data.news[4].title;
	document.getElementById("author4").textContent = getdata.data.news[4].author;
	// 6
	let link5 = document.getElementById("link5");
	link5.href = getdata.data.news[5].url;
	let img5 = document.getElementById("anhtt5");
	img5.src = getdata.data.news[5].thumbnail
	document.getElementById("title5").textContent = getdata.data.news[5].title;
	document.getElementById("author5").textContent = getdata.data.news[5].author;
} catch (error) { 
	console.error(error);
}}
getdata()