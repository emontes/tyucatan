import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>&copy;{new Date().getFullYear()} TYucatán. Derechos Reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
