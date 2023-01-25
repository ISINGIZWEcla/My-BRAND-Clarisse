const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let id = urlParams.get("id")
getBlog(id)

function getBlog(id){
  const token =localStorage.getItem('token')
  if(!localStorage.getItem("token")){
     window.location.href = "login.html";
   }
  axios.get(`https://mybrand-backend.onrender.com/api/get-blog/${id}`,{
    headers: {
    'Authorization': 'Bearer '+ token
  }
})
  .then(response => {
const {data:{data}} = response
fillBlog(data)

  })
  .catch(error => console.error(error));
  


}

const otherBlogTitle=localStorage.getItem("otherBlogTitle")
const allBlogs=JSON.parse(localStorage.blogs)
const blogInfo=allBlogs.find((event)=>{
   return event.Title == otherBlogTitle
})

const otherTitle  = document.getElementById("otherTitle");
const otherDescription  = document.getElementById("otherDescription");
const otherEditor  = document.getElementById("otherEditor");
const othermyFile  = document.getElementById("othermyFile");
const editBlog  = document.getElementById("editBlog");
const uploadedImage  = document.getElementById("uploadedImage");
const previousUrl = document.getElementById("previousUrl")

function fillBlog(blog){
  console.log(blog)
  otherTitle.value = blog.title
otherDescription.value = blog.description
otherEditor.value = blog.content
previousUrl.textContent = blog.image
}



editBlog.addEventListener("click", (event)=>{
  event.preventDefault()

  editBlogContents(id)
})

function editBlogContents(id){
  Title = otherTitle.value 
  Description = otherDescription.value 
  Content = otherEditor.value 
  cover=othermyFile 

  const token =localStorage.getItem('token')
if(!localStorage.getItem("token")){
  window.location.href = "login.html";
}
  console.log(token)
  const imagelink=cover.files[0] || previousUrl
  console.log("Hello",imagelink)
  
    
    
  const formData = new FormData() 
    formData.append('title' ,Title)
    formData.append('description' ,Description)
    formData.append('content' ,Content)
    formData.append('image' ,imagelink)
    //console.log("id here",id)
axios.patch(`https://mybrand-backend.onrender.com/api/blog/${id}`, formData,
    {
      headers: {
      'Authorization': 'Bearer '+ token
    }
    }
)
.then((response) => {
  
  console.log("Responze:",response);
  location="../dashboard .html"
 
        })
  .catch((err)=>{
    console.log(err)

        })
}


