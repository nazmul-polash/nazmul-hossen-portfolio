import React from 'react'

export default function ContactDetailsCard({contact}) {
  return (
     <div className='flex items-center gap-4 '>
        <span>{contact.icon}</span>
        {contact.link ? <a href={contact.link} className='text-sm text-blue-500 hover:underline'>{contact.value}</a> : <p className='text-sm'>{contact.value}</p>}
       
    </div>
  )
}
