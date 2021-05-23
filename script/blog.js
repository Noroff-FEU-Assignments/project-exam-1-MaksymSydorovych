const url = "https://blog.maksym.one/wp-json/wp/v2/media/?per_page=13&_embed";
const blog = document.querySelector(".blog");
const viewBtn = document.querySelector("#v-btn");
const allBlogs = document.querySelector(".all-blogs");
viewBtn.style.display = "none";
async function apiCall(){
	try{
		const response = await fetch(url);
		const result = await response.json();
		viewBtn.style.display = "block";
		console.log(result);
		blog.innerHTML = "";
		let i = 0;
		console.log(result);
		for (i; i < 9; i++){
			blog.innerHTML += `<div class="recent-blog">
			<h3>${result[i].title.rendered}</h3>
			<a href="post.html?id=${result[i].id}"><img id="blog-img" src="${result[i].source_url}" alt="${result[i].slug} + picture"></a>
			<div class="date"><p>${result[i].date}</p></div>
			<div class="read"><a href="post.html?id=${result[i].id}"><p>Read more</p></a></div>
			</div>
			`;
			
			
		}
	}catch (error){
		blog.innerHTML = `Error`;
	}
}
viewBtn.addEventListener("click", () => {
	async function apiCall() {
	  try {
		 const response = await fetch(url);
		 const result = await response.json();
		 console.log(result);
			let i = 0;
		
		 for (i; i < result.length; i++) {
			viewBtn.style.display = "none";
			blog.style.display = "none";
			allBlogs.innerHTML += `<div class="recent-blog">
			<h3>${result[i].title.rendered}</h3>
			<img id="blog-img" src="${result[i].source_url}" alt="${result[i].alt_text}">
			<div class="date"><p>${result[i].date}</p></div>
			<div class="read"><a href="post.html?id=${result[i].id}"><p>Read more</p></a></div>
			</div>
			`;
		 }
	  } catch (error) {
		
		 console.log(error);
	  }
	}
	apiCall();
 });
 

apiCall();
