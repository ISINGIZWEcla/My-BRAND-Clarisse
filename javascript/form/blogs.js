const blog_cont=document.getElementById('articles-container')

getBlogs();

// function single_blog(id){
//   location="single-blog.html"
  
  

//}

async  function  getBlogs(){
  try {
    const  response  = await axios.get('https://mybrand-backend.onrender.com/api/get-blogs')
    const data = response.data.data.blogs
console.log("response:",data)
data.forEach(eachBlog=>{
  blog_cont.innerHTML+=`
  <div class="one-blog">
          <img src="${eachBlog.image}" alt="">
          <div class="publishing-details">
            <div class="published-date">
              ${eachBlog.created_on
              }
            </div>
            <div class="coment-likes">
            <div class="author">
              Admin
            </div>
            <div class="comments">${eachBlog.comments?.length || 0}<i class="fa fa-comment" aria-hidden="true"></i></div>
            <div class="likes">
            ${eachBlog?.likes || 0} <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="headings">
          <a href="#" onclick="singleBlog_view('${eachBlog._id}')" >${eachBlog.title}</a>
        </div>
        <div class="blog-description">
                ${eachBlog.description
                }                                             
        </div>
        </div>

  `
  
})  
}catch(err) {
    console.error(err)

}
}



// async function fetchBlogs() {
//   try {
//     const response = await fetch('http://localhost:5000/api/get-blogs', {
//       headers:{
//         'Content-Type':'application/json',
//         'Authorization': 'Bearer '+localStorage.getItem('accesstoken')
//       }
//     })
//     console.log(response)
//   }catch(err){}
// }

// const eachBlog=JSON.parse(localStorage.blogs)
// console.log(eachBlog)
// for(let i=0;i<eachBlog.length;i++){
  
//   blog_cont.innerHTML+=`
//   <div class="one-blog">
//           <img src="${eachBlog.Cover}" alt="">
//           <div class="publishing-details">
//             <div class="published-date">
//               ${eachBlog.datecreated
//               }
//             </div>
//             <div class="coment-likes">
//             <div class="author">
//               Admin
//             </div>
//             <div class="comments">${eachBlog.comments?.length || 0}<i class="fa fa-comment" aria-hidden="true"></i></div>
//             <div class="likes">
//             ${eachBlog?.likes || 0} <i class="fa fa-thumbs-up" aria-hidden="true"></i>
//             </div>
//           </div>
//         </div>
//         <div class="headings">
//           <a href="#" onclick="singleBlog_view('${eachBlog.Title}')" >${eachBlog.Title}</a>
//         </div>
//         <div class="blog-description">
//                 ${eachBlog.Description
//                 }                                             
//         </div>
//         </div>
  
//   `
// }

function singleBlog_view(id){
  //localStorage.setItem("BlogTitle",title)
  history.go(0)
  location=`single-blog.html?id=${id}`
}




