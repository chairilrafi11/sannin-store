import React from 'react'
import { NavLink } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div>
            <section>
                <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                    {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
 
                    </section> */}

                    <section  className='d-flex justify-content-center justify-content-lg-between p-1 border-bottom'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                            <MDBIcon color='secondary' icon='gem' className='' />
                            Sannin Store
                            </h6>
                            <p>
                            Top up games murah, aman dan berkualitas. Selalu buka 24 jam setiap hari. Jika ada kendala silahkan klik logo CS pada kanan bawah di website ini.
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Top Product</h6>
                            <p>
                            <a href='#!' className='text-reset'>
                                Mobile Legends bang Bang
                            </a>
                            </p>
                            <p>
                            <a href='#!' className='text-reset'>
                                PUBG Mobile
                            </a>
                            </p>
                            <p>
                            <a href='#!' className='text-reset'>
                                Genshin Impact
                            </a>
                            </p>
                            <p>
                            <a href='#!' className='text-reset'>
                                Free Fire
                            </a>
                            </p>
                        </MDBCol>

                        {/* <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
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
                        </MDBCol> */}

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                            <MDBIcon color='secondary' icon='home' className='me-2' />
                            Bandung
                            </p>
                            <p>
                            <MDBIcon color='secondary' icon='envelope' className='me-2' />
                            official.sannin.store@gmail.com
                            </p>
                            <p>
                            <   MDBIcon color='secondary' icon='phone' className='me-2' /> +62 851 5648 4107
                            </p>
                            {/* <p>
                                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                            </p> */}
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    </section>

                    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright Sannin Store
                    {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'> */}
                        
                    {/* </a> */}
                    </div>
                </MDBFooter>
            </section>
        </div>
    )
}

export default Footer;
