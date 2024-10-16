import React from 'react'
import './Multi.css'
import girl from '../../assets/girl.svg'

const Multi = () => {
  return (
    <div className="main-container">
        <div className="multi">
            <div className="image-container">
                <img src={girl} alt="girl image" class="animate__animated animate__bounce"/>
            </div>
            <div className="container-text">
                <h1>At First Multiple,
                We put you First</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non. Amet, a ante et cursus vel. Sodales porta porta varius suspendisse faucibus phasellus lectus turpis placerat. Condimentum ultrices diam in vel et faucibus natoque tortor. Velit ut vulputate id tristique duis pharetra, volutpat lacus, iaculis. In sed tristique ut tellus varius quis ornare arcu. Consectetur sit id mattis adipiscing arcu. Vitae sed nullam egestas arcu sapien eget. Semper ornare consectetur molestie dolor fermentum elit mauris, id scelerisque. Dolor at feugiat metus, donec ultricies bibendum ornare. In malesuada in sapien, donec nec varius velit integer sed.</p>
            </div>
        </div>
    </div>
  )
}

export default Multi