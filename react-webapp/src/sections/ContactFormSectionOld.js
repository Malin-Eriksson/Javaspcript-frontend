// import React, { useState } from 'react'

// const ContactFormSection = () => {
//     const [contactForm,setContactForm] = useState({name: '', email: '', comment: ''})
//     const [formErrors, setFormErrors] = useState({})
//     const [submitted, setSubmitted] = useState(false)

//     const validate = (values) => {
//         const errors = {}
//         const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//         if(!values.name) 
//             errors.name = "You must enter a name"
        
//         if(!values.email) 
//             errors.email = "You must enter an email address"
//         else if (!regex_email.test(values.email))
//             errors.email = "You must enter an valid email address (eg. name@domain.com)"


//         if(!values.comment) 
//             errors.comment = "You must enter a comment"
//         else if(values.comment.length < 5)
//             errors.comment = "Your comment must be longer than 5 characters"

//         if(Object.keys(errors).length === 0)
//             setSubmitted(true)
//         else
//             setSubmitted(false)

//         return errors;
//     }

//     const handleChange = (e) => {
//         const {id, value} = e.target
//         setContactForm({...contactForm, [id]: value})
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault ()
//         setFormErrors(validate(contactForm))
//     }


//   return (
//     <section className='contact-form'>
//         <div className='container'>    
//             {
//                 submitted ? (<div className='d-flex justify-content-center align-items-center'>
//                         <h2>Thank you for your comment!</h2>
//                         <p>We will get back to you as soon as possible.</p>
//                     </div>)
//                     :
//                     (
//                         <>
//                         <h2>Come in Contact with Us</h2>
//                         <form onSubmit={handleSubmit} noValidate>
//                             <div>
//                                 <input id='name' type="text" className='error' placeholder="Your Name" value={contactForm.name} onChange={handleChange}/>
//                                 <div className='errorMessage'>{formErrors.name}</div>
//                             </div>
//                             <div>
//                                 <input id='email' type="email" className='error'placeholder="Your Mail" value={contactForm.email} onChange={handleChange}/>
//                                 <div className='errorMessage'>{formErrors.email}</div>
//                             </div>
//                             <div className='textarea'>
//                                 <textarea id='comment' className='error' placeholder='Comments' value={contactForm.comment} onChange={handleChange}></textarea>
//                                 <div className='errorMessage'>{formErrors.comment}</div>
//                             </div>
//                             <div className='formBtn'>
//                                 <button type='submit' className='btn-theme'>Post Comments</button>
//                             </div>
//                         </form>
//                         </>
//                     )
//             }
//         </div>
//     </section>
//   )
// }

// export default ContactFormSection