const blog_cont=document.getElementById('blog_view')


getUsers()






function deleteUser(id){
    const token =localStorage.getItem('token')
    console.log(id)
    axios.delete(`http://localhost:5000/api/del-user/${id}`,{
      headers: {
      'Authorization': 'Bearer '+ token
    }
  })
    .then(response => {
    console.log(`DELETE: user is removed`, id);
    console.log(response)
    })
    .catch(error => console.error(error));
    


}

async  function  getUsers(){
  const token =localStorage.getItem('token')
  console.log(token)
  try {
    const  response  = await axios.get('https://mybrand-backend.onrender.com/api/users' ,{
      headers: {
      'Authorization': 'Bearer '+ token
    }
  })
    const Users = response.data.data
console.log("Users:",Users)
//localStorage.setItem("Users",Users)
Users.forEach(eachUser=>{
  function deletesingleuser(){
    console.log("deleting user")
  }
  blog_cont.innerHTML+=`
  <div class="content" style="display: flex;">
  
          <div class="Names" style="flex: 1;">
          ${eachUser.names || ''}

          </div>
          <div class="email" style="flex: 1;">
          ${eachUser.email || ''}
          </div>
          
          
          <div class="deleteb" style="flex: 1;">
            <button id="delete" onclick = "deleteUser('${eachUser?._id || ''}')">Delete</button>
          </div>
          
        </div>
  
  `
  
})  
}catch(err) {
    console.error(err)

}
}













