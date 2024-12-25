import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import Section from '../components/Section'

const Contact = () => {
  const [formData, setFormData] = useState(new FormData())

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(formData.name && formData.email && formData.message)) {
      alert('Something went wrong!')
      return
    }

    alert(`Thanks ${formData.name}, I will shortly connect with you!`)
    axios.post('https://formspree.io/f/mjvlnvbn', formData, {
      Accept: 'application/json',
    })
    setFormData({})
  }

  return (
    <Section id='contact' title='Contact'>
      <div className='row justify-content-between'>
        <div className='col-md-5 order-last order-lg-first' data-aos='fade-up'>
          <div className='subheading mb-3'>I'd love to hear from you!</div>
          <form>
            <div className='form-group pt-1 pb-2'>
              <label htmlFor='username'>Full Name</label>
              <input
                type='text'
                className='form-control'
                id='username'
                name='name'
                aria-describedby='emailHelp'
                placeholder='Enter your name'
                value={formData.name || ''}
                onChange={handleChange}
              />
            </div>
            <div className='form-group pt-2 pb-3'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                aria-describedby='emailHelp'
                placeholder='Enter email address'
                value={formData.email || ''}
                onChange={handleChange}
              />
            </div>
            <div className='form-group pb-4'>
              <label htmlFor='userMessage'>Message</label>
              <textarea
                className='form-control'
                id='userMessage'
                name='message'
                rows='3'
                placeholder='Enter message'
                value={formData.message || ''}
                onChange={handleChange}
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className='col-md-6 mb-5 mb-lg-0' data-aos='fade-up'>
          <div className='subheading mb-3'>Reach out to me directly :)</div>

          <div className='contact-direct'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <ImLocation />
                  </span>
                  <p>Ganesh Gali, Rohida, Rajasthan, India</p>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p><a href='tel:+919521345042' style={{ color: 'inherit', textDecoration: 'none' }}>+91 9521345042</a></p>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <FaRegEnvelope />
                  </span>
                  <p><a href='mailto:pateldivyam26@gmail.com' style={{ color: 'inherit', textDecoration: 'none' }}>
                    pateldivyam26@gmail.com
                  </a></p>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <FaLinkedin />
                  </span>
                  <p><a href='https://linkedin.com/in/divyam-patel-265303201/' style={{ color: 'inherit', textDecoration: 'none' }}>
                  divyam-patel
                  </a></p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='contact-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14285.456741967007!2d73.1154577!3d26.4762165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6c9a5a9b08db22e!2sIndian%20Institute%20of%20Technology%20Jodhpur!5e0!3m2!1sen!2sin!4v1657119337086!5m2!1sen!2sin" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              frameBorder='0'
              allowFullScreen=''
              aria-hidden='false'
              title='Contact Me'
              tabIndex='0'
            ></iframe>
          </div> */}
        </div>
      </div>

      <p className='py-3 m-0 mt-5 text-center text-secondary'>
        Made with ❤️ by Divyam Patel
      </p>
    </Section>
  )
}

export default Contact
