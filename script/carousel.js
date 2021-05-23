const url = "https://blog.maksym.one/wp-json/wp/v2/media";
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const blogpostsContainer = document.querySelector("#post");
let page = 1;
let pagenumber = 1;
const pageWidth = document.documentElement.scrollWidth;



function checkMediaQuery() {
  if (window.innerWidth > 870) {
    page = 2;
  }

  if (window.innerWidth > 1380) {
    page = 3;
  }
}

checkMediaQuery();

window.addEventListener(`resize`, checkMediaQuery);

let resizeReload;
window.addEventListener("resize", function () {
  clearTimeout(resizeReload);
  resizeReload = setTimeout(function () {
    window.location.reload();
  }, 1000);
});







function nextPage(){
	pagenumber++;
	if (pagenumber === 1){
		pagenumber = 1;	
	}
	getBlogPosts();
}
function previousPage(){
	pagenumber--;
	if (pagenumber === 0){
		pagenumber = 3;
	}
	getBlogPosts();
}
previous.addEventListener("click", previousPage);
next.addEventListener("click", nextPage);
async function getBlogPosts(){
	try{
		let response = await fetch(url + `?page=${pagenumber}&per_page=${page}`);
		let blogs = await response.json();
		
		blogpostsContainer.innerHTML = "";
		let i = 0;
		
		for (i; i < blogs.length; i++){
			blogpostsContainer.innerHTML += `<div class="latest-post"><div class="single-post"><a href="post.html?id=${blogs[i].id}">
			
			<h3 class="title">${blogs[i].title.rendered}</h3>
			<img id="carousel-img" src="${blogs[i].source_url}" alt="${blogs[i].slug} + picture">
			</div>
			
			<div></a>
			`;
			
		}
	}catch (error) {
		blogpostsContainer.innerHTML = `<p class="error"> and error occured<p>`;}

}

getBlogPosts();
