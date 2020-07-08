import React from "react"
import {
  FaFacebookSquare,
  FaFlickr,
  FaTwitterSquare,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://www.facebook.com/turistamexico">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://www.flickr.com/groups/turistayucatan">
          <FaFlickr className="social-icon dribble-icon"></FaFlickr>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/turistamexico">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
