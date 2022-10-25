import React from 'react'
import ExternalLinkIcon from '../components/ExternalLinkIcon'

const FooterSection = () => {
  return (
    <footer>
        <div className='socialmedia'>
            <ExternalLinkIcon link="https://sv-se.facebook.com/" icon="fa-brands fa-facebook-f" />
            <ExternalLinkIcon link="https://www.instagram.com/" icon="fa-brands fa-instagram" />
            <ExternalLinkIcon link="https://twitter.com/?lang=sv" icon="fa-brands fa-twitter" />
            <ExternalLinkIcon link="https://www.google.com/" icon="fa-brands fa-google" />
            <ExternalLinkIcon link="https://se.linkedin.com/" icon="fa-brands fa-linkedin" />
        </div>
        <div>© 2022 Fixxo. All Rights Reserved</div>
</footer>
  )
}

export default FooterSection