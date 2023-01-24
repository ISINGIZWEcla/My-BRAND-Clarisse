const blog_cont=document.getElementById('blog_view')


getMessages()

async  function  getMessages(){
  try {
    const token =localStorage.getItem('token')
  console.log(token)

    const  response  = await axios.get('https://mybrand-backend.onrender.com/api/messages' ,{
      headers: {
      'Authorization': 'Bearer '+ token
    }
  })
    const data = response.data.messages
console.log("response:",data)
data.forEach(eachBlog=>{
  blog_cont.innerHTML+=`
  <div class="content" style="display: flex;">
          <div class="article" style="flex: 1.5;">
          ${eachBlog.names || ''}

          </div>
          <div class="pub-date" style="flex: 1;">
          ${eachBlog?.email || ''}
          </div>
          
          <div class="pub-date" style="flex: 1;">
          ${eachBlog?.message || ''}
          </div>
          
        </div>
  
  `
  
})  
}catch(err) {
    console.error(err)

}
}


// async  function  getMessages(){
//   const token =localStorage.getItem('token')
//   console.log(token)
//   try {
//     const  response  = await axios.get('http://localhost:5000/api/messages' ,{
//       headers: {
//       'Authorization': 'Bearer '+ token
//     }
//   })
//     const data = response.data.data
// console.log("data:",data)
// //localStorage.setItem("Users",Users)
// data.forEach(eachUser=>{
//   blog_cont.innerHTML+=`
//   <div class="content" style="display: flex;">
  
//           <div class="Names" style="flex: 1;">
//           ${eachUser.names || ''}

//           </div>
//           <div class="email" style="flex: 1;">
//           ${eachUser.email || ''}
//           </div>
          
          
//           <div class="deleteb" style="flex: 1;">
//           ${eachUser.message || ''}
//           </div>
          
//         </div>
  
//   `
  
// })  
// }catch(err) {
//     console.error(err)

// }
// }
