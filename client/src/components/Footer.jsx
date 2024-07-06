import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './footer.css';

export default function Footer() {
  return (
    <MDBFooter className='footer text-center text-lg-start'>
      <section className='social-media d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Connect with us:</span>
        </div>
        <div>
          <a href='https://www.facebook.com/share/e4QH1XKfZgurr2Zb/?mibextid=qi2Omg' className='me-4 text-reset'>
            <MDBIcon fab icon='facebook-f' />
          </a>
          <a href='https://www.instagram.com/indianeventcelebarity?igsh=MTJha3drMGxnNjFrZQ==' className='me-4 text-reset'>
            <MDBIcon fab icon='instagram' />
          </a>
        </div>
      </section>

      <section className='footer-content'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='me-3' />
                Indian Event Management
              </h6>
              <p>
                Bringing stars to your events. We handle everything from celebrity bookings to full event planning, ensuring a memorable experience for all.
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p><a href='#!' className='text-reset'>Bollywood</a></p>
              <p><a href='#!' className='text-reset'>Bengali</a></p>
              <p><a href='#!' className='text-reset'>Bhojpuri</a></p>
              <p><a href='#!' className='text-reset'>Punjabi</a></p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
              <p><a href='#!' className='text-reset'>Pricing</a></p>
              <p><a href='#!' className='text-reset'>Settings</a></p>
              <p><a href='#!' className='text-reset'>Orders</a></p>
              <p><a href='#!' className='text-reset'>Help</a></p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p><MDBIcon icon='home' className='me-2' />Janabai Smruti Sector-19 Plot No A-157 Shop No.1 Koparkhairne Navi Mumbai Maharashtra - 400709</p>
              <p><MDBIcon icon='envelope' className='me-3' />indianevent12@gmail.com</p>
              <p><MDBIcon icon='phone' className='me-3' />+91 6205419490</p>
              <p><MDBIcon icon='print' className='me-3' />+91 7258862207</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 footer-bottom'>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='http://indiansevent.com/'> indiansevent.com</a>
      </div>
    </MDBFooter>
  );
}
