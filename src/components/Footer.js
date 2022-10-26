import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub , faYoutube, faTwitter, faTelegram} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <div className="footer">
            <FontAwesomeIcon className= "fa-brands" icon={faLinkedinIn} />
            <FontAwesomeIcon className= "fa-brands" icon={faGithub} />
            <FontAwesomeIcon className= "fa-brands" icon={faTwitter} />
            <FontAwesomeIcon className= "fa-brands" icon={faYoutube} />
            <FontAwesomeIcon className= "fa-brands" icon={faTelegram} />

        </div>
    )
}