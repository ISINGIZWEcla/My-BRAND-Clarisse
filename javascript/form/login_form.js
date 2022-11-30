import {checkValidation, setAttributes, validate, patters} from "./validation.js";
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById("login_form");

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
            name:'password',
            field:"password_field",
            error:"password_error",
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'pattern',
                    value: patters.password,
                    message:"Password should contains at least " +
                        "1 lowercase letter, 1 uppercase letter, 1 special character" +
                        " and 8 characters "
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