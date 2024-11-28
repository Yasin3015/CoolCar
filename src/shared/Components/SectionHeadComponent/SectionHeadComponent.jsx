import React from 'react';
import './SectionHeadComponent.css'

const SectionHeadComponent = ({title, link}) => {
  return (
    <div className='sec-header-comonent'>
        <p>{title}</p>
        <a href={link} >عرض الكل</a>
    </div>
  )
}

export default SectionHeadComponent