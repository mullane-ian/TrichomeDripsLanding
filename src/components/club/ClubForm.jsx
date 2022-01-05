import React, { Suspense, useRef } from 'react'
import './ClubForm.css'
import Footer from '../footer/Footer'

 
function ClubForm() {
  return (
    <div className='club-form'>
      <div className="form-container">
     
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfTMiBlHR_-TZwoHkx_XkzyZdsGs0AY0vM_CmNmPGdNB1ihnA/viewform?embedded=true" width="640" height="1520" >Loading…</iframe>

    </div>
    <Footer />

      </div>
  );

}

export default ClubForm;
