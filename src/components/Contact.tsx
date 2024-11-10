import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import '../app/styles/contact.css';
const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid md:grid-cols-2'>
        <div className='contact-space'>
            <h2 className='contact-heading' >Get in touch</h2>
            <p className='contact-text' >
                Drop me a line,give me a call, or send me a message by submitting the form.
            </p>
            <div className='contact-flex'>
            <MdMailOutline size={30} />Hajraali730@gmail.com
            </div>
            <div className='contact-flex'>
            <IoCallOutline size={30} /> (03182411189)
            </div>
        </div>
        <div className='contact-space'>
          <div className='form'>
            <label htmlFor="name">Name</label>
            <input type="text" 
            className='input-field'
            id='name'/>
          </div>
          <div className='form'>
            <label htmlFor="email">Email</label>
            <input type="text"  
            className='input-field'
            id='email'/>
          </div>
          <div className='form'>
            <label htmlFor="message">Message</label>
            <textarea 
            className='input-field'
            id='message'rows={10}>
              </textarea>
          </div>
          <button className='button'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
