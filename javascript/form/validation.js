export function validate(field_info){
  let field =get(field_info.field)
  let error = get(field_info.error)
  field.addEventListener('input', (event) => {
      if(field.validity.valid){
          error.textContent = ""
          error.classList.remove("active")
      }else {
          showError(field_info)
      }
  })
  field.addEventListener('focusout', (event) => {
      error.classList.add("hide_error")
  })
  field.addEventListener('focusin', (event) => {
      error.classList.remove("hide_error")
  })


}
export function showError(field_info) {
  let field =get(field_info.field)
  let error = get(field_info.error)
  field_info.conditions?.forEach(each => {
      let typeDisplayName = "elements"
      if(field.type === "tel"){
          typeDisplayName = "digits"
      }else if(field.type === "text"){
          typeDisplayName = 'characters'
      }
      if(each.name === 'required'){
          if (field.validity.valueMissing) {
              // If the field is empty,
              // display the following error message.
              error.textContent =each.message || `${field_info.name} required.`;
          }else if (field.validity.typeMismatch) {
              // If the field doesn't contain an email address,
              // display the following error message.
              error.textContent = each.message || `please enter valid ${field_info.name}`;
          }
      } else if(each.name === 'minlength'){
          if (field.validity.tooShort) {
              // If the data is too short,
              // display the following error message.
              error.textContent = each.message || `${field_info.name} should be at least ${field.minLength} ${typeDisplayName}; you entered ${field.value.length}.`;
          }
      } else if(each.name === "pattern"){
          if(field.validity.patternMismatch){
              error.textContent = each.message || `Enter valid ${field_info.name} `
          }
      }else if(each.name === 'maxlength'){
          if (field.validity.tooLong) {
              // If the data is too short,
              // display the following error message.
              error.textContent = each.message || `${field_info.name} should be at most ${field.minLength} ${typeDisplayName}; you entered ${field.value.length}.`;
          }
      }
  })

  // Set the styling appropriately
  error.classList.add("active");
}
export function setAttributes(field_info){
  let field = get(field_info.field)
  field_info.conditions?.forEach(each => {
      field.setAttribute(each.name, each.value)
  })
}
export function get(id, from=document){
  return from.querySelector('#'+id)
}
export function checkValidation(fields){
  for(let i = 0; i < fields.length; i++){
      let field =get(fields[i].field)
      if(!field.validity.valid){
          showError(fields[i])
          return false
      }
  }
  return true
}
export const patters = {
  email:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
  tel:'^(\\+\\d{1,3}[\\s.-]?)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{3,4}$',
  password:'^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
}