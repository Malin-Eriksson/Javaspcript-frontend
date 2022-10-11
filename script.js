const name = document.getElementById('name')
const email = document.getElementById('email')
const comments = document.getElementById('comments')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (name.value.length <= 1) {
        messages.push('Name must be at least 2 characters')
    }

    if (name.value != /^[A-Za-z]+$/) {
        messages.push('Name can only contain letters')
    } 



})



    
