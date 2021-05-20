const post = document.querySelector(".post");
const postimg = document.querySelector(".postimg");
const title = document.querySelector("title");
const postText = document.querySelector(".post-text")
const modalItem = document.querySelector("#modal-item")
const postContainer = document.querySelector(".post-container")
const footer = document.querySelector("footer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const urlTwo = "https://blog.maksym.one/wp-json/wp/v2/posts/" + id-1;
const url = "https://blog.maksym.one/wp-json/wp/v2/media/" + id;
async function	getPost(){
	try{
	const response = await fetch(url);
	const result = await response.json();
	console.log(result);
	
	const img = result.source_url;
	title.innerHTML = document.title + `${result.title.rendered}`;
	postimg.innerHTML = `<img src = "${img}" onclick="onClick(this)">`
	}
	catch(error){
		console.log(error)
	}
}


getPost();
idCont = id - 1;
const urlCont = "https://blog.maksym.one/wp-json/wp/v2/posts/" + idCont;
async function getCont(){
	try{
		const response = await fetch(urlCont);
		const detail = await response.json();
		console.log(detail);
		
		post.innerHTML = `<div class="post-two"><h2>${detail.title.rendered}</h2><p>${detail.content.rendered}</p></div>`;
	
	}catch(error){
		console.log("Can't display array")
	}
}
getCont();

function onClick(element) {
	document.getElementById("image-item").src = element.src;
	document.getElementById("modal-item").style.display = "block";
 }
postimg.addEventListener("click", () => {
	postimg.style.display = "none";
	footer.style.display = "none";
	
 });
 modalItem.addEventListener("click", () => {
	 postimg.style.display = "block";
	 footer.style.display = "block";
 })
 