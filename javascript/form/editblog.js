const otherBlogTitle=localStorage.getItem("otherBlogTitle")
const single_blog=JSON.parse(localStorage.blogs)
const blogInfo=single_blog.find((event)=>{
   return event.Title == otherBlogTitle
})

const otherTitle  = document.getElementById("otherTitle");
const otherDescription  = document.getElementById("otherDescription");
const otherEditor  = document.getElementById("otherEditor");
const othermyFile  = document.getElementById("othermyFile");
const editBlog  = document.getElementById("editBlog");
const uploadedImage  = document.getElementById("uploadedImage");

otherTitle.value = blogInfo.Title
otherDescription.value = blogInfo.Description
otherEditor.value = blogInfo.Content
uploadedImage.src = blogInfo.Cover


editBlog.addEventListener("click", (event)=>{
  event.preventDefault()

  editBlogContents()
})

function editBlogContents(){
  blogInfo.Title = otherTitle.value || blogInfo.Title
  blogInfo.Description = otherDescription.value || blogInfo.Description
  blogInfo.Content = otherEditor.value || blogInfo.Content 

  localStorage.blogs = JSON.stringify(blogInfo);
}


