import React from "react"
import { Link } from "gatsby"
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          Posts
          {children}
        </Link>
      </li>
      <li>
        <Link to="/noticias" className="page-link">
          Noticias
          
        </Link>
      </li>
    </ul>
  )
}

export default Links
