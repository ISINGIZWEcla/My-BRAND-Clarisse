
const BlogTitle=localStorage.getItem("BlogTitle")
const blogs=JSON.parse(localStorage.blogs)
const blogInfo=blogs.find((event)=>{
   return event.Title === BlogTitle
})



const comment_container = document.getElementById('comment_container')
const commment_list = document.getElementById('commment_list')


const blog_image = document.getElementById('singleBlog_img')
const blog_heading = document.getElementById('singleBlog_title')
const publishedDate = document.getElementById('published-date')
const singleContent = document.getElementById('singleBlog_content')

blog_image.src = blogInfo.Cover
console.log(blog_image)

blog_heading.innerHTML=blogInfo.Title
publishedDate.innerHTML=blogInfo.datecreated
singleContent.innerHTML=blogInfo.Content

if(blogInfo.comments){
   blogInfo.comments.forEach(each => displayComment(each))
}

const post_comment=document.getElementById('add_comment')
post_comment.addEventListener('click',(event)=>{
event.preventDefault()
savecomment()
})

function savecomment(){

   const cname=document.getElementById('names_field')
   const cemail=document.getElementById('email_field')
   const comment_txt=document.getElementById('comment_field')


var single_comment={}
single_comment.Names=cname.value
single_comment.Emai=cemail.value
single_comment.CommentTxt=comment_txt.value

if(blogInfo.comments){
   blogInfo.comments = [...blogInfo.comments, single_comment]
}else {
   blogInfo.comments = [single_comment]
}
localStorage.setItem('blogs', JSON.stringify(blogs))
displayComment(single_comment)

}

function displayComment (each ){
   let newComment = comment_container.cloneNode(true)
   newComment.id = each.Names+"unique"

   newComment.querySelector('#userName').innerText = each.Names || null
   newComment.querySelector('#commentTxt').innerText = each.CommentTxt || null

   commment_list.appendChild(newComment)

}


const get_likes=document.getElementById('likes-nbr')
get_likes.addEventListener('click',(event)=>{

   liked()

})


function liked(){
   if(blogInfo.likes){
      blogInfo.likes = blogInfo.likes +1
   }else {
      blogInfo.likes = 1
   }
localStorage.setItem('blogs', JSON.stringify(blogs))

setNumberOfLikes(blogInfo.likes)
}

function setNumberOfLikes(n) {
   const mylikes=document.getElementById('liking')
   mylikes.innerText=n
}