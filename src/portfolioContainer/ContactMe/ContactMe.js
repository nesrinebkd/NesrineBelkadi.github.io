import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './ContactMe.css'
function ContactMe() {
    const [data,setData]=useState({name:'',email:'',phone:'',message:''})
    const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data,[name]:[value]})
    }
    const handleSubmit=(e)=>{
 e.preventDefault();
 alert(data)
 emailjs.sendForm('service_z6lpnez','template_zp9bw0h',e.target,'h-x6OKdAXZ2AaxD04').then(function(response) {
  console.log('SUCCESS!', response.status, response.text);
}, function(error) {
  console.log('FAILED...', error);
});
    }
  return (
    <div className="contactMe-container">
        <div className="contactMe-parent">
            <h1>Contact <span>Me</span></h1>
            <h6>lets Get in touch</h6>
        </div>
        <form action="submit" method="post" onSubmit={handleSubmit}> 
         <input type="text" name='name' id='' onChange={handleChange} value={data.name} placeholder='Enter Your Name' />
            <input type="email" name='email' id='' onChange={handleChange} value={data.email} placeholder='example@gmail.com' />
            <input type="phone" name='phone' id='' onChange={handleChange} value={data.phone} placeholder='+213' />
            <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder='Write you message here...'></textarea>
           
            <button  className='btn highlited-button'>Send</button>
        </form>
        
    </div>
  )
}

export default ContactMe