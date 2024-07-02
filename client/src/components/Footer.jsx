import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='transparent' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/share/e4QH1XKfZgurr2Zb/?mibextid=qi2Omg' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
         
          <a href='https://www.instagram.com/indianeventcelebarity?igsh=MTJha3drMGxnNjFrZQ==' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
         
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='dark' icon='gem' className='me-3' />
                Indian Event Managemnet
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Bollywood
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bengali
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bhojpuri
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Punjabi
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
      Ho:  Janabai Smruti Sector-19 Plot No A-157  Shop No.1  Koparkhairne Navi Mumbai Maharashtra - 400709
 
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                indianevent12@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 6205419490
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +91 7258862207
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024Copyright:
        <a className='text-reset fw-bold' href='http://indiansevent.com/'>
          indiansevent.com
        </a>
      </div>
    </MDBFooter>
  );
}