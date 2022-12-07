const blog_cont=document.getElementById('blog_view')

const blog_list=JSON.parse(localStorage.blogs)
console.log(blog_list)



// this function will construct our dom with the blogs content 
function fetchBlogs() {

for(let i=0;i<blog_list?.length;i++){
  
  blog_cont.innerHTML+=`
  <div class="content">
          <div class="article">
          ${blog_list[i].Title || ''}

          </div>
          <div class="pub-date">
          ${blog_list[i]?.datecreated || ''}
          </div>
          <div class="views">
            <p>0 <i class="fa fa-eye" aria-hidden="true"></i></p>
            
            
          </div>
          <div class="likes">
            <p>${blog_list[i]?.likes|| 0} <i class="fa fa-thumbs-up" aria-hidden="true"></i></p>
            
          </div>
          <div class="comments">
            <p>${blog_list[i]?.comments?.length || 0} <i class="fa fa-comment" aria-hidden="true"></i></p>
          </div>
          <div class="deleteb">
            <button id="delete" onclick = "deleteBlog('${blog_list[i]?.Title || ''}')">Delete</button>
          </div>
          <div class="editb">
            <button id="editb" onclick = "editSingleBlog('${blog_list[i]?.Title || ''}')">Edit</button>
          </div>
        </div>
  
  `
  }
}
fetchBlogs()


function editSingleBlog(otherTitle){
  localStorage.setItem("otherBlogTitle",otherTitle)
  history.go(0)
  location="../editblog.html"

}


function deleteBlog(title){
let blogs = JSON.parse(localStorage.getItem('blogs'))

if (blogs.length > 0) {
  const filtered = blogs.filter(blog => blog.Title !== title)
  localStorage.setItem('blogs', JSON.stringify(filtered))

}


// blogs = blogs?.filter(each => each.title === title)
// localStorage.setItem('blogs', blogs)

// window.localStorage.reload()
}















