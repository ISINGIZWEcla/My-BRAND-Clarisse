const comment_container = document.getElementById('comment_container')
const commment_list = document.getElementById('commment_list')


const blog_image = document.getElementById('singleBlog_img')
const blog_heading = document.getElementById('singleBlog_title')
const publishedDate = document.getElementById('published-date')
const singleContent = document.getElementById('singleBlog_content')

const nbrLikes=document.getElementById('liking')

const Names=document.getElementById('userName')
const message=document.getElementById('commentTxt')

const user=JSON.parse(localStorage.getItem('User'))
const userId=user.id

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let id = urlParams.get("id")

//console.log("id",userId)

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
   console.log(response)
   single_blog=response.data.data
   blogComments=response.data.comments
   blogLikes=response.data.likes
   
   //console.log(blogComments)

   blogComments.forEach(eachComment => {
      displayComment(eachComment)
   });
   blog_heading.innerHTML=single_blog.title
   publishedDate.innerHTML=single_blog.created_on
   singleContent.innerHTML=single_blog.content
   blog_image.src = single_blog.image

   
   nbrLikes.innerHTML=blogLikes.count 
  //console.log(nbrLikes)

   })
   .catch(error => console.error(error));
   


}








// const BlogTitle=localStorage.getItem("BlogTitle")
// const blogs=JSON.parse(localStorage.blogs)
// const blogInfo=blogs.find((event)=>{
//    return event.Title === BlogTitle
// })







// if(blogInfo.comments){
//    blogInfo.comments.forEach(each => displayComment(each))
// }
const myForm=document.getElementById('comment-form')
const post_comment=document.getElementById('add_comment')
post_comment.addEventListener('click',(event)=>{
event.preventDefault()
savecomment()
//myForm.reset();
})

function savecomment(){

   const cname=document.getElementById('names_field').value
   const cemail=document.getElementById('email_field').value
   const comment_txt=document.getElementById('comment_field').value
   const myForm=document.getElementById('comment-form')

   const blogId=id

   

const token =localStorage.getItem('token')
console.log(token)
if(!localStorage.getItem("token")){
   window.location.href = "login.html";
 }
 const formData = new FormData() 
 formData.append('names' ,cname)
 formData.append('email' ,cemail)
 formData.append('comment' ,comment_txt)
 formData.append('blogId' ,blogId)
   axios.post(`https://mybrand-backend.onrender.com/api/comment`,
      formData,{
     headers: {
     'Authorization': 'Bearer '+ token
   }
})
   .then(response => {
   console.log(response)
   })
   


}

function displayComment (each ){
   let newComment = comment_container.cloneNode(true)
   newComment.id = each.names+"unique"

   newComment.querySelector('#userName').innerText = each.names || null
   newComment.querySelector('#commentTxt').innerText = each.comment || null

   commment_list.appendChild(newComment)
   

}


const get_likes=document.getElementById('likes-nbr')
get_likes.addEventListener('click',(event)=>{

   const token =localStorage.getItem('token')
console.log(token)
if(!localStorage.getItem("token")){
   window.location.href = "login.html";
 }
 const formData = new FormData() 
 formData.append('userId' ,userId)
 formData.append('blogId' ,id)
   axios.patch(`https://mybrand-backend.onrender.com/api/like`,
      formData,{
     headers: {
     'Authorization': 'Bearer '+ token
   }
})
   .then(response => {
   console.log(response)
   })

})


// function liked(){
//    if(blogInfo.likes){
//       blogInfo.likes = blogInfo.likes +1
//    }else {
//       blogInfo.likes = 1
//    }
// localStorage.setItem('blogs', JSON.stringify(blogs))

// setNumberOfLikes(blogInfo.likes)
// }

// function setNumberOfLikes(n) {
//    const mylikes=document.getElementById('liking')
//    mylikes.innerText=n
// }