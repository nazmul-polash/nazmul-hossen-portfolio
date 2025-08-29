import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import ContactDetailsCard from '../../components/ContactDetailsCard'

const contactDetails = [
   {
      icon: '📞',
      value: '+880 1234567890',
      title: 'Phone',
      link: 'tel:+8801234567890'
   },
   {
      icon: '📞',
      value: '+880 1234567890',
      title: 'Phone',
      link: 'tel:+8801234567890'
   },
   {
      icon: '📞',
      value: '+880 1234567890',
      title: 'Phone',
      link: 'tel:+8801234567890'
   },
   {
      icon: '📞',
      value: '+880 1234567890',
      title: 'Phone',
      link: 'tel:+8801234567890'
   },
]

export default function Contact() {
   return (
      <section className='py-10 px-4'>
         <SectionTitle title='Contact Me' />
         <div className='container mt-10 flex flex-col gap-10 rounded-2xl p-10 md:flex-row md:gap-12'>
            <div className='flex flex-1 items-center justify-center'>
               <img src="" alt="" className='h-40'/>
            </div>
            <div className='flex flex-1 flex-col gap-4'>
               <h1 className='font-serif text-3xl font-bold'>Get in Touch</h1>
               <p>Have a question or want to work together? Fell free to reach out via the option below. I'll get back to you as soon as possible</p>
            </div>
            <div className='flex flex-col gap-4'>
               {
                  contactDetails.map((contact) => (
                     <div key={contact.value} className='flex items-center gap-4'>
                        <ContactDetailsCard contact={contact} />
                     </div>
                  ))
               }
            </div>
         </div>
      </section>
   )
}
