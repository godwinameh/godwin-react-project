import React from 'react'
import './PartFooter.css'
import { Link } from 'react-router-dom'


const PartFooter = () => {
  return (
    <div className="part-footer">
        <div className="footer-bottom">
                <p>KoboWeb Group © 2022. All rights reserved. | <Link to="/terms">Terms & Conditions</Link> | <Link to="/privacy">Privacy Policy</Link></p>
            </div>  
    </div>
  )
}

export default PartFooter