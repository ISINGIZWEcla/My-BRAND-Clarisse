

const post_blog=document.getElementById('new_blog_form')
post_blog.addEventListener('submit',(event)=>{
event.preventDefault()
saveBlog()

})
async function saveBlog(){
let title=document.getElementById('title')
let description=document.getElementById('description')
let content=document.getElementById('editor')
let cover=document.getElementById('myFile')

const token =localStorage.getItem('token')
  console.log(token)
  const imagelink=cover.files[0]
  console.log("Hello",imagelink)
  //const reader=new FileReader()

  
      //finalImage=reader.result
    
    Title=title.value
    Description=description.value
    Content=content.value
    Cover=imagelink;
    
  const formData = new FormData() 
    formData.append('title' ,Title)
    formData.append('description' ,Description)
    formData.append('content' ,Content)
    formData.append('image' ,Cover)
axios.post("https://mybrand-backend.onrender.com/api/add-blog", formData,
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











