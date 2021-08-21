import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


import "../styles/Footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
            <InstagramIcon />
            <WhatsAppIcon />
            <FacebookIcon />
            <MailOutlineIcon />
            </div>
            <p> &copy; kumigernhardt 2021 </p>
            <p>Impressum</p>
        </div>
    )
}

export default Footer
