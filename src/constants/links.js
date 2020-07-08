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
        </Link>
        {children}
      </li>
    </ul>
  )
}

export default Links
