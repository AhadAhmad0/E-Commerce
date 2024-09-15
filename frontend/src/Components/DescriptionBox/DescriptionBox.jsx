import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that faciliates the buying and sellingof products or services
                over the internet serves as a virtual marketplace where business and individual showcase their products
                ,interact with customers, and conduct transsactions without the need for a physical presence. E-commerce
                website have gained immense popularity due to their accessibility, and the global reach they offer.
            </p>
            <p>E-commerce websites typically display products or services a detailed descriptions, images, prices, and any
                avialable variety(e.g., sizes, colors). Each product usually has its own description with relevant information.
            </p>
        </div>

    </div>
  )
}
