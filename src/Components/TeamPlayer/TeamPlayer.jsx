import React from 'react'
import './TeamPlayer.css'
import lady1 from '../../assets/lady1.svg'
import lady2 from '../../assets/lady2.svg'
import lady4 from '../../assets/lady4.svg'
import gentle1 from '../../assets/gentle1.svg'
import gentle2 from '../../assets/gentle2.svg'
import gentle3 from '../../assets/gentle3.svg'
import gentle4 from '../../assets/gentle4.svg'
import gentle5 from '../../assets/gentle5.svg'

const TeamPlayer = () => {
  return (
    <div className="container-main">
        <div className="items-container">
            <div className="text-content-container">
                <h1>Meet the Team making it Possible</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non. Amet, a ante et cursus vel. Sodales porta porta varius suspendisse faucibus phasellus lectus turpis placerat. Condimentum ultrices diam in vel et faucibus natoque tortor. Velit ut vulputate id tristique duis pharetra, volutpat lacus, iaculis. In sed tristique ut tellus varius quis ornare arcu. Consectetur sit id mattis adipiscing arcu. Vitae sed nullam egestas arcu sapien eget. Semper ornare consectetur molestie dolor fermentum elit mauris, id scelerisque. Dolor at feugiat metus, donec ultricies bibendum ornare. In malesuada in sapien, donec nec varius velit integer sed.</p>
            </div>
            <div className="image-items">
                <div className="unisex-items">
                    <div className="image-text">
                    <img src={lady1} alt="image" />
                    <h3>Biola Abinbola</h3>
                    <p>Founder</p>
                    </div>
                    <div className="image-text">
                    <img src={gentle1} alt="image" />
                    <h3>Biola Abinbola</h3>
                    <p>Founder</p>
                    </div>
                </div>
                <div className="unisex-items">
                    <div className="image-text">
                    <img src={gentle2} alt="image" />
                    <h3>Biola Abinbola</h3>
                    <p>Founder</p>
                    </div>
                    <div className="image-text">
                    <img src={gentle3} alt="image" />
                    <h3>Biola Abinbola</h3>
                    <p>Founder</p>
                    </div>
                </div>
                <div className="unisex-items">
                    <div className="image-text">
                    <img src={lady2} alt="image" />
                    <h3>Biola Abinbola</h3>
                    <p>Founder</p>
                    </div>
                    <div className="image-text">
                    <img src={gentle4} alt="image" />
                    <h3>Biola Abinbola</h3>
                    <p>Founder</p>
                    </div>
                </div>
                <div className="unisex-items">
                    <div className="image-text">
                    <img src={gentle5} alt="image" />
                    <h3>Biola Abinbola</h3>
                    <p>Founder</p>
                    </div>
                    <div className="image-text">
                    <img src={lady4} alt="image" />
                    <h3>Biola Abinbola</h3>
                    <p>Founder</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamPlayer