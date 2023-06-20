import React, { useContext } from 'react';
import LangContext from '../contexts/LangContext';
import Address from './contact/Address';
import Social from './contact/Social';
import Form from './contact/Form';
import Title from './Title';

const Contact = () => {
    const { text } = useContext(LangContext);

    return (
        <div className="contact">
            <div
                className="container grid-gallery main-content  mb-2"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
            >
                <Title mainTitle={text.contactTitle1} secondTitle={text.contactTitle2} bgTitle={text.contactSubtitle} />
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3 text-center text-sm-center">
                            {text.contactContentTitle}
                        </h3>
                        <p className="open-sans-font mb-4 justify">
                            {text.contactContentSubtitle}
                        </p>

                        <Address />
                        <Social />
                    </div>

                    <div className="col-12 col-lg-8">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
