const blog_cont=document.getElementById('blog_view')

const blog_list=JSON.parse(localStorage.blogs)
console.log(blog_list)




for(let i=0;i<blog_list.length;i++){
  
  blog_cont.innerHTML+=`
  <div class="content">
          <div class="article">
          ${blog_list[i].Title}

          </div>
          <div class="pub-date">
          ${blog_list[i].datecreated}
          </div>
          <div class="views">
            <p>0 <i class="fa fa-eye" aria-hidden="true"></i></p>
            
            
          </div>
          <div class="likes">
            <p>${blog_list[i].likes} <i class="fa fa-thumbs-up" aria-hidden="true"></i></p>
            
          </div>
          <div class="comments">
            <p>${blog_list[i].comments.length} <i class="fa fa-comment" aria-hidden="true"></i></p>
          </div>
          <div class="deleteb">
            <button id="delete" onclick = "deleteBlog('${blog_list[i].Title}')">Delete</button>
          </div>
          <div class="editb">
            <button id="editb" onclick = "editSingleBlog('${blog_list[i].Title}')">Edit</button>
          </div>
        </div>
  
  `
}

function editSingleBlog(otherTitle){
  localStorage.setItem("otherBlogTitle",otherTitle)
  history.go(0)
  location="../editblog.html"

}


function deleteBlog(title){
  localStorage.setItem("toDeleteBlogTitle",title)
  const addedTitle = localStorage.getItem("toDeleteBlogTitle")
  const single_blog=JSON.parse(localStorage.blogs)
  const blogInfo=single_blog.find((event)=>{
   return event.Title == addedTitle
})

localStorage.removeItem(blogInfo)


}




// document.getElementById("editb").onclick = function() {
//   editBlog()
// };

// function editBlog(){

//   const BlogTitle=localStorage.getItem("BlogTitle")
// const single_blog=JSON.parse(localStorage.blogs)
// const blogInfo=single_blog.find((event)=>{
//    return event.Title == BlogTitle
// })





// const blog_image = document.getElementById('myFile')
// const blog_heading = document.getElementById('title')
// const singledescription = document.getElementById('description')
// const singleContent = document.getElementById('editor')

// blog_image= blogInfo.Cover
// console.log(blog_image)

// blog_heading.innerHTML=blogInfo.Title
// singledescription.innerHTML=blogInfo.Description
// singleContent.innerHTML=blogInfo.Content



// }










