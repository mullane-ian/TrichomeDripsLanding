import React from 'react'
import './Footer.css'



function Footer () {
    return(
        <section className='footer'>
            <hr className='footer-seperator'/>
            <section className='footer-social-media'>
                <a href="/" target="_blank">Social</a>
            </section>
            <section className='footer-info'>
                <section className='footer-info-left'>
                    <section className='footer-info__name'>
                        Trichome Drips
                    </section>
                    <section className='footer-info__returns'>
                        Where to puchase
                        <br />
                        Chron City
                    </section>
                </section>
                <section className='footer-info-center'>
                    <section className='footer-info__email'>
                        contact
                    </section>
                    <section className='footer-info__terms'>
                        Terms and conditions
                        <br />
                        Copyright
                    </section>
                </section>
                <section className='footer-info-right'>
                    <section className='footer-info__number'>
                        contact
                    </section>
                    <section className='footer-info__contact'>
                        Terms and conditions
                        <br />
                        Copyright
                    </section>
                </section>
            </section>
            <hr className='footer-seperator'/>

        </section>
    )
}


export default Footer