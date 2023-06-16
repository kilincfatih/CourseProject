import React from 'react';
import BannerImage from '../assets/deneme.jpg';
import '../styles/Contact.css'

export const Contact = () => {
  return <div className='contact'>
    <div className='leftSide' style={{ background: `url(${BannerImage})` }}>

    </div>
    <div className='rightSide'>
      <h1>Bizimle Iletisime Gecin</h1>
      <form>
      <label>Mesajiniz</label>
        <input
          type='text'
          name='name'
          placeholder='Lutfen adinizi soyadinizi giriniz...'
        />
        <label>Mesajiniz</label>
        <input
          type='email'
          name='email'
          placeholder='Lutfen emailinizi giriniz...'
        />
        <label>Mesajiniz</label>
        <textarea
          rows="6"
          name="message"
          placeholder='Lutfen mesajinizi giriniz'
        ></textarea>
      </form>
    </div>
  </div>
}
export default Contact;