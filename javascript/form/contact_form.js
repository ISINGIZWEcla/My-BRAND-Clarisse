import {checkValidation, setAttributes, validate, patters} from "./validation.js";
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById("contact-form");
    let activeUser = localStorage.getItem('activeUser')

    let fields = [
        {
            name:'email',
            field: 'email_field',
            error: 'email_error',
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'pattern',
                    value: patters.email
                }
            ]
        },
        {
            name:'Names',
            field:"names_field",
            error:"names_error",
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                
            ]
        },
        {
          name:'Message',
          field:"comment_field",
          error:"comment_error",
          conditions:[
              {
                  name:'required',
                  value: true,
              },
              {
                name:'minlength',
                value:5,
            },
            {
                name: "maxlength",
                value: 70
            }
              
          ]
      },
        
    ]

    fields.forEach(eachField => {
        setAttributes(eachField)
        validate(eachField)

    })
    form.addEventListener("submit", (event) => {
        // if the email field is valid, we let the form submit
        let formData = new FormData(event.target)
        let isFormValid = checkValidation(fields)
        if(!isFormValid){
        event.preventDefault();
        }else {
            event.preventDefault();
            const email= document.getElementById("email_field").value; 
            const names = document.getElementById("names_field").value;
            const message= document.getElementById("comment_field").value;

              
              axios.post("https://mybrand-backend.onrender.com/api/message", {
      names: names,
      email: email,
      message:message
    })
    .then((response) => {
      console.log(response);
      Swal.fire(
        'Your message is sent',
        
        'success'
      )
      form.reset();
      
            });



        }
    });








    // if(activeUser){
    //     let login_link = document.getElementById('login_link')
    //     login_link.innerText = 'logout'
    // }


})


