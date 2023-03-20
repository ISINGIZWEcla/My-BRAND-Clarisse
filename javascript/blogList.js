const blog_cont=document.getElementById('blog_view')


getBlogs()



function editSingleBlog(id){
  localStorage.setItem("otherBlogTitle",id)
  history.go(0)
  location=`../editblog.html?id=${id}`

}


function deleteBlog(id){
  const token =localStorage.getItem('token')
  console.log(id)
  axios.delete(`https://mybrand-backend.onrender.com/api/del-blog/${id}`,{
    headers: {
    'Authorization': 'Bearer '+ token
  }
})
  .then(response => {
  console.log(`DELETE: blog is removed`, id);
  console.log(response)
  location="../dashboard .html"
  })
  .catch(error => console.error(error));
  


}





async  function  getBlogs(){
  try {
    const  response  = await axios.get('https://mybrand-backend.onrender.com/api/get-blogs')
    const data = response.data.data.blogs
console.log("response:",data)
data.forEach(eachBlog=>{
  blog_cont.innerHTML+=`
  <div class="content" style="display: flex;">
          <div class="article" style="flex: 1.5;">
          ${eachBlog.title || ''}

          </div>
          <div class="pub-date" style="flex: 1;">
          ${eachBlog?.created_on || ''}
          </div>
          
          <div class="likes" style="flex: 1;">
            <p>${eachBlog?.likes|| 0} <i class="fa fa-thumbs-up" aria-hidden="true"></i></p>
            
          </div>
          <div class="comments" style="flex: 1;">
            <p>${eachBlog?.comments?.length || 0} <i class="fa fa-comment" aria-hidden="true"></i></p>
          </div>
          <div class="deleteb" style="flex: 1;">
            <button id="delete" onclick = "deleteBlog('${eachBlog?._id || ''}')">Delete</button>
          </div>
          <div class="editb" style="flex: 1;">
            <button id="editb" onclick = "editSingleBlog('${eachBlog?._id || ''}')">Edit</button>
          </div>
        </div>
  
  `
  
})  
}catch(err) {
    console.error(err)

}
}













