const submitForm = (e) => {
    e.preventDefault ()
    validate(e)
}



// validering av längden
const checkLength = (element, ErrorMessage = "This field is required",minLength = 1) => {
    console.log(element.target.id)

    if (element.target.value.length < minLength) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ErrorMessage
    } else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
    }
}

// funktion för validering av email
const checkEmail = (element, ErrorMessage = "You must enter an valid e-mail address, eg. name@domain.com") => {

    if (!element.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ErrorMessage
} else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
    }
}

// funktion för validering av namn, ej siffror osv
const checkName = (element, ErrorMessage = "Name can only contain letters") => {
    
    if (!element.target.value.match([a-zA-ZäöüßÄÖÜ])) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ErrorMessage
    } else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
    }
}



// valideringsfunktion, här sätter vi in funktionerna ovan för att säga till vilka funktioner som ska testas på olika typer
const validate = (e) => {
    switch(e.target.type) {
        case "text":
            checkLength(e, `You must enter a ${e.target.id}`, 2),
            checkName (e, "Name can only contain letters")
            break;
        case "email":
            checkEmail(e)
            break;
        case "textarea":
            checkLength(e, `You must enter a ${e.target.id}`, 5)
            break;

        case 'keyup':
            validate(event.target)
            break;

        case 'submit':
        for(let element of event.target)
                validate(element)
            break;
    }
}







// const validate = (event) => {
//     switch(event.type) {
//         case 'keyup':
//             validateElement(event.target)
//             break;

//         case 'submit':
//             for(let element of event.target)
//                 validateElement(element)
//             break;
//     }
// }


// const onSubmit = e => {
//     event.preventDefault()
//     // validate(e)
// }




// const validate = (e) => {
//     switch(event.type) {
//         case 'keyup':
//             validateElement(event.target)
//             break;

//         case 'submit':
//             for(let element of event.target)
//                 validateElement(element)
//             break;
//     }
// }



// const submitForm = (e) => {
//     e.preventDefault ()
//     validate(e)
// }

// const validate = (e) => {
//     let target

//     switch(e.type) {
//         case "submit":
//             break;

//         case "keyup":
//             target = e.target
//             break;
//     }
// }
















// const validateElement = (element) => {
//     if (element.required) {
//         let label = document.getElementById(`${element.id}-label`).innerText
//         let error = ""

//         switch(element.type) {
//             case 'text':
//                 if (!isNullOrEmpty(element.value)) {
//                     if (!isMinimumLength(element.value, element.dataset.requiredMin)) {
//                         error = `Your ${label.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} letters`
//                     } 
//                 } else {
//                     error = `You must enter a ${label.toLocaleLowerCase()}`
//                 }

//                 break;
            
//                 case 'email':
//                     if (!isNullOrEmpty(element.value)) {
//                         if(!isEmailValid(element.value)) {
//                             error = `Your ${label.toLocaleLowerCase()} must be valid (eg. example@domain.com)`
//                         }
//                     } else {
//                         error = `You must enter an ${label.toLocaleLowerCase()}`
//                     }
                    
//                     break;
//         }

//         document.getElementById(`${element.id}-error`).innerText = error
//     }
// }









// const isNullOrEmpty = value => {
//     if (value.length === 0)
//         return true
    
//     return false
// }

// const isMinimumLength = (value, minLength = 2) => {
//     if (value.length >= minLength)
//         return true

//     return false
// }

// const isEmailValid = (email) => {
//     const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
//     if (regEx.test(email))
//         return true

//     return false
// }