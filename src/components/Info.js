import React from "react";
import semir from "../assets/semir.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Info(){
    return (
        <header>
            
            <div className="picture">
                <img src={semir} alt="" />
            </div>
            <h1>Semir Hamid</h1>
            <p>Frontend Developer</p>
            <a href="#">semhamirid@gmail.com</a>
            <div className="buttons">
                <button><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className="linkedinbuttoncolor"><FontAwesomeIcon className="linkedbutton" icon={faLinkedinIn} /> LinkedIn</button>
            </div>
        </header>
    )
}