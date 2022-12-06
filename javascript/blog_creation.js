

const post_blog=document.getElementById('post_blog')
post_blog.addEventListener('click',(event)=>{
event.preventDefault()
saveBlog()
})
 function saveBlog(){
let title=document.getElementById('title')
let description=document.getElementById('description')
let content=document.getElementById('editor')
let cover=document.getElementById('myFile')

var blogs ;
if(!localStorage.blogs){
  blogs=[]
}
else{
  blogs=JSON.parse(localStorage.blogs)
}
 
var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var yyyy = today.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const month = monthNames[today.getMonth()]


    today = month + ' ' + dd + ', ' + yyyy;


const imagelink=cover.files
console.log(imagelink)
const reader=new FileReader()
reader.readAsDataURL(imagelink[0])


reader.addEventListener("load",()=>{
  finalImage=reader.result


var single_blog={}
single_blog.Title=title.value
single_blog.Description=description.value
single_blog.Content=content.value
single_blog.datecreated=today
single_blog.Cover=finalImage;

blogs.push(single_blog)
localStorage.blogs=JSON.stringify(blogs)
})


}











