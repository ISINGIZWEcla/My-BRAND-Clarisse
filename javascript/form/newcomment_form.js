import {checkValidation, setAttributes, validate, patters} from "./validation.js";
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById("comment-form");

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
          name:'comment',
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

        }
    });









})


