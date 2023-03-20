import {checkValidation, setAttributes, validate, patters} from "./validation.js";
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById("new-blogedit");

    let fields = [
        {
            name:'Title',
            field: 'title',
            error: 'title_error',
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
                  value: 20
              }
            ]
        },
        {
          name:'Description',
          field: 'description',
          error: 'description_error',
          conditions:[
              {
                  name:'required',
                  value: true,
              },
              {
                name:'minlength',
                value:25,
            },
            {
                name: "maxlength",
                value: 70
            }
            ]
        },
        {
          name:'Details',
          field:"editing",
          error:"editing_error",
          conditions:[
              {
                  name:'required',
                  value: true,
              },
              {
                name:'minlength',
                value:60,
            },
            {
                name: "maxlength",
                value: 1000
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


