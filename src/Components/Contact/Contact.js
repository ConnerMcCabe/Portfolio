import React from "react"
import './Contact.css'


function Contact() {
  return (
    <div className="contact">
      <div className='container'>
      <h1>Contact Me</h1>
      <p>Thanks for taking the time to reach out. How can I help you today?</p>
        <form className='contactForm'>
          <div className='formColumn'>
            <label className='label'>Name</label>
            <input className='input'></input>
          </div>
          <div className='formColumn'>
            <label className='label'>Email</label>
            <input className='input'></input>
          </div>
          <div className='formColumn'>
            <label className='label'>Message</label>
            <textarea class="longInput" cols="67" rows="7"></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;