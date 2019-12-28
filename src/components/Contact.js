import React, { forwardRef } from 'react'
import './Contact.scss'

const Contact = forwardRef((props, ref) =>{
    return (
        <section ref={ref} className='contact'>
            <p style={{ fontSize: '12px' }}>Get in touch</p>
      <h5
        className='section-heading'
        style={{ color: 'black', fontWeight: '600' }}>
        Contact
      </h5>
        </section>
    )
})

export default Contact